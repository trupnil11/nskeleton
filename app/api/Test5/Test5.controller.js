import Response from "../../../helpers/Response.helper.js";
 import * as Test5Service from "./Test5.service.js";
 
 // get all
 export const getAllTest5 = async (req, res, next) => {
   try {
     const test5 = await Test5Service.getAll();
     Response.success(res, 200, "Records Fetched Successfully", test5);
   } catch (error) {
     next(error);
   }
 };
 
 // get by id
 export const getTest5ById = async (req, res, next) => {
   try {
    console.log(req.params.id)
     const test5 = await Test5Service.getById(req.params.id);
     
     if (!test5) {
       return res.status(404).json(Response.error("Test5 not found"));
     }
     res.status(200).json(Response.success("Test5 found", test5));
   } catch (error) {
     next(error);
   }
 };
 
 // create
 export const createTest5 = async (req, res, next) => {
   try {
     const test5 = await Test5Service.create(req.body);
     res.status(201).json(Response.success("Test5 created", test5));
   } catch (error) {
     next(error);
   }
 };
 
 // update
 export const updateTest5 = async (req, res, next) => {
   try {
     const test5 = await Test5Service.update(req.params.id, req.body);
     if (!test5) {
       return res.status(404).json(Response.error("Test5 not found"));
     }
     res.status(200).json(Response.success("Test5 updated", test5));
   } catch (error) {
     next(error);
   }
 };
 
 // delete
 export const deleteTest5 = async (req, res, next) => {
   try {
     const test5 = await Test5Service.delete(req.params.id);
     if (!test5) {
       return res.status(404).json(Response.error("Test5 not found"));
     }
     res.status(200).json(Response.success("Test5 deleted", test5));
   } catch (error) {
     next(error);
   }
 };
 