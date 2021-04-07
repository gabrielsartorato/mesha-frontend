import { useCallback, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Button from '../../components/Button';
import Input from '../../components/Input';
import api from '../../services/api';

import { Container, ContainerRegister, Divider } from './styles';

function Signup() {
  const history = useHistory();
  const [userData, setUserData] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [typeUser, setTypeUser] = useState<string>('NORMAL');

  const handleSubimitForm = useCallback(async () => {
    try {
      if (!userData || !password || !typeUser) {
        alert('Todos os campos devem ser preenchidos');
        return;
      }
      const data = {
        user_name: userData,
        password,
        type: typeUser,
      };
      const response = await api.post('users', data);

      console.log(response);

      history.push('/');
    } catch (err) {
      console.log(err);
    }
  }, [userData, password, typeUser, history]);

  return (
    <Container>
      <ContainerRegister>
        <h1>Criar Usuário</h1>
        <Input
          onChange={(e) => setUserData(e.target.value)}
          placeholder="Usuário"
        />
        <Input
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Senha"
        />
        <select onChange={(e) => setTypeUser(e.target.value)}>
          <option value="DEFAULT" disabled>
            Escolha uma Opção
          </option>
          <option value="NORMAL">Cliente</option>
          <option value="ATENDENTE">Atendente</option>
        </select>

        <Button onClick={handleSubimitForm}>Registar</Button>

        <Divider />

        <Link to="/">Voltar para login</Link>
      </ContainerRegister>
    </Container>
  );
}

export default Signup;
