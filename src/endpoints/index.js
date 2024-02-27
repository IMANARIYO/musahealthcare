import express from"express"

import farmRouter from "./farmendpoints.js";
import treeRouter from "./treesEndPoints.js";
import authRouter from "./authendspoints.js";
import medicineRouter from "./medecineendspoints.js";

import patientRouter from "./patientsendspoints.js";
import appointmentRouter from "./appointmentsendpoints.js";
import contactRouter from "./contactsendpoints.js";
const mainRouter=express.Router();
mainRouter.use('/medecine',medicineRouter)
mainRouter.use('/farm',farmRouter)     
mainRouter.use('/tree',treeRouter) 
mainRouter.use('/auth',authRouter)
mainRouter.use('/patient',patientRouter)
mainRouter.use('/appointment',appointmentRouter)
mainRouter.use('/contact',contactRouter)
export default mainRouter;