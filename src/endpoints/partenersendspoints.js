import Partners from "../models/partners.js";
import { createModelHandler, readModelHandler, updateModelHandler, deleteModelHandler } from "../controllers/crud.js";
import { uploaded } from "../utils/multer.js";
import { AppError } from "../utils/appError.js";
import express from "express";

const partnersRouter = express.Router();

// Define endpoint handlers
const createPartner = createModelHandler(Partners);
const readPartners = readModelHandler(Partners);
const updatePartner = updateModelHandler(Partners);
const deletePartner = deleteModelHandler(Partners);

// Define your Express routes for partners
partnersRouter.post('/createPartner', uploaded, createPartner);
partnersRouter.get('/getAllPartners', readPartners);
partnersRouter.get('/getPartnerById/:id', readPartners);
partnersRouter.put('/updatePartner/:id', uploaded,updatePartner);
partnersRouter.delete('/deletePartner/:id', deletePartner);

export default partnersRouter;
