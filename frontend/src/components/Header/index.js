import React from 'react';
import { Link } from 'react-router-dom';

import logo from '~/asserts/logo.png';

import { Container, Content, Profile } from './styles';

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="Fastfeet" />
          <Link to="/dashboard">ENCOMENDAS</Link>
          <Link to="/dashboard">ENTREGADORES</Link>
          <Link to="/dashboard">DESTINATÁRIOS</Link>
          <Link to="/dashboard">PROBLEMAS</Link>
        </nav>
        <aside>
          <Profile>
            <strong>Jonathan Alves</strong>
            <Link to="/logout">Sair do sistema</Link>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
