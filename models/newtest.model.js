import mongoose from 'mongoose';

const newtestSchema = new mongoose.Schema({
  // Define model schema
});

const newtest = mongoose.model('newtest', newtestSchema);

export default newtest;
