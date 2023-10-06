import TodoModel from "../../../models/Todo.model.js";

          export const getAll = async () => {
            try {
              const Todo = await TodoModel.find();
             return Todo;
            } catch (error) {
              console.log(error);
              throw new Error("Unable to get Todo");
            }
          }
          
          export const getById = async (id) => {
            try {
             
              const Todo = await TodoModel.findById(id);
              return Todo;
            } catch (error) {
              console.log(error);
              throw new Error('Unable to get Todo');
            }
          }
          
          export const create = async(data) => {
            try {
              const newTodo = await TodoModel.create(data);
              return newTodo;
            } catch (error) {
              console.log(error);
              throw new Error("Unable to create Todo");
            }
          }
          
          export const update = async(id,data) => {
            try {
              const updatedTodo = await TodoModel.findByIdAndUpdate(id, data, { new: true });
              
              if (!updatedTodo) {
                return res.status(404).json({ error: 'Todo not found' });
              }
              return updatedTodo;
            } catch (error) {
              console.log(error);
              throw new Error("Unable to update Todo");
            }
          }
          
          export const deleteById = async (id) => {
            try {
              const deletedTodo = await TodoModel.findByIdAndDelete(id);
              if (!deletedTodo) {
                return res.status(404).json({ error: 'Todo not found' });
              }
             return deletedTodo;
            } catch (error) {
              console.log(error);
              throw new Error("Unable to delete Todo");
            }
          }
          
          export default {
            getAll,
            getById,
            create,
            update,
            deleteById
          };
          