import Response from "../../../helpers/Response.helper.js";
import * as StripePaymentService from "./StripePayment.service.js";

// get all
export const getAllStripePayment = async (req, res, next) => {
try {
 const stripepayment = await StripePaymentService.getAll();
 Response.success(res, 200, "Records Fetched Successfully",  stripepayment);
} catch (error) {
 next(error);
}
};

// get by id
export const getStripePaymentById = async (req, res, next) => {
try {
 const stripepayment = await StripePaymentService.getById(req.params.id);
 if (!stripepayment) {
   return res.status(404).json(Response.error("StripePayment not found"));
 }
 Response.success(res, 200, "Single Records Fetched Successfully",  stripepayment);
} catch (error) {
 next(error);
}
};

// create
export const createStripePayment = async (req, res, next) => {
try {
 const stripepayment = await StripePaymentService.create(req.body);
 Response.success(res, 200, "Records Creted Successfully",  stripepayment);
} catch (error) {
 next(error);
}
};

// update
export const updateStripePayment = async (req, res, next) => {
try {
 const stripepayment = await StripePaymentService.update(req.params.id, req.body);
 if (!stripepayment) {
   return res.status(404).json(Response.error("StripePayment not found"));
 }
 Response.success(res, 200, "Records uddated Successfully",  stripepayment);
} catch (error) {
 next(error);
}
};

// delete
export const deleteStripePayment = async (req, res, next) => {
try {
 const stripepayment = await StripePaymentService.delete(req.params.id);
 if (!stripepayment) {
   return res.status(404).json(Response.error("StripePayment not found"));
 }
 Response.success(res, 200, "Records Deleted Successfully");
} catch (error) {
 next(error);
}
};
