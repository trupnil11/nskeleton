import mongoose from 'mongoose';
              var Schema = mongoose.Schema;
              const Test5Schema  = new Schema({
                comment:{
                  required:false,
                  type:String
              },
              })
                export default mongoose.model("Test5", Test5Schema, "Test5");