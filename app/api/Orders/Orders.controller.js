import Response from "../../../helpers/Response.helper.js";
import * as OrdersService from "./Orders.service.js";

// get all
export const getAllOrders = async (req, res, next) => {
try {
 const orders = await OrdersService.getAll();
 Response.success(res, 200, "Records Fetched Successfully",  orders);
} catch (error) {
 next(error);
}
};

// get by id
export const getOrdersById = async (req, res, next) => {
try {
 const orders = await OrdersService.getById(req.params.id);
 if (!orders) {
   return res.status(404).json(Response.error("Orders not found"));
 }
 Response.success(res, 200, "Single Records Fetched Successfully",  orders);
} catch (error) {
 next(error);
}
};

// create
export const createOrders = async (req, res, next) => {
try {
 const orders = await OrdersService.create(req.body);
 Response.success(res, 200, "Records Creted Successfully",  orders);
} catch (error) {
 next(error);
}
};

// update
export const updateOrders = async (req, res, next) => {
try {
 const orders = await OrdersService.update(req.params.id, req.body);
 if (!orders) {
   return res.status(404).json(Response.error("Orders not found"));
 }
 Response.success(res, 200, "Records uddated Successfully",  orders);
} catch (error) {
 next(error);
}
};

// delete
export const deleteOrders = async (req, res, next) => {
try {
 const orders = await OrdersService.delete(req.params.id);
 if (!orders) {
   return res.status(404).json(Response.error("Orders not found"));
 }
 Response.success(res, 200, "Records Deleted Successfully");
} catch (error) {
 next(error);
}
};
