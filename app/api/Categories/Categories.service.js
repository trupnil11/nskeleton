import CategoriesModel from "../../../models/Categories.model.js";

          export const getAll = async () => {
            try {
              const Categories = await CategoriesModel.find();
             return Categories;
            } catch (error) {
              console.log(error);
              throw new Error("Unable to get Categories");
            }
          }
          
          export const getById = async (id) => {
            try {
             
              const Categories = await CategoriesModel.findById(id);
              return Categories;
            } catch (error) {
              console.log(error);
              throw new Error('Unable to get Categories');
            }
          }
          
          export const create = async(data) => {
            try {
              const newCategories = await CategoriesModel.create(data);
              return newCategories;
            } catch (error) {
              console.log(error);
              throw new Error("Unable to create Categories");
            }
          }
          
          export const update = async(id,data) => {
            try {
              const updatedCategories = await CategoriesModel.findByIdAndUpdate(id, data, { new: true });
              
              if (!updatedCategories) {
                return res.status(404).json({ error: 'Categories not found' });
              }
              return updatedCategories;
            } catch (error) {
              console.log(error);
              throw new Error("Unable to update Categories");
            }
          }
          
          export const deleteById = async (id) => {
            try {
              const deletedCategories = await CategoriesModel.findByIdAndDelete(id);
              if (!deletedCategories) {
                return res.status(404).json({ error: 'Categories not found' });
              }
             return deletedCategories;
            } catch (error) {
              console.log(error);
              throw new Error("Unable to delete Categories");
            }
          }
          
          export default {
            getAll,
            getById,
            create,
            update,
            deleteById
          };
          