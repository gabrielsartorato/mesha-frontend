import { shade } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;

  justify-content: center;
  align-items: center;
`;

export const ContainerRegister = styled.div`
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

  select {
    margin-top: 16px;
    width: 100%;
    height: 48px;
    border: none;

    background: #ffffff;
    border-radius: 8px;

    font-size: 16px;

    padding: 8px;
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;

    text-decoration: none;

    background: #42b72a;
    height: 56px;
    border-radius: 10px;
    border: 0;
    padding: 0 16px;
    width: 100%;
    font-size: 24px;
    font-weight: 500;
    color: white;
    margin-top: 16px;
    transition: background-color 0.2s;
  }

  a:hover {
    background: ${shade(0.2, '#42b72a')};
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
