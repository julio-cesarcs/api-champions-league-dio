import { Request, Response } from "express";
import * as Service from "../services/players-service";
import { StatisticModel } from "../models/statistics-model";

export const getPlayer = async (req: Request, res: Response) => {
  const httpResponse = await Service.getPlayerService();
  res.status(httpResponse.statusCode).json(httpResponse.body);
};

export const getPlayerById = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const httpResponse = await Service.getPlayerByIdService(id);
  res.status(httpResponse.statusCode).json(httpResponse.body);
};

export const postPlayer = async (req: Request, res: Response) => {
  const bodyValue = req.body;
  const httpResponse = await Service.createPlayerService(bodyValue);

  if (httpResponse) {
    res.status(httpResponse.statusCode).json(httpResponse.body);
  }

  console.log(bodyValue);
};

export const deletePlayer = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const httpResponse = await Service.deletePlayerService(id);

  res.status(httpResponse.statusCode).json(httpResponse.body);
};

export const patchPlayer = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const bodyValue: StatisticModel = req.body;
  const httpResponse = await Service.patchPlayerService(id, bodyValue);
  
  res.status(httpResponse.statusCode).json(httpResponse.body);
};
