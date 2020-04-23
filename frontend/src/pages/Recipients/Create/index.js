import React from 'react';

import { toast } from 'react-toastify';

import history from '~/services/history';
import api from '~/services/api';

import FormRecipient from '../FormRecipients';

export default function CreateRecipient() {
  async function handleSubmit(data) {
    try {
      await api.post('recipients', data);
      toast.success('Destinatário cadastrado com sucesso!');
      history.push('/recipients');
    } catch (e) {
      toast.error(`Falha ao destinatário encomenda! ${e}`);
    }
  }

  return <FormRecipient func={handleSubmit} title="Cadastro de destinatário" />;
}
