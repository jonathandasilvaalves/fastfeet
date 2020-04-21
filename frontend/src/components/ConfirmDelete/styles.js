import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
  position: absolute;
  top: 30%;
  left: 40%;

  border-radius: 10px;
  border: 1px solid #eee;
  width: 300px;
  height: 100px;
  padding: 5px;

  h1 {
    font-size: 12px;
  }
  div {
    display: flex;
    justify-content: center;
    padding: 30px;
  }
`;

export const Button = styled.button`
  border: 0px;
  background: #eee;
  border-radius: 5px;
  padding: 5px;
  margin: 5px;
`;
