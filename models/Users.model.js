import mongoose from 'mongoose';

const UsersSchema = new mongoose.Schema({
  // Define model schema
});

const Users = mongoose.model('Users', UsersSchema);

export default Users;
