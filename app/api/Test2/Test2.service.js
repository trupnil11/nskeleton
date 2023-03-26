import Test2Model from "../../../models/Test2.model.js";

export const getAll = async (req,res) => {
  try {
    const test2 = await Test2Model.find();
    return res.json(test2);
  } catch (error) {
    console.log(error);
    throw new Error(`Unable to get test2`);
  }
}

export const getById = async (req,res) => {
  try {
    const { id } = req.params;
    const test2 = await Test2Model.findById(id);
    if (!test2) {
      return res.status(404).json({ error: 'Test2 not found' });
    }
    return res.json(test2);
  } catch (error) {
    console.log(error);
    throw new Error(`Unable to get test2`);
  }
}

export const create = async(req,res) => {
  try {
    const newTest2 = await Test2Model.create(req.body);
    return res.status(201).json(newTest2);
  } catch (error) {
    console.log(error);
    throw new Error(`Unable to create test2`);
  }
}

export const update = async(req,res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const updatedTest2 = await Test2Model.findByIdAndUpdate(id, data, { new: true });
    if (!updatedTest2) {
      return res.status(404).json({ error: 'Test2 not found' });
    }
    return res.json(updatedTest2);
  } catch (error) {
    console.log(error);
    throw new Error(`Unable to update test2`);
  }
}

export const deleteById = async (req,res) => {
  try {
    const { id } = req.params;
    const deletedTest2 = await Test2Model.findByIdAndDelete(id);
    if (!deletedTest2) {
      return res.status(404).json({ error: 'Test2 not found' });
    }
    return res.json({ message: 'Test2 deleted successfully' });
  } catch (error) {
    console.log(error);
    throw new Error(`Unable to delete test2`);
  }
}

export default {
  getAll,
  getById,
  create,
  update,
  deleteById
};
