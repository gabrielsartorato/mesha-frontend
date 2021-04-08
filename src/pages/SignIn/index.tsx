import { useCallback, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Button from '../../components/Button';
import Divider from '../../components/Divider';
import Input from '../../components/Input';
import { useAuth } from '../../hooks/auth';
import { Container, ContainerLogin } from './styles';

function SignIn() {
  const { signIn } = useAuth();
  const history = useHistory();
  const [userLogin, setUser] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = useCallback(async () => {
    try {
      if (!userLogin || !password) {
        alert('Todos os campos devem ser preenchidos');
        return;
      }

      await signIn({ user_name: userLogin, password });
      history.push('/dashboard');
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
