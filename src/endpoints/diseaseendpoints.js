import { createModelHandler, readModelHandler, updateModelHandler, deleteModelHandler } from "../controllers/crud.js";
import express from "express";
import { uploaded } from "../utils/multer.js";
import Disease from "../models/diseases.js";
// Define endpoint handlers
const createDisease = createModelHandler(Disease);
const readDiseases = readModelHandler(Disease);
const updateDisease = updateModelHandler(Disease);
const deleteDisease = deleteModelHandler(Disease);

const diseaseRouter = express.Router();

// Define your Express routes for diseases
diseaseRouter.post('/createDisease', uploaded, createDisease);
diseaseRouter.get('/getAllDiseases', readDiseases);
diseaseRouter.put('/updateDisease/:id', updateDisease);
diseaseRouter.delete('/deleteDisease/:id', deleteDisease);

export default diseaseRouter;
