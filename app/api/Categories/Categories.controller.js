import Response from "../../../helpers/Response.helper.js";
import * as CategoriesService from "./Categories.service.js";

// get all
export const getAllCategories = async (req, res, next) => {
try {
 const categories = await CategoriesService.getAll();
 Response.success(res, 200, "Records Fetched Successfully",  categories);
} catch (error) {
 next(error);
}
};

// get by id
export const getCategoriesById = async (req, res, next) => {
try {
 const categories = await CategoriesService.getById(req.params.id);
 if (!categories) {
   return res.status(404).json(Response.error("Categories not found"));
 }
 Response.success(res, 200, "Single Records Fetched Successfully",  categories);
} catch (error) {
 next(error);
}
};

// create
export const createCategories = async (req, res, next) => {
try {
 const categories = await CategoriesService.create(req.body);
 Response.success(res, 200, "Records Creted Successfully",  categories);
} catch (error) {
 next(error);
}
};

// update
export const updateCategories = async (req, res, next) => {
try {
 const categories = await CategoriesService.update(req.params.id, req.body);
 if (!categories) {
   return res.status(404).json(Response.error("Categories not found"));
 }
 Response.success(res, 200, "Records uddated Successfully",  categories);
} catch (error) {
 next(error);
}
};

// delete
export const deleteCategories = async (req, res, next) => {
try {
 const categories = await CategoriesService.delete(req.params.id);
 if (!categories) {
   return res.status(404).json(Response.error("Categories not found"));
 }
 Response.success(res, 200, "Records Deleted Successfully");
} catch (error) {
 next(error);
}
};
