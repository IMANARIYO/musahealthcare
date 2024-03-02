import mongoose from 'mongoose';
const { Schema, model } = mongoose;
const diseaseSchema = new Schema({
  name: {
    type: String,
    required: false
  },
  symptoms: [{
    type: String,
    required: false
  }],
  description: {
    type: String,
    required: false
  },
  howItAttacks: {
    type: String,
    required: false
  },
  medicines: [{
    type: Schema.Types.ObjectId,
    ref: 'Medicine',
    required: false
  }],
  vaccinations:[ {
    type: String,
    default: []
  }],
  patients: [{
    type: Schema.Types.ObjectId,
    ref: 'Patients',
    required: false
  }],
  tetsimonies: [{
    type: Schema.Types.ObjectId,
    ref: 'Testimony',
    required: false
  }],

}).set('strictPopulate', false);
const Disease = model('Disease', diseaseSchema);
export default Disease;
