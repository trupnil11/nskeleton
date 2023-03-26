import Test3Model from "../../../models/Test3.model.js";

              export const getAll = async (req,res) => {
                try {
                  const Test3 = await Test3Model.find();
                  return res.json(Test3);
                } catch (error) {
                  console.log(error);
                  throw new Error("Unable to get Test3");
                }
              }
              
              export const getById = async (req,res) => {
                try {
                  const { id } = req.params;
                  const Test3 = await Test3Model.findById(id);
                  if (!Test3) {
                    return res.status(404).json({ error: 'Test3 not found' });
                  }
                  return res.json(Test3);
                } catch (error) {
                  console.log(error);
                  throw new Error('Unable to get Test3');
                }
              }
              
              export const create = async(req,res) => {
                try {
                  const newTest3 = await Test3Model.create(req.body);
                  return res.status(201).json(newTest3);
                } catch (error) {
                  console.log(error);
                  throw new Error("Unable to create Test3");
                }
              }
              
              export const update = async(req,res) => {
                try {
                  const { id } = req.params;
                  const data = req.body;
                  const updatedTest3 = await Test3Model.findByIdAndUpdate(id, data, { new: true });
                  if (!updatedTest3) {
                    return res.status(404).json({ error: 'Test3 not found' });
                  }
                  return res.json(updatedTest3);
                } catch (error) {
                  console.log(error);
                  throw new Error("Unable to update Test3");
                }
              }
              
              export const deleteById = async (req,res) => {
                try {
                  const { id } = req.params;
                  const deletedTest3 = await Test3Model.findByIdAndDelete(id);
                  if (!deletedTest3) {
                    return res.status(404).json({ error: 'Test3 not found' });
                  }
                  return res.json({ message: 'Test3 deleted successfully' });
                } catch (error) {
                  console.log(error);
                  throw new Error("Unable to delete Test3");
                }
              }
              
              export default {
                getAll,
                getById,
                create,
                update,
                deleteById
              };
              