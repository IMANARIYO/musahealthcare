import express from "express";
import { uploaded } from "../utils/multer.js";
import { createModelHandler, readModelHandler, updateModelHandler, deleteModelHandler } from "../controllers/crud.js";
import Tree from "../models/tree.js";
const createTree = createModelHandler(Tree);
const readTrees = readModelHandler(Tree);
const updateTree = updateModelHandler(Tree);
const deleteTree = deleteModelHandler(Tree);
const treeRouter = express.Router();
treeRouter.post('/createTree', uploaded, createTree);

treeRouter.get('/getAllTrees',uploaded, readTrees);
treeRouter.get('/getTreeById/:id', readTrees);
treeRouter.put('/updateTree/:id',uploaded, updateTree);
treeRouter.delete('/deleteTree/:id', deleteTree);

export default treeRouter;
