import patientModel from "../models/patientModel.js";
import { createModelHandler, readModelHandler, updateModelHandler, deleteModelHandler } from "../controllers/crud.js";
import { uploaded } from "../utils/multer.js";
import express from "express";

const patientRouter = express.Router();

// Define endpoint handlers
const createPatient = createModelHandler(patientModel);
const readPatients = readModelHandler(patientModel);
const updatePatient = updateModelHandler(patientModel);
const deletePatient = deleteModelHandler(patientModel);

// Define your Express routes for patients
patientRouter.post('/createPatient', uploaded, createPatient);
patientRouter.get('/getAllPatients', readPatients);
patientRouter.get('/getPatientById', readPatients);
patientRouter.put('/updatePatient/:id',uploaded,updatePatient);
patientRouter.delete('/deletePatient/:id', deletePatient);

export default patientRouter;
