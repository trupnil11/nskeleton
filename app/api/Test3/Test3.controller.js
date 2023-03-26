import Response from "../../../helpers/Response.helper.js";
 import * as Test3Service from "./Test3.service.js";
 
 // get all
 export const getAllTest3 = async (req, res, next) => {
   try {
     const test3 = await Test3Service.getAll();
     res.status(200).json(Response.success("Test3 found", test3));
   } catch (error) {
     next(error);
   }
 };
 
 // get by id
 export const getTest3ById = async (req, res, next) => {
   try {
     const test3 = await Test3Service.getById(req.params.id);
     if (!test3) {
       return res.status(404).json(Response.error("Test3 not found"));
     }
     res.status(200).json(Response.success("Test3 found", test3));
   } catch (error) {
     next(error);
   }
 };
 
 // create
 export const createTest3 = async (req, res, next) => {
   try {
     const test3 = await Test3Service.create(req.body);
     res.status(201).json(Response.success("Test3 created", test3));
   } catch (error) {
     next(error);
   }
 };
 
 // update
 export const updateTest3 = async (req, res, next) => {
   try {
     const test3 = await Test3Service.update(req.params.id, req.body);
     if (!test3) {
       return res.status(404).json(Response.error("Test3 not found"));
     }
     res.status(200).json(Response.success("Test3 updated", test3));
   } catch (error) {
     next(error);
   }
 };
 
 // delete
 export const deleteTest3 = async (req, res, next) => {
   try {
     const test3 = await Test3Service.delete(req.params.id);
     if (!test3) {
       return res.status(404).json(Response.error("Test3 not found"));
     }
     res.status(200).json(Response.success("Test3 deleted", test3));
   } catch (error) {
     next(error);
   }
 };
 