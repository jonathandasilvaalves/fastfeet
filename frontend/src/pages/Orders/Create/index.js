import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import { MdNavigateBefore, MdCheck } from 'react-icons/md';

import { toast } from 'react-toastify';

import history from '~/services/history';
import api from '~/services/api';

import ReactAsyncSelect from '~/components/ReactAsyncSelect';

import { Container, Compselects, Outros } from './styles';

export default function CreateOrder() {
  async function handleSubmit(data) {
    try {
      await api.post('orders', {
        recipient_id: data.recipients.id,
        deliveryman_id: data.deliveryman.id,
        product: data.produto,
      });
      toast.success('Encomenda cadastrada com sucesso!');
      history.push('/orders');
    } catch (e) {
      toast.error(`Falha ao cadastrar encomenda! ${e}`);
      console.tron.log(e);
    }
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <header>
          <strong>Cadastro de encomendas</strong>
          <div>
            <button type="button">
              <MdNavigateBefore size={20} />
              <Link to="/orders">VOLTAR</Link>
            </button>
            <button type="submit" id="salvar">
              <MdCheck size={20} />
              SALVAR
            </button>
          </div>
        </header>
        <Compselects>
          <ReactAsyncSelect
            rota="recipients"
            title="Destinatário"
            name="recipients"
          />
          <ReactAsyncSelect
            rota="deliveryman"
            title="Entregador"
            name="deliveryman"
          />
        </Compselects>
        <Compselects>
          <Outros>
            <strong>Nome do produto</strong>
            <Input name="produto" placeholder="Yamaha SX7" />
          </Outros>
        </Compselects>
      </Form>
    </Container>
  );
}
