import express from "express";
import carsController from "../controllers/carsController";

const router = express.Router()

router.get("./id", carsController.getCar)


export default router

