import React, { useState } from 'react';
import {
  MdMoreHoriz,
  MdVisibility,
  MdModeEdit,
  MdDeleteForever,
} from 'react-icons/md';

import history from '~/services/history';

import { Container, Badge, Actions, Action } from './styles';

export default function ActionsOrder({ id }) {
  const [visible, setVisible] = useState(false);

  function handleEdit() {
    history.push(`deliverymans/edit/${id}`);
  }

  return (
    <Container>
      <Badge>
        <MdMoreHoriz
          onClick={() => setVisible(value => !value)}
          size={25}
          color="#bfbfbf"
        />
      </Badge>

      <Actions visible={visible}>
        <Action>
          <MdVisibility size={15} color="#7149c1" />
          <button type="button">Visualizar</button>
        </Action>
        <Action onClick={() => handleEdit()}>
          <MdModeEdit size={15} color="#0066ff" />
          <button type="button">Editar</button>
        </Action>
        <Action>
          <MdDeleteForever size={15} color="#ff0000" />
          <button type="button">Excluir</button>
        </Action>
      </Actions>
    </Container>
  );
}
