import React from 'react';

import { Container, Button } from './styles';

export default function ConfirmDelete({ onClose, onDelete, id }) {
  return (
    <Container>
      <h1>Tem certeza que deseja apagar?</h1>
      <div>
        <Button onClick={onClose}>Cancelar</Button>
        <Button
          onClick={() => {
            onDelete(id);
            onClose();
          }}
        >
          Confirmar
        </Button>
      </div>
    </Container>
  );
}
