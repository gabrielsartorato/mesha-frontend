import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  padding: 16px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContainerInformation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 500px;

  background: #cfe8fc;
  border-radius: 8px;

  padding: 16px;

  div {
    display: flex;
    width: 100%;
    justify-content: space-around;

    button {
      display: flex;
      justify-content: center;
      align-items: center;
      border: none;
      width: 40px;
      height: 40px;

      border-radius: 4px;

      background: #f06f6a;
    }
  }

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

export const ContainerAttendance = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 1100px;

  background: #cfe8fc;
  border-radius: 8px;

  padding: 16px;

  div {
    display: flex;
    width: 100%;
    justify-content: space-around;

    button {
      display: flex;
      justify-content: center;
      align-items: center;
      border: none;
      width: 40px;
      height: 40px;

      border-radius: 4px;

      background: #f06f6a;
    }
  }

  h1 {
    color: black;
  }

  p {
    font-size: 32px;
    color: black;
  }
`;

export const ListAttendance = styled.section`
  width: 100%;
  margin-top: 16px;

  div + div {
    margin-top: 32px;
  }

  div {
    padding: 2px;
    width: 100%;
    display: flex;
    justify-content: space-around;

    background: white;
    border-radius: 8px;

    p + p {
      margin-left: 32px;
    }

    p + button {
      margin-left: 32px;
    }

    button {
      width: 100%;
      max-width: 20%;
      border: none;
      border-radius: 4px;

      color: white;
    }
  }

  div p {
    font-size: 24px;
  }
`;
