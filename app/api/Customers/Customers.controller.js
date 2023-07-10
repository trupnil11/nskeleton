import Response from "../../../helpers/Response.helper.js";
import * as CustomersService from "./Customers.service.js";

// get all
export const getAllCustomers = async (req, res, next) => {
try {
 const customers = await CustomersService.getAll();
 Response.success(res, 200, "Records Fetched Successfully",  customers);
} catch (error) {
 next(error);
}
};

// get by id
export const getCustomersById = async (req, res, next) => {
try {
 const customers = await CustomersService.getById(req.params.id);
 if (!customers) {
   return res.status(404).json(Response.error("Customers not found"));
 }
 Response.success(res, 200, "Single Records Fetched Successfully",  customers);
} catch (error) {
 next(error);
}
};

// create
export const createCustomers = async (req, res, next) => {
try {
 const customers = await CustomersService.create(req.body);
 Response.success(res, 200, "Records Creted Successfully",  customers);
} catch (error) {
 next(error);
}
};

// update
export const updateCustomers = async (req, res, next) => {
try {
 const customers = await CustomersService.update(req.params.id, req.body);
 if (!customers) {
   return res.status(404).json(Response.error("Customers not found"));
 }
 Response.success(res, 200, "Records uddated Successfully",  customers);
} catch (error) {
 next(error);
}
};

// delete
export const deleteCustomers = async (req, res, next) => {
try {
 const customers = await CustomersService.delete(req.params.id);
 if (!customers) {
   return res.status(404).json(Response.error("Customers not found"));
 }
 Response.success(res, 200, "Records Deleted Successfully");
} catch (error) {
 next(error);
}
};
