import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const appointmentSchema = new Schema({
  date: {
    type: String,
    required: false
  },
  Time: {
    type: String,
    required: false
  },
  Name: {
    type: String,
    required: false
  },
  Email: {
    type: String,
    required: false
  },
  Telephone: {
    type: String,
    required: false
  },
  description:{
    type:String,
    required:false
  },
  response: {
    type: String,
    required: false
  },
});
const Appointment = model('Appointment', appointmentSchema);
export default Appointment;
