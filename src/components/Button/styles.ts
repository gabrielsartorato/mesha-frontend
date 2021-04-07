import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  background: #1877f2;
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

  &:hover {
    background: ${shade(0.2, '#1877f2')};
  }
`;
