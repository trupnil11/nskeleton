import mongoose from 'mongoose';
              var Schema = mongoose.Schema;
              const TrackingsSchema  = new Schema({})
                export default mongoose.model("Trackings", TrackingsSchema, "Trackings");