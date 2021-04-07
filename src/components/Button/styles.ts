import styled from 'styled-components';

interface ButtonProps {
  bgColor: string;
}

export const Container = styled.button<ButtonProps>`
  background: ${(props) => props.bgColor};
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
`;
