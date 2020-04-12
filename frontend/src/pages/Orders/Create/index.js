import React from 'react';

import { toast } from 'react-toastify';

import history from '~/services/history';
import api from '~/services/api';

import FormOrder from '../FormOrder';

export default function CreateOrder() {
  async function handleSubmit(data) {
    try {
      await api.post('orders', {
        recipient_id: data.recipient_id,
        deliveryman_id: data.deliveryman_id,
        product: data.product,
      });
      toast.success('Encomenda cadastrada com sucesso!');
      history.push('/orders');
    } catch (e) {
      toast.error(`Falha ao cadastrar encomenda! ${e}`);
    }
  }

  return <FormOrder func={handleSubmit} title="Criado encomenda" initial />;
}
