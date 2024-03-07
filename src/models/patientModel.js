import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const patientsSchema = new mongoose.Schema({
  name: { type: String, required: false },
  email: { type: String, required: false },
  phone: { type: String, required: false },
  location: { type: String, required: false },
  disease: [{
    type: Schema.Types.ObjectId,
    ref: 'Disease',
    required: false
  }],
  description: { type: String, required: false },
  image:{type:String}
}).set('strictPopulate', false);

export default mongoose.model('Patients', patientsSchema);
