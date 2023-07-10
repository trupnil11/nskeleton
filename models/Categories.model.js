import mongoose from 'mongoose';
          var Schema = mongoose.Schema;
          const CategoriesSchema  = new Schema({})
            export default mongoose.model("Categories", CategoriesSchema, "Categories");