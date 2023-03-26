import Test4Model from "../../../models/Test4.model.js";

              export const getAll = async (req,res) => {
                try {
                  const Test4 = await Test4Model.find();
                  return res.json(Test4);
                } catch (error) {
                  console.log(error);
                  throw new Error("Unable to get Test4");
                }
              }
              
              export const getById = async (req,res) => {
                try {
                  const { id } = req.params;
                  const Test4 = await Test4Model.findById(id);
                  if (!Test4) {
                    return res.status(404).json({ error: 'Test4 not found' });
                  }
                  return res.json(Test4);
                } catch (error) {
                  console.log(error);
                  throw new Error('Unable to get Test4');
                }
              }
              
              export const create = async(req,res) => {
                try {
                  const newTest4 = await Test4Model.create(req.body);
                  return res.status(201).json(newTest4);
                } catch (error) {
                  console.log(error);
                  throw new Error("Unable to create Test4");
                }
              }
              
              export const update = async(req,res) => {
                try {
                  const { id } = req.params;
                  const data = req.body;
                  const updatedTest4 = await Test4Model.findByIdAndUpdate(id, data, { new: true });
                  if (!updatedTest4) {
                    return res.status(404).json({ error: 'Test4 not found' });
                  }
                  return res.json(updatedTest4);
                } catch (error) {
                  console.log(error);
                  throw new Error("Unable to update Test4");
                }
              }
              
              export const deleteById = async (req,res) => {
                try {
                  const { id } = req.params;
                  const deletedTest4 = await Test4Model.findByIdAndDelete(id);
                  if (!deletedTest4) {
                    return res.status(404).json({ error: 'Test4 not found' });
                  }
                  return res.json({ message: 'Test4 deleted successfully' });
                } catch (error) {
                  console.log(error);
                  throw new Error("Unable to delete Test4");
                }
              }
              
              export default {
                getAll,
                getById,
                create,
                update,
                deleteById
              };
              