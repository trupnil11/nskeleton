import Test7Model from "../../../models/Test7.model.js";

              export const getAll = async () => {
                try {
                  const Test7 = await Test7Model.find();
                 return Test7;
                } catch (error) {
                  console.log(error);
                  throw new Error("Unable to get Test7");
                }
              }
              
              export const getById = async (id) => {
                try {
                 
                  const Test7 = await Test7Model.findById(id);
                  return Test7;
                } catch (error) {
                  console.log(error);
                  throw new Error('Unable to get Test7');
                }
              }
              
              export const create = async(data) => {
                try {
                  const newTest7 = await Test7Model.create(data);
                  return newTest7;
                } catch (error) {
                  console.log(error);
                  throw new Error("Unable to create Test7");
                }
              }
              
              export const update = async(id,data) => {
                try {
                  const updatedTest7 = await Test7Model.findByIdAndUpdate(id, data, { new: true });
                  
                  if (!updatedTest7) {
                    return res.status(404).json({ error: 'Test7 not found' });
                  }
                  return updatedTest7;
                } catch (error) {
                  console.log(error);
                  throw new Error("Unable to update Test7");
                }
              }
              
              export const deleteById = async (id) => {
                try {
                  const deletedTest7 = await Test7Model.findByIdAndDelete(id);
                  if (!deletedTest7) {
                    return res.status(404).json({ error: 'Test7 not found' });
                  }
                 return deletedTest7;
                } catch (error) {
                  console.log(error);
                  throw new Error("Unable to delete Test7");
                }
              }
              
              export default {
                getAll,
                getById,
                create,
                update,
                deleteById
              };
              