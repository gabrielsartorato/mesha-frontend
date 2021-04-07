import { useCallback, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { useAuth } from '../../hooks/auth';
import { Container, ContainerLogin, Divider } from './styles';

function SignIn() {
  const { signIn } = useAuth();
  const history = useHistory();
  const [userLogin, setUser] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = useCallback(async () => {
    try {
      await signIn({ user_name: userLogin, password });
      history.push('/Dashboard');
    } catch (err) {
      alert('Usuário não encontrado');
      console.log(err);
    }
  }, [signIn, userLogin, password, history]);

  return (
    <Container>
      <ContainerLogin>
        <h1>Clinica Mesha</h1>
        <p>Faça seu login</p>
        <Input
          onChange={(e) => setUser(e.target.value)}
          placeholder="Digite seu usuário"
        />
        <Input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Senha"
        />
        <Button onClick={handleSubmit}>Entrar</Button>
        <Divider />
        <Link to="/signup">Crie sua Conta</Link>
      </ContainerLogin>
    </Container>
  );
}

export default SignIn;
