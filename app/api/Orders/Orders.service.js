import OrdersModel from "../../../models/Orders.model.js";

          export const getAll = async () => {
            try {
              const Orders = await OrdersModel.find();
             return Orders;
            } catch (error) {
              console.log(error);
              throw new Error("Unable to get Orders");
            }
          }
          
          export const getById = async (id) => {
            try {
             
              const Orders = await OrdersModel.findById(id);
              return Orders;
            } catch (error) {
              console.log(error);
              throw new Error('Unable to get Orders');
            }
          }
          
          export const create = async(data) => {
            try {
              const newOrders = await OrdersModel.create(data);
              return newOrders;
            } catch (error) {
              console.log(error);
              throw new Error("Unable to create Orders");
            }
          }
          
          export const update = async(id,data) => {
            try {
              const updatedOrders = await OrdersModel.findByIdAndUpdate(id, data, { new: true });
              
              if (!updatedOrders) {
                return res.status(404).json({ error: 'Orders not found' });
              }
              return updatedOrders;
            } catch (error) {
              console.log(error);
              throw new Error("Unable to update Orders");
            }
          }
          
          export const deleteById = async (id) => {
            try {
              const deletedOrders = await OrdersModel.findByIdAndDelete(id);
              if (!deletedOrders) {
                return res.status(404).json({ error: 'Orders not found' });
              }
             return deletedOrders;
            } catch (error) {
              console.log(error);
              throw new Error("Unable to delete Orders");
            }
          }
          
          export default {
            getAll,
            getById,
            create,
            update,
            deleteById
          };
          