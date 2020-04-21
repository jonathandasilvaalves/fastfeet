import React from 'react';

import { Container } from './styles';

export default function Pagination({ funcPage, page }) {
  return (
    <Container>
      <button
        type="button"
        disabled={page < 2}
        onClick={() => funcPage('back')}
      >
        Anterior
      </button>
      <span>Página {page}</span>
      <button type="button" onClick={() => funcPage('next')}>
        Próximo
      </button>
    </Container>
  );
}
