import styled from 'styled-components';

export const Container = styled.div`
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
