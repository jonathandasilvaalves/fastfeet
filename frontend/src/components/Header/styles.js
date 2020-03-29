import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
  padding: 0 20px;
`;

export const Content = styled.div`
  height: 70px;
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;

    img {
      margin-right: 10px;
      padding-right: 10px;
      border-right: 1px solid #eee;
      max-width: 180px;
    }

    a {
      font-weight: bold;
      color: #a8a8a8;
      font-size: 12px;
      padding: 5px;

      &:hover {
        color: #000000;
      }
    }
  }
  aside {
    display: flex;
    align-items: center;
  }
`;

export const Profile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  font-size: 12px;
  strong {
    padding: 5px;
  }

  a {
    color: #ff0000;
  }
`;
