import React from 'react';
import { format, parseISO } from 'date-fns';

import ModalReact from '~/components/ModalReact';

import { Container } from './styles';

export default function ViewOrder({ open, setOpen, item }) {
  return (
    <ModalReact open={open} setOpen={setOpen}>
      <Container>
        <div>
          <strong>Informações da encomenda</strong>
          <span>Rua: {item.Recipient && item.Recipient.street}</span>
          <span>
            {item.Recipient && item.Recipient.city} -{' '}
            {item.Recipient && item.Recipient.state}
          </span>
          <span>{item.Recipient && item.Recipient.cep}</span>
        </div>
        {(item.start_date || item.end_date || item.canceled_at) && (
          <div>
            <strong>Datas</strong>
            {item.canceled_at ? (
              <div>
                <strong>Cancelado em: </strong>
                {format(parseISO(item.canceled_at), 'dd/MM/yyyy')}
              </div>
            ) : (
              <>
                {item.start_date && (
                  <div>
                    <strong>Retirada: </strong>
                    {format(parseISO(item.start_date), 'dd/MM/yyyy')}
                  </div>
                )}
                {item.end_date && (
                  <div>
                    <strong>Entrega: </strong>
                    {format(parseISO(item.end_date), 'dd/MM/yyyy')}
                  </div>
                )}
              </>
            )}
          </div>
        )}
      </Container>
    </ModalReact>
  );
}
