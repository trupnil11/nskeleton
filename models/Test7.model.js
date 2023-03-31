import mongoose from "mongoose";
var Schema = mongoose.Schema;
const Test7Schema = new Schema({
  firstname: {
    required: false,
    type: String,
  },
  lastname: {
    required: false,
    type: String,
  },
  mobile: {
    required: false,
    type: String,
  },
  email: {
    required: false,
    type: String,
  },
});
export default mongoose.model("Test7", Test7Schema, "Test7");
