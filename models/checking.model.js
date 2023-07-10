import mongoose from 'mongoose';

const checkingSchema = new mongoose.Schema({
  // Define model schema
});

const checking = mongoose.model('checking', checkingSchema);

export default checking;
