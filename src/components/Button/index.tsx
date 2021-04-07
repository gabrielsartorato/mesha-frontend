import { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  bgColor: string;
};

function Button({ children, bgColor, ...rest }: ButtonProps) {
  return (
    <Container type="button" {...rest} bgColor={bgColor}>
      {children}
    </Container>
  );
}

export default Button;
