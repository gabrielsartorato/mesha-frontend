import { useCallback, useEffect, useMemo, useState } from 'react';
import { FiLogOut } from 'react-icons/fi';

import api from '../../services/api';

import Button from '../../components/Button';
import Divider from '../../components/Divider';
import { useAuth } from '../../hooks/auth';

import {
  Container,
  ContainerInformation,
  ContainerServices,
  ListAttendance,
  ContainerAttendance,
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
  id: number;
  services: IService;
  professional_id: IUser;
  total_price: number;
  end_service: Date;
  start_service: Date;
  user: IUser;
  duration: number;
  commission: number;
}

function Dashboard() {
  const { user, signOut } = useAuth();
  const [services, setServices] = useState<IService[]>([]);
  const [selectedService, setSelectedService] = useState<string>('DEFAULT');

  const [professionals, setProfessional] = useState<IUser[]>([]);
  const [selectedProfessional, setSelectedProfessiona] = useState<string>(
    'DEFAULT',
  );

  const [attendances, setAttendances] = useState<IAttendance[]>([]);
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

  useEffect(() => {
    async function getAttendances() {
      const response = await api.get('/attendances');

      setAttendances(response.data);
    }

    getAttendances();
  }, []);

  const attenceMap = useMemo(() => {
    return attendances.map((attendance) => ({
      ...attendance,
    }));
  }, [attendances]);

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

  const handleStartEndAttendance = useCallback(
    async (id: any) => {
      try {
        const attendance = attendances.find(
          (attendance) => attendance.id === id,
        );

        const attendaceIndex = attendances.findIndex(
          (attendance) => attendance.id === id,
        );

        if (!attendance) {
          alert('Atendimento não encontrado');
          return;
        }

        if (attendance.start_service === null) {
          const response = await api.put(`/attendances/starttime/${id}`);

          attendance.end_service = response.data.end_service;

          attendances[attendaceIndex] = attendance;

          setAttendances(attendances);

          window.location.reload();

          return;
        }

        const response = await api.put(`/attendances/endtime/${id}`);

        console.log(response.data);

        Object.assign(attendance, response.data);

        attendances[attendaceIndex] = attendance;

        alert(
          `Atendimento: ${id} - Duração: ${
            attendance.duration
          } minutos - Comissão 10%: ${Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(attendance.commission)}`,
        );

        setAttendances(attendances);
        window.location.reload();
      } catch (err) {
        console.log(err);
      }
    },
    [attendances],
  );

  const handleLogout = useCallback(() => {
    signOut();
  }, [signOut]);

  if (user.type === 'NORMAL') {
    return (
      <Container>
        <ContainerInformation>
          <div>
            <h1>Cadastar Atendimento</h1>
            <button onClick={handleLogout}>
              <FiLogOut />
            </button>
          </div>
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
        </ContainerInformation>
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
          <Button onClick={handleSubmitAttendance}>
            Cadastrar Atendimento
          </Button>
        </ContainerServices>
      </Container>
    );
  }
  return (
    <Container>
      <ContainerAttendance>
        <div>
          <h1>Atendente: {user.name}</h1>
          <button onClick={handleLogout}>
            <FiLogOut />
          </button>
        </div>
        <ListAttendance>
          {attenceMap.map((attendance, index) => (
            <div key={index}>
              <p>{attendance.user.name}</p>
              <p>Atendimento: {attendance.id}</p>
              <p>
                Preço:{' '}
                {Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                }).format(attendance.total_price)}
              </p>

              <button
                onClick={() => handleStartEndAttendance(attendance.id)}
                disabled={attendance.end_service ? true : false}
                style={
                  !attendance.start_service
                    ? { background: '#0ed676' }
                    : attendance.end_service
                    ? { background: '#c2c5cc', cursor: 'not-allowed' }
                    : { background: '#FD0013' }
                }
              >
                {!attendance.start_service
                  ? 'Iniciar'
                  : attendance.end_service
                  ? 'Finalizado'
                  : 'Finalizar'}
              </button>
            </div>
          ))}
        </ListAttendance>
      </ContainerAttendance>
    </Container>
  );
}

export default Dashboard;

// {professionals.map((professional) => (
//   <option key={professional.id} value={professional.id}>
//     {professional.name}
//   </option>
// ))}
