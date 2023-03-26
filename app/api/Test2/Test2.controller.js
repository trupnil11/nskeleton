import Response from "../../../helpers/Response.helper.js";
 import * as Test2Service from "./Test2.service.js";
 
 // get all
 export const getAllTest2 = async (req, res, next) => {
   try {
    const test2 = await Test2Service.getAll();
     res.status(200).json(Response.success("Test2 found", test2));
   } catch (error) {
     next(error);
   }
 };
 
 // get by id
 export const getTest2ById = async (req, res, next) => {
   try {
     const test2 = await Test2Service.getById(req.params.id);
     if (!test2) {
       return res.status(404).json(Response.error("Test2 not found"));
     }
     res.status(200).json(Response.success("Test2 found", test2));
   } catch (error) {
     next(error);
   }
 };
 
 // create
 export const createTest2 = async (req, res, next) => {
   try {
     const test2 = await Test2Service.create(req.body);
     res.status(201).json(Response.success("Test2 created", test2));
   } catch (error) {
     next(error);
   }
 };
 
 // update
 export const updateTest2 = async (req, res, next) => {
   try {
     const test2 = await Test2Service.update(req.params.id, req.body);
     if (!test2) {
       return res.status(404).json(Response.error("Test2 not found"));
     }
     res.status(200).json(Response.success("Test2 updated", test2));
   } catch (error) {
     next(error);
   }
 };
 
 // delete
 export const deleteTest2 = async (req, res, next) => {
   try {
     const test2 = await Test2Service.delete(req.params.id);
     if (!test2) {
       return res.status(404).json(Response.error("Test2 not found"));
     }
     res.status(200).json(Response.success("Test2 deleted", test2));
   } catch (error) {
     next(error);
   }
 };
 