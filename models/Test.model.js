import mongoose from 'mongoose';

const TestSchema = new mongoose.Schema({
  // Define model schema
});

const Test = mongoose.model('Test', TestSchema);

export default Test;
