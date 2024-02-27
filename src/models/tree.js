import mongoose from 'mongoose';
const { Schema, model } = mongoose;
const treeSchema = new Schema({
  images: [{
    type: String ,
    required: false
  }],
  locations: [{
    type: String,
    required: false
  }],
  farm: [{
    type: Schema.Types.ObjectId,
    ref: 'Farm', 
  }],
  description: {
    type: String
  },
  medicines: [{
    type: Schema.Types.ObjectId,
    ref: 'Farm',
    required: false
  }],
  diseasesCured: {
    type: Schema.Types.ObjectId,
    ref: 'Farm',
   required:false
  },
  partsUsed: [{
    type: String,
    default: 'Leaves,stems,roots,fruits,flowers,seeds,bark,wood'
  }],
  patiennts:[{
    type: Schema.Types.ObjectId,
    ref: 'Patients',
    required: false
  }]
}).set('strictPopulate', false);

treeSchema.pre('save', function(next) {
  const removeDuplicates = (array) => {
    const uniqueValues = [];
    array.forEach(value => {
      const stringValue = value instanceof mongoose.Types.ObjectId ? value.toString() : value;
      if (!uniqueValues.includes(stringValue)) {
        uniqueValues.push(stringValue);
      }
    });
    return uniqueValues.map(value => value instanceof mongoose.Types.ObjectId ? mongoose.Types.ObjectId(value) : value);
  };
  this.images = removeDuplicates(this.images);
  this.farm=removeDuplicates(this.farm)
  this.locations = removeDuplicates(this.locations);
  this.medicines = removeDuplicates(this.medicines);
  if (Array.isArray(this.diseasesCured)) {
    this.diseasesCured = removeDuplicates(this.diseasesCured);
  }
  next();
});
const Tree = model('Tree',treeSchema);
export default Tree;
