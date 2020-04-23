import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import { MdNavigateBefore, MdCheck } from 'react-icons/md';

import { Container, BlocInputs, Campsform, CompInputs } from './styles';

export default function FormRecipients({ title, initial, func, id }) {
  return (
    <Container>
      <Form initialData={initial} onSubmit={func}>
        <header>
          <strong>{title}</strong>
          <div>
            <button type="button">
              <MdNavigateBefore size={20} />
              <Link to="/recipients">VOLTAR</Link>
            </button>
            <button type="submit" id="salvar">
              <MdCheck size={20} />
              SALVAR
            </button>
          </div>
        </header>
        <Campsform>
          <BlocInputs>
            <CompInputs>
              <div>
                <label htmlFor="name">Nome</label>
                <Input name="name" type="text" placeholder="Escreva o nome" />
              </div>
            </CompInputs>
            <CompInputs>
              <div>
                <label htmlFor="street">Rua</label>
                <Input name="street" type="text" placeholder="Sua rua" />
              </div>
              <div>
                <label htmlFor="number">Número</label>
                <Input name="number" type="text" placeholder="1729" />
              </div>
              <div>
                <label htmlFor="complement">Complemento</label>
                <Input name="complement" type="text" />
              </div>
            </CompInputs>
            <CompInputs>
              <div>
                <label htmlFor="city">Cidade</label>
                <Input name="city" type="text" placeholder="Londrina" />
              </div>
              <div>
                <label htmlFor="state">Estado</label>
                <Input name="state" type="text" placeholder="Paraná" />
              </div>
              <div>
                <label htmlFor="cep">CEP</label>
                <Input name="cep" type="text" placeholder="86020-000" />
              </div>
            </CompInputs>
          </BlocInputs>
        </Campsform>
      </Form>
    </Container>
  );
}
