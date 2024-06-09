import { Schema, model } from "mongoose";

export const Consulta = model('Consulta', new Schema({
  dataHora: {
    type: Date,
    required: true
  },
  duracao: {
    type: Number,
    required: true
  },
  diagnostico: {
    type: String
  },
  tratamento: [{
    type: String
  }],
  exames: [{
    type: String
  }],
  idMedico: {
    type: Schema.Types.ObjectId,
    ref: 'Medico',
    required: true
  },
  idPaciente: {
    type: Schema.Types.ObjectId,
    ref: 'Paciente',
    required: true
  }
}));
