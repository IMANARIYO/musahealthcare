
import mongoose from 'mongoose';
const { Schema, model } = mongoose;
const testimonySchema = new Schema({
  name: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  },
  images: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  rating: {
    type: Number,
    min: 0,
    max: 5,
    required: true
  },
  disease:{
type:String
  }
});
const Testimony = model('Testimony', testimonySchema);
export default Testimony;
