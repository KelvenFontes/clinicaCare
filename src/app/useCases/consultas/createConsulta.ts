import { Request, Response } from "express";
// import { io } from '../../..';
import { Consulta } from "../../models/Consulta";


export async function createConsulta(req: Request, res: Response) {
  try {
    const { dataHora, duracao, idMedico, idPaciente } = req.body;

    const consulta = await Consulta.create({ dataHora, duracao, idMedico, idPaciente});
    const consultaDetails = await consulta.populate('consultas.consulta');

    // io.emit('consulta@new', consultaDetails);
    res.status(201).json(consulta);

  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
