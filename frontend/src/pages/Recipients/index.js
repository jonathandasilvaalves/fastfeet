import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MdAdd, MdSearch } from 'react-icons/md';

import ActionsOrder from '~/components/ActionsOrder';

import api from '~/services/api';

import { Container, Search, Listing } from './styles';

export default function Recipients() {
  const [recipients, setRecipients] = useState([]);
  const [nameRecipient, setNameRecipient] = useState('');

  useEffect(() => {
    async function loadDeliveryman() {
      const { data } = await api.get('recipients', {
        params: {
          page: 1,
          name: nameRecipient,
        },
      });

      const response = data.map(dado => ({
        ...dado,
        address: `${dado.street}, ${dado.number}, ${dado.city} - ${dado.state}`,
      }));

      setRecipients(response);
    }
    loadDeliveryman();
  }, [nameRecipient]);

  function handleInputChange(e) {
    setNameRecipient(e.target.value);
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
              placeholder="Buscar por destinatários"
              onChange={handleInputChange}
            />
          </Search>
          <button type="button">
            <MdAdd size={20} color="#fff" />
            <Link to="/recipients/create">CADASTRAR</Link>
          </button>
        </div>
      </header>
      <Listing>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Endereço</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {recipients.map(recipient => (
            <tr key={recipient.id}>
              <td>#{recipient.id}</td>
              <td>{recipient.name}</td>
              <td>{recipient.address}</td>
              <td>
                <ActionsOrder />
              </td>
            </tr>
          ))}
        </tbody>
      </Listing>
    </Container>
  );
}
