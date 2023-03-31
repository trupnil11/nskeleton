import Response from "../../../helpers/Response.helper.js";
 import * as Test7Service from "./Test7.service.js";
 
 // get all
 export const getAllTest7 = async (req, res, next) => {
   try {
     const test7 = await Test7Service.getAll();
     Response.success(res, 200, "Records Fetched Successfully",  test7);
   } catch (error) {
     next(error);
   }
 };
 
 // get by id
 export const getTest7ById = async (req, res, next) => {
   try {
     const test7 = await Test7Service.getById(req.params.id);
     if (!test7) {
       return res.status(404).json(Response.error("Test7 not found"));
     }
     Response.success(res, 200, "Single Records Fetched Successfully",  test7);
   } catch (error) {
     next(error);
   }
 };
 
 // create
 export const createTest7 = async (req, res, next) => {
   try {
     console.log(req.body);
     const test7 = await Test7Service.create(req.body);
     Response.success(res, 200, "Records Creted Successfully",  test7);
   } catch (error) {
     next(error);
   }
 };
 
 // update
 export const updateTest7 = async (req, res, next) => {
   try {
     const test7 = await Test7Service.update(req.params.id, req.body);
     if (!test7) {
       return res.status(404).json(Response.error("Test7 not found"));
     }
     Response.success(res, 200, "Records updated Successfully",  test7);
   } catch (error) {
     next(error);
   }
 };
 
 // delete
 export const deleteTest7 = async (req, res, next) => {
   try {
     const test7 = await Test7Service.deleteById(req.params.id);
     if (!test7) {
       return res.status(404).json(Response.error("Test7 not found"));
     }
     Response.success(res, 200, "Records Deleted Successfully");
   } catch (error) {
     next(error);
   }
 };
 