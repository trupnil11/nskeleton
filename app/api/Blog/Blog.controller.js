import Response from "../../../helpers/Response.helper.js";
import * as BlogService from "./Blog.service.js";

// get all
export const getAllBlog = async (req, res, next) => {
try {
 const blog = await BlogService.getAll();
 Response.success(res, 200, "Records Fetched Successfully",  blog);
} catch (error) {
 next(error);
}
};

// get by id
export const getBlogById = async (req, res, next) => {
try {
 const blog = await BlogService.getById(req.params.id);
 if (!blog) {
   return res.status(404).json(Response.error("Blog not found"));
 }
 Response.success(res, 200, "Single Records Fetched Successfully",  blog);
} catch (error) {
 next(error);
}
};

// create
export const createBlog = async (req, res, next) => {
try {
 const blog = await BlogService.create(req.body);
 Response.success(res, 200, "Records Creted Successfully",  blog);
} catch (error) {
 next(error);
}
};

// update
export const updateBlog = async (req, res, next) => {
try {
 const blog = await BlogService.update(req.params.id, req.body);
 if (!blog) {
   return res.status(404).json(Response.error("Blog not found"));
 }
 Response.success(res, 200, "Records uddated Successfully",  blog);
} catch (error) {
 next(error);
}
};

// delete
export const deleteBlog = async (req, res, next) => {
try {
 const blog = await BlogService.delete(req.params.id);
 if (!blog) {
   return res.status(404).json(Response.error("Blog not found"));
 }
 Response.success(res, 200, "Records Deleted Successfully");
} catch (error) {
 next(error);
}
};
