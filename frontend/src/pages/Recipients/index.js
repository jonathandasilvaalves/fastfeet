import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MdAdd, MdSearch } from 'react-icons/md';

import ActionsOrder from '~/components/ActionsOrder';
import Pagination from '~/components/Pagination';

import api from '~/services/api';

import { Container, Search, Listing } from './styles';

export default function Recipients() {
  const [recipients, setRecipients] = useState([]);
  const [nameRecipient, setNameRecipient] = useState('');
  const [page, setPage] = useState(1);
  const [reflesh, setReflesh] = useState(false);

  useEffect(() => {
    async function loadDeliveryman() {
      const { data } = await api.get('recipients', {
        params: {
          page,
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
  }, [nameRecipient, page, reflesh]);

  function handleReflesh() {
    setReflesh(true);
  }

  function handleInputChange(e) {
    setNameRecipient(e.target.value);
  }
  async function handlePage(action) {
    setPage(action === 'back' ? page - 1 : page + 1);
  }

  return (
    <Container>
      <header>
        <strong>Gerenciando destinatários</strong>
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
                <ActionsOrder
                  entity="recipient"
                  item={recipient}
                  edit
                  delet
                  view={false}
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
