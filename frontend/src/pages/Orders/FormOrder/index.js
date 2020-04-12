import React from 'react';

import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import { MdNavigateBefore, MdCheck } from 'react-icons/md';

import ReactAsyncSelect from '~/components/ReactAsyncSelect';

import { Container, Compselects, Outros } from './styles';

export default function FormOrder({ func, title, initial }) {
  return (
    <Container>
      <Form initialData={initial} onSubmit={func}>
        <header>
          <strong>{title}</strong>
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
            name="recipient_id"
          />
          <ReactAsyncSelect
            rota="deliveryman"
            title="Entregador"
            name="deliveryman_id"
          />
        </Compselects>
        <Compselects>
          <Outros>
            <strong>Nome do produto</strong>
            <Input name="product" placeholder="Yamaha SX7" />
          </Outros>
        </Compselects>
      </Form>
    </Container>
  );
}
