import Response from "../../../helpers/Response.helper.js";
 import * as Test4Service from "./Test4.service.js";
 
 // get all
 export const getAllTest4 = async (req, res, next) => {
   try {
     const test4 = await Test4Service.getAll();
     res.status(200).json(Response.success("Test4 found", test4));
   } catch (error) {
     next(error);
   }
 };
 
 // get by id
 export const getTest4ById = async (req, res, next) => {
   try {
     const test4 = await Test4Service.getById(req.params.id);
     if (!test4) {
       return res.status(404).json(Response.error("Test4 not found"));
     }
     res.status(200).json(Response.success("Test4 found", test4));
   } catch (error) {
     next(error);
   }
 };
 
 // create
 export const createTest4 = async (req, res, next) => {
   try {
     const test4 = await Test4Service.create(req.body);
     res.status(201).json(Response.success("Test4 created", test4));
   } catch (error) {
     next(error);
   }
 };
 
 // update
 export const updateTest4 = async (req, res, next) => {
   try {
     const test4 = await Test4Service.update(req.params.id, req.body);
     if (!test4) {
       return res.status(404).json(Response.error("Test4 not found"));
     }
     res.status(200).json(Response.success("Test4 updated", test4));
   } catch (error) {
     next(error);
   }
 };
 
 // delete
 export const deleteTest4 = async (req, res, next) => {
   try {
     const test4 = await Test4Service.delete(req.params.id);
     if (!test4) {
       return res.status(404).json(Response.error("Test4 not found"));
     }
     res.status(200).json(Response.success("Test4 deleted", test4));
   } catch (error) {
     next(error);
   }
 };
 