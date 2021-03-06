import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MdAdd, MdSearch, MdBrightness1 } from 'react-icons/md';

import ActionsOrder from '~/components/ActionsOrder';
import Pagination from '~/components/Pagination';

import api from '~/services/api';

import { Container, Search, Listing, Status } from './styles';

export default function Orders() {
  const [orders, setOrders] = useState([]);
  const [nameOrder, setNameOrder] = useState('');
  const [page, setPage] = useState(1);
  const [reflesh, setReflesh] = useState(false);

  useEffect(() => {
    async function loadOrders() {
      const response = await api.get('orders', {
        params: {
          page,
          per_page: 5,
          name: nameOrder,
        },
      });

      const data = response.data.map(order => ({
        ...order,
        status: order.canceled_at
          ? 'Cancelado'
          : order.end_date
          ? 'Entregue'
          : order.start_date
          ? 'Retirado'
          : 'Pendente',
      }));
      setOrders(data);
      setReflesh(false);
    }
    loadOrders();
  }, [nameOrder, page, reflesh]);

  function handleInputChange(e) {
    setNameOrder(e.target.value);
  }

  function handleReflesh() {
    setReflesh(true);
  }

  async function handlePage(action) {
    setPage(action === 'back' ? page - 1 : page + 1);
  }

  return (
    <Container>
      <header>
        <strong>Gerenciando encomendas</strong>
        <div>
          <Search>
            <MdSearch size={20} />
            <input
              type="text"
              placeholder="Buscar por encomendas"
              onChange={handleInputChange}
            />
          </Search>
          <button type="button">
            <MdAdd size={20} color="#fff" />
            <Link to="/orders/create">CADASTRAR</Link>
          </button>
        </div>
      </header>
      <Listing>
        <thead>
          <tr>
            <th>ID</th>
            <th>Destinatário</th>
            <th>Entregador</th>
            <th>Cidade</th>
            <th>Estado</th>
            <th>Status</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order.id}>
              <td>#{order.id}</td>
              <td>{order.Recipient.name}</td>
              <td>
                <div>
                  <img
                    src={
                      order.Deliveryman.DeliverymanFile
                        ? order.Deliveryman.DeliverymanFile.url
                        : 'https://api.adorable.io/avatars/40/abott@adorable.png'
                    }
                    alt="Imagem"
                  />
                  {order.Deliveryman.name}
                </div>
              </td>
              <td>{order.Recipient.city}</td>
              <td>{order.Recipient.state}</td>
              <td>
                <Status statusOrder={order.status}>
                  <MdBrightness1 size={10} />
                  {order.status}
                </Status>
              </td>
              <td>
                <ActionsOrder
                  entity="orders"
                  item={order}
                  edit
                  delet
                  view
                  reflesh={handleReflesh}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </Listing>
      <Pagination funcPage={handlePage} page={page} />
    </Container>
  );
}
