import {  createModelHandler, readModelHandler, updateModelHandler, deleteModelHandler } from "../controllers/crud.js";
import Farm from "../models/farm.js";
import express from"express"
import { uploaded } from "../utils/multer.js";
//Define endpoint handlers
const createFarm = createModelHandler(Farm);
const readFarms = readModelHandler(Farm);
const updateFarm = updateModelHandler(Farm);
const deleteFarm = deleteModelHandler(Farm);
const farmRouter=express.Router();
//Define your Express routes
farmRouter.post('/createfarms',uploaded,createFarm);
farmRouter.put('/updateFarm/:id', updateFarm);
farmRouter.delete('/deleteFarm/:id', deleteFarm);
farmRouter.get('/getallfarms', readFarms);
farmRouter.get('/getfarmById/:id', readFarms);

export default farmRouter;