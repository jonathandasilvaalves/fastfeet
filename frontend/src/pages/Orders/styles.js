import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 900px;
  margin: 40px auto;

  header {
    display: flex;
    flex-direction: column;
    width: 100%;

    div {
      display: flex;
      justify-content: space-between;
      margin-top: 10px;
    }

    button {
      background: #7149c1;
      color: #fff;
      border: 0;
      border-radius: 5px;
      overflow: hidden;
      margin-top: auto;
      padding: 8px;

      display: flex;
      align-items: center;

      &:hover {
        background: ${darken(0.03, '#7159c1')};
      }

      a {
        color: #fff;
      }
    }

    strong {
      font-size: 20px;
    }
  }
`;

export const Status = styled.div`
  background: ${props =>
    props.statusOrder === 'Cancelado'
      ? '#ff8566'
      : props.statusOrder === 'Entregue'
      ? '#80ff80'
      : props.statusOrder === 'Retirado'
      ? '#80b3ff'
      : '#cccc00'};
  color: ${props =>
    props.statusOrder === 'Cancelado'
      ? '#ff1a1a'
      : props.statusOrder === 'Entregue'
      ? '#008000'
      : props.statusOrder === 'Retirado'
      ? '#0052cc'
      : '#999900'};
  font-weight: bold;
  width: 100%;
  padding: 3px;
  border-radius: 15px;
`;

export const Listing = styled.table`
  width: 100%;
  margin-top: 20px;
  border-spacing: 0 20px;
  color: #353839;

  th {
    text-align: center;
  }

  td {
    padding: 10px;
    background: #fff;
    text-align: center;

    div {
      display: flex;
      align-content: center;
      align-items: center;
      justify-content: center;

      img {
        border-radius: 50%;
        width: 25px;
        height: 25px;
        margin: 4px;
      }
    }
  }
`;
export const Search = styled.div`
  border: 1px solid #a8a8a8;
  font-size: 12px;
  align-items: center;
  background: #fff;
  border-radius: 5px;
  color: #a8a8a8;

  input {
    border: 0;
    padding: 10px 20px 10px 10px;
    width: 200px;
  }
`;

export const Pagination = styled.div`
  padding-top: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;

  button {
    transition: opacity 0.3s ease-out;
    border-radius: 4px;
    border: 0;
    outline: 0;
    padding: 10px;

    &:hover {
      background: #7777;
    }

    &:disabled {
      cursor: not-allowed;
    }
  }
`;
