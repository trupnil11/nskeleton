import mongoose from 'mongoose';
          var Schema = mongoose.Schema;
          const BlogSchema  = new Schema({})
            export default mongoose.model("Blog", BlogSchema, "Blog");