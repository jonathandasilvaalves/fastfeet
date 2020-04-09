import styled from 'styled-components';

export const Container = styled.div`
  max-width: 900px;
  margin: 40px auto;

  header {
    display: flex;
    justify-content: space-between;
    width: 100%;

    strong {
      font-size: 20px;
    }

    div {
      display: flex;
      align-items: center;
      margin-bottom: 15px;

      #salvar {
        background: #7149c1;
      }

      button {
        display: flex;
        margin-left: 5px;
        border: 0;
        color: #fff;
        padding: 5px;
        border-radius: 5px;
        align-items: center;
        font-weight: bold;
        background: #a8a8a8;

        a {
          color: #fff;
        }
      }
    }
  }

  form {
    width: 100%;
    background: #fff;
    padding: 10px;
    border-radius: 5px;
  }
`;

export const Compselects = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Select = styled.div`
  width: 100%;
  margin: 10px;
`;

export const Outros = styled.div`
  display: flex;
  margin: 10px;
  flex-direction: column;
  width: 100%;

  input {
    padding: 8px;
    border-radius: 5px;
    border: 1px solid #a8a8a8;
  }
`;
