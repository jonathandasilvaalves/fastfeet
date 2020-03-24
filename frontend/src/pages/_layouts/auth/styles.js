import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  height: 100%;
  background: #7512f5;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 315px;
  text-align: center;
  background: #ffffff;
  padding: 15px;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    input {
      border: solid 1px #c0c0c0;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      margin: 0 0 10px;
    }

    button {
      margin: 5px 0 0;
      height: 40px;
      border: 0;
      border-radius: 4px;
      font-size: 15px;
      background: #7512f5;
      font-weight: bold;
      color: #fff;
      &:hover {
        background: ${darken(0.03, '#bf40bf')};
      }
    }
    strong {
      align-self: flex-start;
      padding-bottom: 5px;
      font-size: 13px;
    }

    span {
      color: #ff0000;
      align-self: flex-start;
      margin: 0 0 10px;
    }
  }
`;
