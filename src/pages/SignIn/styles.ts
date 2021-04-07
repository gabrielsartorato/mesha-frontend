import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;

  justify-content: center;
  align-items: center;
`;

export const ContainerLogin = styled.div`
  width: 396px;
  padding: 16px;

  display: flex;
  flex-direction: column;
  align-items: center;

  background: #cfe8fc;
  border-radius: 8px;

  h1 {
    color: rgba(0, 0, 0, 0.87);
  }

  div {
    margin-top: 16px;
  }
`;

export const Divider = styled.div`
  width: 100%;
  align-items: center;
  border-bottom: 1px solid #dadde1;
  display: flex;
  margin: 20px 16px;
  text-align: center;
`;
