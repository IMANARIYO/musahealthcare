import mongoose from 'mongoose'; 
const { Schema, model } = mongoose;
const farmSchema = new Schema({
  locations: {
    type: [String],
    required: false
  },
  googlemap:{
    type:String
  },
  images:{
type:[String],
required:false
  },
  trees: [{
    type: Schema.Types.ObjectId,
    ref: 'Tree',
    required: false
}],
  treestypes:{
    type:Number 
  },
  expectedYieldTime: {
    type: String,
    required: false
  }
}).set('strictPopulate', false);
const Farm = model('Farm', farmSchema);
export default Farm;
