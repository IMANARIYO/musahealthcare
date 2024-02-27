import mongoose from 'mongoose';

const partnerSchema = new mongoose.Schema({
  name: { type: String, required: false },
  image: { type: String, required: false },
  telephone: { type: String, required: false },
  role: { type: String, required: false },
  email: { type: String, required: false },
  location: { type: String, required: false },
  description: { type: String, required: false },
  district: { type: String, required: false }
}).set('strictPopulate', false);

export const partners = mongoose.model('Partners', partnerSchema);

