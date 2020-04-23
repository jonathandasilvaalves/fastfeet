import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { toast } from 'react-toastify';

import history from '~/services/history';
import api from '~/services/api';

import FormOrder from '../FormOrder';

export default function EditOrder() {
  const [dados, setDados] = useState({});

  const { id } = useParams();

  useEffect(() => {
    async function handleOpen() {
      const { data } = await api.get('orders', {
        params: {
          id,
        },
      });
      const response = data[0];
      setDados(response);
    }
    handleOpen();
  }, []);

  async function handleSubmit(data) {
    try {
      await api.put('orders', {
        id,
        recipient_id: data.recipient_id,
        deliveryman_id: data.deliveryman_id,
        product: data.product,
      });
      toast.success('Encomenda editada com sucesso!');
      history.push('/orders');
    } catch (e) {
      toast.error(`Falha ao editar encomenda! ${e}`);
    }
  }

  return (
    <FormOrder
      func={handleSubmit}
      title="Edição de encomendas"
      initial={dados}
    />
  );
}
