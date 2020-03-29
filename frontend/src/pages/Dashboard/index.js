import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MdAdd, MdSearch, MdMoreHoriz } from 'react-icons/md';

import api from '~/services/api';

import { Container, Search, Listing } from './styles';

export default function Dashboard() {
  const [orders, setOrders] = useState([]);
  const [nameOrder, setNameOrder] = useState('');

  useEffect(() => {
    async function loadOrders() {
      const response = await api.get('orders', {
        params: {
          page: 1,
          name: nameOrder,
        },
      });

      setOrders(response.data);
    }
    loadOrders();
  }, [nameOrder]);

  function handleInputChange(e) {
    setNameOrder(e.target.value);
    console.tron.log(nameOrder);
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
            <Link to="/">CADASTRAR</Link>
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
            <tr>
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
              <td>Entregue</td>
              <td>
                <MdMoreHoriz size={25} />
              </td>
            </tr>
          ))}
        </tbody>
      </Listing>
    </Container>
  );
}
