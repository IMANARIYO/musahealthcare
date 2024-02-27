import { createModelHandler, readModelHandler, updateModelHandler, deleteModelHandler } from "../controllers/crud.js";
import Medicine from "../models/medecine.js"
import express from "express";
import { uploaded } from "../utils/multer.js";

// Define endpoint handlers
const createMedicine = createModelHandler(Medicine);
const readMedicines = readModelHandler(Medicine);
const updateMedicine = updateModelHandler(Medicine);
const deleteMedicine = deleteModelHandler(Medicine);

const medicineRouter = express.Router();

// Define your Express routes for medicine
medicineRouter.post('/createMedicine', uploaded, createMedicine);
medicineRouter.get('/getAllMedicines', readMedicines);
medicineRouter.get('/getMedicineById/:id', readMedicines);
medicineRouter.put('/updateMedicine/:id',uploaded, updateMedicine);
medicineRouter.delete('/deleteMedicine/:id', deleteMedicine);

export default medicineRouter;
