import React, { useState } from 'react';
import {
  MdMoreHoriz,
  MdVisibility,
  MdModeEdit,
  MdDeleteForever,
} from 'react-icons/md';

import history from '~/services/history';

import {
  Container,
  Badge,
  Actions,
  ActionView,
  ActionEdit,
  ActionDelete,
} from './styles';

export default function ActionsOrder({ url, edit, delet, view }) {
  const [visible, setVisible] = useState(false);

  function handleEdit() {
    history.push(`${url}`);
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
        <ActionView visible={view}>
          <MdVisibility size={15} color="#7149c1" />
          <button type="button">Visualizar</button>
        </ActionView>
        <ActionEdit visible={edit} onClick={() => handleEdit()}>
          <MdModeEdit size={15} color="#0066ff" />
          <button type="button">Editar</button>
        </ActionEdit>
        <ActionDelete visible={delet}>
          <MdDeleteForever size={15} color="#ff0000" />
          <button type="button">Excluir</button>
        </ActionDelete>
      </Actions>
    </Container>
  );
}
