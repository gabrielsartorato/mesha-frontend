import { useCallback, useState } from 'react';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { useAuth } from '../../hooks/auth';
import { Container, ContainerLogin, Divider } from './styles';

function SignIn() {
  const { signIn, user } = useAuth();
  const [userLogin, setUser] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = useCallback(async () => {
    await signIn({ user_name: userLogin, password });
  }, [signIn, userLogin, password]);

  console.log(user);

  return (
    <Container>
      <ContainerLogin>
        <h1>Clinica Mesha</h1>
        <Input
          onChange={(e) => setUser(e.target.value)}
          placeholder="Digite seu usuário"
        />
        <Input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Senha"
        />
        <Button onClick={handleSubmit} bgColor={'#1877f2'}>
          Entrar
        </Button>
        <Divider />
        <Button bgColor={'#42b72a'}>Crie sua conta</Button>
      </ContainerLogin>
    </Container>
  );
}

export default SignIn;
