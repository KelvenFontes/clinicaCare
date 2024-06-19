import { Router } from 'express';
import { createPaciente } from './app/useCases/pacientes/createPaciente';
import { updatePaciente } from './app/useCases/pacientes/updatePacienteById';
import { getAgenda } from './app/useCases/agenda/listAgendaByMedico';
import { createMedico } from './app/useCases/medicos/createMedico';
import { updateMedico } from './app/useCases/medicos/updateMedico';
import { listPaciente } from './app/useCases/pacientes/listPaciente';
import { authPaciente } from './app/useCases/auth/authPaciente';
import { authMedico } from './app/useCases/auth/authMedico';
import { authFuncionario } from './app/useCases/auth/authFuncionario';
import { createFuncionario } from './app/useCases/funcionario/createFuncionario';

export const router = Router();

// Paciente
router.get('/api/v1/paciente', listPaciente);
router.post('/api/v1/paciente', createPaciente);
router.put('/api/v1/paciente/:id', updatePaciente);

// Medico
router.post('/api/v1/medico', createMedico);
router.put('/api/v1/medico/:idMedico', updateMedico);

// Funcionario
router.post('/api/v1/fucionario', createFuncionario);

// Consulta

// Agenda
router.get('/api/v1/medico/:idMedico/agenda', getAgenda);

// Auth
router.post('/api/v1/auth/paciente', authPaciente);
router.post('/api/v1/auth/funcionario', authFuncionario);
router.post('/api/v1/auth/medico', authMedico);

