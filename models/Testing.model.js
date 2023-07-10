import mongoose from 'mongoose';

const TestingSchema = new mongoose.Schema({
  // Define model schema
});

const Testing = mongoose.model('Testing', TestingSchema);

export default Testing;
