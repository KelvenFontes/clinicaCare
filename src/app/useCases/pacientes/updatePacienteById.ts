import { Request, Response } from "express";
import { Paciente } from "../../models/Paciente";

export async function updatePaciente(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const { nomeCompleto, dataNascimento, genero, endereco, contato, historicoMedico, idConsulta } = req.body;

    const paciente = await Paciente.findByIdAndUpdate(
      id,
      {
        nomeCompleto,
        dataNascimento,
        genero,
        endereco,
        contato,
        historicoMedico,
        idConsulta
      },
      { new: true, runValidators: true }
    );

    if (!paciente) {
      return res.status(404).json({ message: 'Paciente não encontrado' });
    }

    res.status(200).json(paciente);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
}
