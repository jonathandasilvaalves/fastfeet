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
