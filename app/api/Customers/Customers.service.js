import CustomersModel from "../../../models/Customers.model.js";

          export const getAll = async () => {
            try {
              const Customers = await CustomersModel.find();
             return Customers;
            } catch (error) {
              console.log(error);
              throw new Error("Unable to get Customers");
            }
          }
          
          export const getById = async (id) => {
            try {
             
              const Customers = await CustomersModel.findById(id);
              return Customers;
            } catch (error) {
              console.log(error);
              throw new Error('Unable to get Customers');
            }
          }
          
          export const create = async(data) => {
            try {
              const newCustomers = await CustomersModel.create(data);
              return newCustomers;
            } catch (error) {
              console.log(error);
              throw new Error("Unable to create Customers");
            }
          }
          
          export const update = async(id,data) => {
            try {
              const updatedCustomers = await CustomersModel.findByIdAndUpdate(id, data, { new: true });
              
              if (!updatedCustomers) {
                return res.status(404).json({ error: 'Customers not found' });
              }
              return updatedCustomers;
            } catch (error) {
              console.log(error);
              throw new Error("Unable to update Customers");
            }
          }
          
          export const deleteById = async (id) => {
            try {
              const deletedCustomers = await CustomersModel.findByIdAndDelete(id);
              if (!deletedCustomers) {
                return res.status(404).json({ error: 'Customers not found' });
              }
             return deletedCustomers;
            } catch (error) {
              console.log(error);
              throw new Error("Unable to delete Customers");
            }
          }
          
          export default {
            getAll,
            getById,
            create,
            update,
            deleteById
          };
          