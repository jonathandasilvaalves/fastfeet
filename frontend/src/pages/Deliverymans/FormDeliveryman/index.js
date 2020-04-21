import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import { MdNavigateBefore, MdCheck } from 'react-icons/md';

import Avatar from '~/components/Avatar';

import { Container, Blocimage, BlocInputs, Campsform } from './styles';

export default function FormDeliveryman({ title, initial, functi, id }) {
  return (
    <Container>
      <Form initialData={initial} onSubmit={functi}>
        <header>
          <strong>{title}</strong>
          <div>
            <button type="button">
              <MdNavigateBefore size={20} />
              <Link to="/deliverymans">VOLTAR</Link>
            </button>
            <button type="submit" id="salvar">
              <MdCheck size={20} />
              SALVAR
            </button>
          </div>
        </header>
        <Campsform>
          <Blocimage>
            <Avatar name="deliverymanfile" id={id} />
          </Blocimage>
          <BlocInputs>
            <strong>Nome</strong>
            <Input name="name" type="text" placeholder="Escreva o nome" />
            <strong>Email</strong>
            <Input
              name="email"
              type="email"
              placeholder="Seu endereço de e-mail"
            />
          </BlocInputs>
        </Campsform>
      </Form>
    </Container>
  );
}
