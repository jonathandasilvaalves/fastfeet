import React, { useState, useEffect } from 'react';

import ActionsOrder from '~/components/ActionsOrder';

import api from '~/services/api';

import { Container, Listing } from './styles';

export default function Problems() {
  const [problems, setProblems] = useState([]);

  useEffect(() => {
    async function loadProblems() {
      const { data } = await api.get('orders/list', {
        params: {
          page: 1,
        },
      });
      console.tron.log(data.problems);
      setProblems(data.problems);
    }
    loadProblems();
  }, []);

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
              <td>{problem.DeliveryProblems.description}</td>
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
