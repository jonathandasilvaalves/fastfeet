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
`;

export const BlocInputs = styled.div`
  display: flex;
  flex-direction: column;

  input {
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #eee;
  }

  label {
    font-weight: bold;
  }
`;
export const CompInputs = styled.div`
  display: flex;
  width: 100%;
  margin-top: 5px;

  div {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-right: 5px;
  }
`;

export const Campsform = styled.div`
  background: #fff;
  padding: 20px 20px 20px 20px;
  border-radius: 5px;
`;
