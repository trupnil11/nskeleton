import Response from "../../../helpers/Response.helper.js";
 import * as TodoService from "./Todo.service.js";
 
 // get all
 export const getAllTodo = async (req, res, next) => {
   try {
     const todo = await TodoService.getAll();
     Response.success(res, 200, "Records Fetched Successfully",  todo);
   } catch (error) {
     next(error);
   }
 };
 
 // get by id
 export const getTodoById = async (req, res, next) => {
   try {
     const todo = await TodoService.getById(req.params.id);
     if (!todo) {
       return res.status(404).json(Response.error("Todo not found"));
     }
     Response.success(res, 200, "Single Records Fetched Successfully",  todo);
   } catch (error) {
     next(error);
   }
 };
 
 // create
 export const createTodo = async (req, res, next) => {
   try {
     const todo = await TodoService.create(req.body);
     Response.success(res, 200, "Records Creted Successfully",  todo);
   } catch (error) {
     next(error);
   }
 };
 
 // update
 export const updateTodo = async (req, res, next) => {
   try {
     const todo = await TodoService.update(req.params.id, req.body);
     if (!todo) {
       return res.status(404).json(Response.error("Todo not found"));
     }
     Response.success(res, 200, "Records uddated Successfully",  todo);
   } catch (error) {
     next(error);
   }
 };
 
 // delete
 export const deleteTodo = async (req, res, next) => {
   try {
     const todo = await TodoService.deleteById(req.params.id);
     if (!todo) {
       return res.status(404).json(Response.error("Todo not found"));
     }
     Response.success(res, 200, "Records Deleted Successfully");
   } catch (error) {
     next(error);
   }
 };
 