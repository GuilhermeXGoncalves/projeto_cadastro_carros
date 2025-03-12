import {Request,Response, NextFunction} from "express";
import Cars  from "../models/cars";
import carsRepository from "../repositories/carsRepository";

async function getCar(req:Request, res: Response, next: NextFunction) {
    const id = parseInt(req.params.id)
    const car = await carsRepository.getCar(id);
    if(car)
        res.json(car)
    else
        res.sendStatus(404)
}

export default {
    getCar
}