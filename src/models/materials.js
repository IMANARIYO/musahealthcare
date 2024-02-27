import mongoose from 'mongoose';
const { Schema, model } = mongoose;
const materialSchema = new Schema({
  images: [String],
  treesUsedToMake:[ {
    type: Schema.Types.ObjectId,
    ref: 'Tree', 
    required:false 
  }],
  howItIsUsed:String, 
  conditionsForTheTree: {
    type:String,
    required:false 
  }
}).set('strictPopulate', false);
const Material = model('Material', materialSchema);
export default Material;
