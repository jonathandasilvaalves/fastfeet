import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MdAdd, MdSearch } from 'react-icons/md';

import ActionsOrder from '~/components/ActionsOrder';

import api from '~/services/api';

import { Container, Search, Listing } from './styles';

export default function Orders() {
  const [deliverymans, setDeliverymans] = useState([]);
  const [nameDeliveryman, setNameDeliveryman] = useState('');

  useEffect(() => {
    async function loadDeliveryman() {
      const { data } = await api.get('deliveryman', {
        params: {
          page: 1,
          name: nameDeliveryman,
        },
      });
      setDeliverymans(data);
    }
    loadDeliveryman();
  }, [nameDeliveryman]);

  function handleInputChange(e) {
    setNameDeliveryman(e.target.value);
  }

  return (
    <Container>
      <header>
        <strong>Gerenciando entregadores</strong>
        <div>
          <Search>
            <MdSearch size={20} />
            <input
              type="text"
              placeholder="Buscar por entregadores"
              onChange={handleInputChange}
            />
          </Search>
          <button type="button">
            <MdAdd size={20} color="#fff" />
            <Link to="/deliverymans/create">CADASTRAR</Link>
          </button>
        </div>
      </header>
      <Listing>
        <thead>
          <tr>
            <th>ID</th>
            <th>Foto</th>
            <th>Nome</th>
            <th>Email</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {deliverymans.map(deliveryman => (
            <tr key={deliveryman.id}>
              <td>#{deliveryman.id}</td>
              <td>
                <div>
                  <img
                    src={
                      deliveryman.DeliverymanFile
                        ? deliveryman.DeliverymanFile.url
                        : 'https://api.adorable.io/avatars/40/abott@adorable.png'
                    }
                    alt="Imagem Deliveryman"
                  />
                </div>
              </td>
              <td>{deliveryman.name}</td>
              <td>{deliveryman.email}</td>
              <td>
                <ActionsOrder id={deliveryman.id} />
              </td>
            </tr>
          ))}
        </tbody>
      </Listing>
    </Container>
  );
}
