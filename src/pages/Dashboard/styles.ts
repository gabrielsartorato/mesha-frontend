import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  padding: 16px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContainerRegisterService = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 500px;

  background: #cfe8fc;
  border-radius: 8px;

  padding: 16px;

  h1 {
    color: black;
  }

  p {
    font-size: 32px;
    color: black;
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
`;

export const ContainerServices = styled.div`
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 500px;

  background: #cfe8fc;
  border-radius: 8px;

  padding: 16px;

  select {
    margin-top: 16px;
    margin-bottom: 16px;
    width: 100%;
    height: 48px;
    border: none;

    background: #ffffff;
    border-radius: 8px;

    font-size: 16px;

    padding: 8px;
  }

  table {
    width: 100%;
  }

  table td,
  th {
    color: black;
    text-align: left;
    padding: 0.5rem;
  }

  table th:nth-child(3) {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  strong {
    margin-top: 8px;
    color: black;
    font-size: 24px;
  }
`;
