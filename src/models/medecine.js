import mongoose from 'mongoose';
const { Schema, model } = mongoose;
const medicineSchema = new Schema({
  name: {
    type: String,
    required: false 
  },
  images: [{
    type: String,
    required: false 
  }],
  diseases:[{
    type: Schema.Types.ObjectId,
    ref: 'Disease',
    required: false
  }],
  treesUsed: [{
    type: Schema.Types.ObjectId,
    ref: 'Tree',
    required: false 
  }],
  frequency: {
    type: String,
    required: false 
  },
  additionMaterialsTomakeIt: [{
    type: String
  }],
  procedureToMake: {
    type: String,
    required: false 
  },
  procedureToTake: {
    type: String,
    required: false 
  },
  extraAdditionsTotakeit: {
    type: [String],
    default: []
  },
  beneficiaries: {
    type: [String],
    default: []
  }
}).set('strictPopulate', false);
const Medicine = model('Medicine', medicineSchema);
export default Medicine;
