import React, { useState, useEffect } from 'react';

import ActionsOrder from '~/components/ActionsOrder';
import Pagination from '~/components/Pagination';

import api from '~/services/api';

import { Container, Listing } from './styles';

export default function Problems() {
  const [problems, setProblems] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function loadProblems() {
      const { data } = await api.get('orders/list', {
        params: {
          page,
        },
      });
      setProblems(data.problems);
    }
    loadProblems();
  }, [page]);

  async function handlePage(action) {
    setPage(action === 'back' ? page - 1 : page + 1);
  }

  return (
    <Container>
      <header>
        <strong>Gerenciando entregadores</strong>
      </header>
      <Listing>
        <thead>
          <tr>
            <th>Encomenda</th>
            <th>Problema</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {problems.map(problem => (
            <tr key={problem.id}>
              <td>#{problem.id}</td>
              <td>{problem.DeliveryProblems[0].description}</td>
              <td>
                <ActionsOrder canceled view />
              </td>
            </tr>
          ))}
        </tbody>
      </Listing>
      <Pagination funcPage={handlePage} page={page} />
    </Container>
  );
}
