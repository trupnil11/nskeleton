import mongoose from 'mongoose';
          var Schema = mongoose.Schema;
          const StripePaymentSchema  = new Schema({})
            export default mongoose.model("StripePayment", StripePaymentSchema, "StripePayment");