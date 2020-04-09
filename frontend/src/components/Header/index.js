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
          <Link to="/orders">ENCOMENDAS</Link>
          <Link to="/deliverymans">ENTREGADORES</Link>
          <Link to="/recipients">DESTINATÁRIOS</Link>
          <Link to="/problems">PROBLEMAS</Link>
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
