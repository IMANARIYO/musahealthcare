import Appointment from "../models/appointment.js";
import { createModelHandler, readModelHandler, updateModelHandler, deleteModelHandler } from "../controllers/crud.js";
import { uploaded } from "../utils/multer.js";
import express from "express";

const appointmentRouter = express.Router();

// Define endpoint handlers
const createAppointment = createModelHandler(Appointment);
const readAppointments = readModelHandler(Appointment);
const updateAppointment = updateModelHandler(Appointment);
const deleteAppointment = deleteModelHandler(Appointment);

// Define your Express routes for appointments
appointmentRouter.post('/createAppointment', uploaded, createAppointment);
appointmentRouter.get('/getAllAppointments', readAppointments);
appointmentRouter.get('/getAppointmentById', readAppointments);
appointmentRouter.put('/updateAppointment/:id', updateAppointment);
appointmentRouter.delete('/deleteAppointment/:id', deleteAppointment);

export default appointmentRouter;
