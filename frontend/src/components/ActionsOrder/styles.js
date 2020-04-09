import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
`;

export const Badge = styled.button`
  background: none;
  border: 0;
  position: relative;
`;

export const Actions = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 100px;
  left: calc(50% - 50px);
  top: calc(100% + 20px);
  background: #fff;
  border-radius: 4px;
  padding: 5px;
  border: 1px solid #999999;
  display: ${props => (props.visible ? 'block' : 'none')} !important;
  z-index: 1;

  &::before {
    content: '';
    position: absolute;
    left: calc(50% - 5px);
    top: -5px;
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-bottom: 5px solid #999999;
  }
`;
export const Action = styled.div`
  color: #fff;
  border-bottom: 1px solid #999999;
  padding: 4px;

  button {
    font-size: 12px;
    border: 0;
    background: none;
  }
`;
