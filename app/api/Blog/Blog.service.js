import BlogModel from "../../../models/Blog.model.js";

          export const getAll = async () => {
            try {
              const Blog = await BlogModel.find();
             return Blog;
            } catch (error) {
              console.log(error);
              throw new Error("Unable to get Blog");
            }
          }
          
          export const getById = async (id) => {
            try {
             
              const Blog = await BlogModel.findById(id);
              return Blog;
            } catch (error) {
              console.log(error);
              throw new Error('Unable to get Blog');
            }
          }
          
          export const create = async(data) => {
            try {
              const newBlog = await BlogModel.create(data);
              return newBlog;
            } catch (error) {
              console.log(error);
              throw new Error("Unable to create Blog");
            }
          }
          
          export const update = async(id,data) => {
            try {
              const updatedBlog = await BlogModel.findByIdAndUpdate(id, data, { new: true });
              
              if (!updatedBlog) {
                return res.status(404).json({ error: 'Blog not found' });
              }
              return updatedBlog;
            } catch (error) {
              console.log(error);
              throw new Error("Unable to update Blog");
            }
          }
          
          export const deleteById = async (id) => {
            try {
              const deletedBlog = await BlogModel.findByIdAndDelete(id);
              if (!deletedBlog) {
                return res.status(404).json({ error: 'Blog not found' });
              }
             return deletedBlog;
            } catch (error) {
              console.log(error);
              throw new Error("Unable to delete Blog");
            }
          }
          
          export default {
            getAll,
            getById,
            create,
            update,
            deleteById
          };
          