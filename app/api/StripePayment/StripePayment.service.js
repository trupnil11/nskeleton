import StripePaymentModel from "../../../models/StripePayment.model.js";

          export const getAll = async () => {
            try {
              const StripePayment = await StripePaymentModel.find();
             return StripePayment;
            } catch (error) {
              console.log(error);
              throw new Error("Unable to get StripePayment");
            }
          }
          
          export const getById = async (id) => {
            try {
             
              const StripePayment = await StripePaymentModel.findById(id);
              return StripePayment;
            } catch (error) {
              console.log(error);
              throw new Error('Unable to get StripePayment');
            }
          }
          
          export const create = async(data) => {
            try {
              const newStripePayment = await StripePaymentModel.create(data);
              return newStripePayment;
            } catch (error) {
              console.log(error);
              throw new Error("Unable to create StripePayment");
            }
          }
          
          export const update = async(id,data) => {
            try {
              const updatedStripePayment = await StripePaymentModel.findByIdAndUpdate(id, data, { new: true });
              
              if (!updatedStripePayment) {
                return res.status(404).json({ error: 'StripePayment not found' });
              }
              return updatedStripePayment;
            } catch (error) {
              console.log(error);
              throw new Error("Unable to update StripePayment");
            }
          }
          
          export const deleteById = async (id) => {
            try {
              const deletedStripePayment = await StripePaymentModel.findByIdAndDelete(id);
              if (!deletedStripePayment) {
                return res.status(404).json({ error: 'StripePayment not found' });
              }
             return deletedStripePayment;
            } catch (error) {
              console.log(error);
              throw new Error("Unable to delete StripePayment");
            }
          }
          
          export default {
            getAll,
            getById,
            create,
            update,
            deleteById
          };
          