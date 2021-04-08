import { useCallback, useEffect, useState } from 'react';

import api from '../../services/api';

import Button from '../../components/Button';
import Divider from '../../components/Divider';
import { useAuth } from '../../hooks/auth';

import {
  Container,
  ContainerRegisterService,
  ContainerServices,
} from './styles';

interface IService {
  service_id: number;
  id: number;
  name_service: string;
  price: number;
  id_map: string;
}

interface IUser {
  id: number;
  name: string;
  type: string;
}

interface IAttendance {
  services: IService;
  professional_id: string;
  total_price: number;
}

function Dashboard() {
  const { user } = useAuth();
  const [services, setServices] = useState<IService[]>([]);
  const [selectedService, setSelectedService] = useState<string>('DEFAULT');

  const [professionals, setProfessional] = useState<IUser[]>([]);
  const [selectedProfessional, setSelectedProfessiona] = useState<string>(
    'DEFAULT',
  );

  const [servicesTable, setServicesTable] = useState<IService[]>([]);

  useEffect(() => {
    async function getServices() {
      const response = await api.get('/services');

      setServices(response.data);
    }
    getServices();
  }, []);

  useEffect(() => {
    async function getUsers() {
      const response = await api.get('/users');

      const professionals = response.data.filter(
        (user: IUser) => user.type === 'PROFISSIONAL',
      );

      setProfessional(professionals);
    }
    getUsers();
  }, []);

  const handleAddService = useCallback(() => {
    if (selectedService === 'DEFAULT') {
      alert('Selecione um serviço');
      return;
    }

    const service =
      services.find((service) => String(service.id) === selectedService) ||
      ({} as IService);

    Object.assign(service, { service_id: service.id });

    setServicesTable([service, ...servicesTable]);
    setSelectedService('DEFAULT');
  }, [services, selectedService, servicesTable]);

  const totalPrice = servicesTable.reduce((acc, array) => {
    return (acc = Number(acc) + Number(array.price));
  }, 0);

  const handleSubmitAttendance = useCallback(async () => {
    try {
      const data = {
        services: servicesTable,
        professional_id: selectedProfessional,
        total_price: totalPrice,
      };

      const response = await api.post('/attendances', data);

      const { id } = response.data;

      alert(`Atendimento com id ${id} criado com sucesso`);

      setServicesTable([]);
    } catch (err) {
      console.log(err);
    }
  }, [servicesTable, selectedProfessional, totalPrice]);

  console.log(servicesTable);

  return (
    <Container>
      <ContainerRegisterService>
        <h1>Cadastar Atendimento</h1>
        <Divider />

        <select
          value={selectedService}
          onChange={(e) => setSelectedService(e.target.value)}
        >
          <option value="DEFAULT" disabled>
            Selecione uma opção
          </option>
          {services.map((service) => (
            <option key={service.id} value={service.id}>
              {service.name_service} -{' '}
              {Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              }).format(service.price)}
            </option>
          ))}
        </select>
        <Button onClick={handleAddService}>Adicionar Serviço</Button>
      </ContainerRegisterService>
      <ContainerServices>
        <select
          value={selectedProfessional}
          onChange={(e) => setSelectedProfessiona(e.target.value)}
        >
          <option value="DEFAULT" disabled>
            Selecione o Profissional
          </option>
          {professionals.map((professional) => (
            <option key={professional.id} value={professional.id}>
              {professional.name}
            </option>
          ))}
        </select>
        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Preço</th>
            </tr>
          </thead>
          <tbody>
            {servicesTable.map((service, index) => (
              <tr key={index}>
                <td>{service.name_service}</td>
                <td>
                  {Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                  }).format(service.price)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <strong>
          Preço Total{' '}
          {Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(totalPrice)}
        </strong>
        <Button onClick={handleSubmitAttendance}>Cadastrar Atendimento</Button>
      </ContainerServices>
    </Container>
  );
}

export default Dashboard;

// {professionals.map((professional) => (
//   <option key={professional.id} value={professional.id}>
//     {professional.name}
//   </option>
// ))}
