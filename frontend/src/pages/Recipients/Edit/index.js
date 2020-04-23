import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { toast } from 'react-toastify';

import history from '~/services/history';
import api from '~/services/api';

import FormRecipient from '../FormRecipients';

export default function EditRecipient() {
  const [dados, setDados] = useState({});

  const { id } = useParams();

  useEffect(() => {
    async function handleOpen() {
      const { data } = await api.get('recipients', {
        params: {
          id,
        },
      });
      const response = data[0];
      setDados(response);
    }
    handleOpen();
    console.tron.log(dados);
  }, []);

  async function handleSubmit(data) {
    try {
      await api.put('recipients', { id, ...data });
      toast.success('Destinatário cadastrado com sucesso!');
      console.tron.log({ id, ...data });
      history.push('/recipients');
    } catch (err) {
      toast.error(`Erro ao editar destinatário! ${err}`);
    }
  }

  return (
    <FormRecipient
      initial={dados}
      title="Edição de destinatário"
      func={handleSubmit}
    />
  );
}
