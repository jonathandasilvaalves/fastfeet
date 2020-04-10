import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { toast } from 'react-toastify';
import history from '~/services/history';
import FormDeliveryman from '../FormDeliveryman';

import api from '~/services/api';

export default function EditDeliveryman() {
  const [dados, setDados] = useState({});

  const { id } = useParams();

  useEffect(() => {
    async function handleOpen() {
      const { data } = await api.get('deliveryman', {
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
      await api.put('deliveryman', data);
      toast.success('Entregador editado com sucesso!');
      history.push('/deliverymans');
    } catch (err) {
      toast.error(`Erro ao editar entregador!${err}`);
    }
  }

  return (
    <>
      <FormDeliveryman
        title="Editar entregadores"
        initial={dados}
        functi={() => handleSubmit}
        id={id}
      />
    </>
  );
}
