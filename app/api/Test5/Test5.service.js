import Test5Model from "../../../models/Test5.model.js";

              export const getAll = async (req,res) => {
                try {
                  const Test5 = await Test5Model.find();
                   if (!res) {
                    return Test5;
                  }
                  return res.json(Test5);
                } catch (error) {
                  console.log(error);
                  throw new Error("Unable to get Test5");
                }
              }
              
              export const getById = async (req,res,id) => {
                try {
                  const id  = req.params.id;
                  const Test5 = await Test5Model.findById(id);
                  console.log(id);
                  if (!Test5) {
                    return res.status(404).json({ error: 'Test5 not found' });
                  }
                  if (!res) {
                    return Test5;
                  }
                  return res.json(Test5);
                } catch (error) {
                  console.log(error);
                  throw new Error('Unable to get Test5');
                }
              }
              
              export const create = async(req,res) => {
                try {
                  const newTest5 = await Test5Model.create(req.body);
                  return res.status(201).json(newTest5);
                } catch (error) {
                  console.log(error);
                  throw new Error("Unable to create Test5");
                }
              }
              
              export const update = async(req,res) => {
                try {
                  const { id } = req.params;
                  const data = req.body;
                  const updatedTest5 = await Test5Model.findByIdAndUpdate(id, data, { new: true });
                  if (!updatedTest5) {
                    return res.status(404).json({ error: 'Test5 not found' });
                  }
                  return res.json(updatedTest5);
                } catch (error) {
                  console.log(error);
                  throw new Error("Unable to update Test5");
                }
              }
              
              export const deleteById = async (req,res) => {
                try {
                  const { id } = req.params;
                  const deletedTest5 = await Test5Model.findByIdAndDelete(id);
                  if (!deletedTest5) {
                    return res.status(404).json({ error: 'Test5 not found' });
                  }
                  return res.json({ message: 'Test5 deleted successfully' });
                } catch (error) {
                  console.log(error);
                  throw new Error("Unable to delete Test5");
                }
              }
              
              export default {
                getAll,
                getById,
                create,
                update,
                deleteById
              };
              