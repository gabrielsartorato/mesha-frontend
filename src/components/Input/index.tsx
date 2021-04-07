import { InputHTMLAttributes } from 'react';
import { Container } from './styles';

type InputProps = InputHTMLAttributes<HTMLInputElement>;

function Input({ ...rest }: InputProps) {
  return (
    <Container>
      <input {...rest} />
    </Container>
  );
}

export default Input;
