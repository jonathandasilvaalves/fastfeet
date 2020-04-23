import React, { useState } from 'react';
import {
  MdMoreHoriz,
  MdVisibility,
  MdModeEdit,
  MdDeleteForever,
} from 'react-icons/md';
import { confirmAlert } from 'react-confirm-alert';
import { toast } from 'react-toastify';

import api from '~/services/api';
import history from '~/services/history';

import ConfirmDelete from '~/components/ConfirmDelete';
import ViewOrder from '~/components/ViewOrder';

import {
  Container,
  Badge,
  Actions,
  ActionView,
  ActionEdit,
  ActionDelete,
} from './styles';

export default function ActionsOrder({
  entity,
  item,
  edit,
  delet,
  view,
  reflesh,
  canceled,
}) {
  const [visible, setVisible] = useState(false);
  const [openView, setOpenView] = useState(false);

  function handleEdit() {
    history.push(`${entity}/edit/${item.id}`);
  }

  async function handleDelete(id) {
    try {
      await api.delete(`/${entity}/${id}`);
      toast.success('Ação executada com sucesso!');
      reflesh();
    } catch (error) {
      toast.error(`${error}Erro ao executar ação`);
    }
  }

  function deleteItem() {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <ConfirmDelete
            id={item.id}
            onClose={onClose}
            onDelete={handleDelete}
          />
        );
      },
    });
  }

  function handleView() {
    setOpenView(value => !value);
    setVisible(value => !value);
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
        <ActionView visible={view} onClick={() => handleView(item.id)}>
          <MdVisibility size={15} color="#7149c1" />
          <button type="button">Visualizar</button>
        </ActionView>

        <ActionEdit visible={edit} onClick={() => handleEdit()}>
          <MdModeEdit size={15} color="#0066ff" />
          <button type="button">Editar</button>
        </ActionEdit>

        <ActionDelete visible={delet} onClick={() => deleteItem()}>
          <MdDeleteForever size={15} color="#ff0000" />
          <button type="button">Excluir</button>
        </ActionDelete>

        <ActionDelete visible={canceled} onClick={() => deleteItem()}>
          <MdDeleteForever size={15} color="#ff0000" />
          <button type="button">Cancelar encomenda</button>
        </ActionDelete>
      </Actions>
      {entity === 'orders' && (
        <ViewOrder open={openView} setOpen={setOpenView} item={item} />
      )}
    </Container>
  );
}
