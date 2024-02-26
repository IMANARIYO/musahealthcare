import express from"express"

import farmRouter from "./farmendpoints.js";
import treeRouter from "./treesEndPoints.js";
const mainRouter=express.Router();
mainRouter.use('/farm',farmRouter)     
mainRouter.use('/tree',treeRouter)     
export default mainRouter;