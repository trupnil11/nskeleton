import Response from "../../../helpers/Response.helper.js";
import * as ProductsService from "./Products.service.js";

// get all
export const getAllProducts = async (req, res, next) => {
try {
 const products = await ProductsService.getAll();
 Response.success(res, 200, "Records Fetched Successfully",  products);
} catch (error) {
 next(error);
}
};

// get by id
export const getProductsById = async (req, res, next) => {
try {
 const products = await ProductsService.getById(req.params.id);
 if (!products) {
   return res.status(404).json(Response.error("Products not found"));
 }
 Response.success(res, 200, "Single Records Fetched Successfully",  products);
} catch (error) {
 next(error);
}
};

// create
export const createProducts = async (req, res, next) => {
try {
 const products = await ProductsService.create(req.body);
 Response.success(res, 200, "Records Creted Successfully",  products);
} catch (error) {
 next(error);
}
};

// update
export const updateProducts = async (req, res, next) => {
try {
 const products = await ProductsService.update(req.params.id, req.body);
 if (!products) {
   return res.status(404).json(Response.error("Products not found"));
 }
 Response.success(res, 200, "Records uddated Successfully",  products);
} catch (error) {
 next(error);
}
};

// delete
export const deleteProducts = async (req, res, next) => {
try {
 const products = await ProductsService.delete(req.params.id);
 if (!products) {
   return res.status(404).json(Response.error("Products not found"));
 }
 Response.success(res, 200, "Records Deleted Successfully");
} catch (error) {
 next(error);
}
};
