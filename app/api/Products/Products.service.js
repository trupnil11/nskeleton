import ProductsModel from "../../../models/Products.model.js";

          export const getAll = async () => {
            try {
              const Products = await ProductsModel.find();
             return Products;
            } catch (error) {
              console.log(error);
              throw new Error("Unable to get Products");
            }
          }
          
          export const getById = async (id) => {
            try {
             
              const Products = await ProductsModel.findById(id);
              return Products;
            } catch (error) {
              console.log(error);
              throw new Error('Unable to get Products');
            }
          }
          
          export const create = async(data) => {
            try {
              const newProducts = await ProductsModel.create(data);
              return newProducts;
            } catch (error) {
              console.log(error);
              throw new Error("Unable to create Products");
            }
          }
          
          export const update = async(id,data) => {
            try {
              const updatedProducts = await ProductsModel.findByIdAndUpdate(id, data, { new: true });
              
              if (!updatedProducts) {
                return res.status(404).json({ error: 'Products not found' });
              }
              return updatedProducts;
            } catch (error) {
              console.log(error);
              throw new Error("Unable to update Products");
            }
          }
          
          export const deleteById = async (id) => {
            try {
              const deletedProducts = await ProductsModel.findByIdAndDelete(id);
              if (!deletedProducts) {
                return res.status(404).json({ error: 'Products not found' });
              }
             return deletedProducts;
            } catch (error) {
              console.log(error);
              throw new Error("Unable to delete Products");
            }
          }
          
          export default {
            getAll,
            getById,
            create,
            update,
            deleteById
          };
          