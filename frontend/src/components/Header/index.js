import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import logo from '~/asserts/logo.png';

import { Container, Content, Profile } from './styles';

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="Fastfeet" />
          <NavLink to="/orders" activeClassName="selected">
            ENCOMENDAS
          </NavLink>
          <NavLink to="/deliverymans" activeClassName="selected">
            ENTREGADORES
          </NavLink>
          <NavLink to="/recipients" activeClassName="selected">
            DESTINATÁRIOS
          </NavLink>
          <NavLink to="/problems" activeClassName="selected">
            PROBLEMAS
          </NavLink>
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
