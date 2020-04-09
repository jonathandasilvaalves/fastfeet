import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import { MdNavigateBefore, MdCheck } from 'react-icons/md';

import { toast } from 'react-toastify';

import history from '~/services/history';

import Avatar from '~/components/Avatar';

import api from '~/services/api';

import { Container, Blocimage, BlocInputs, Campsform } from './styles';

export default function CreateDeliveryman() {
  const [dados, setDados] = useState({
    DeliverymanFile: null,
  });

  async function handleSubmit(data) {
    try {
      await api.post('deliveryman', data);
      console.tron.log(data);
      toast.success('Entregador cadastrado com sucesso!');
      history.push('/deliverymans');
    } catch (err) {
      toast.error('Erro ao cadastrar entregador!');
    }
  }

  return (
    <Container>
      <Form initialData={dados} onSubmit={handleSubmit}>
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
        <Campsform>
          <Blocimage>
            <Avatar name="avatar_id" />
          </Blocimage>
          <BlocInputs>
            <strong>Nome</strong>
            <Input name="name" type="text" placeholder="Escreva o nome" />
            <strong>Email</strong>
            <Input
              name="email"
              type="email"
              placeholder="Seu endereço de e-mail "
            />
          </BlocInputs>
        </Campsform>
      </Form>
    </Container>
  );
}
