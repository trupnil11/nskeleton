import { Router } from "express";
import Test7Routes from "../app/api/Test7/Test7.routes.js";
import TodoRoutes from "../app/api/Todo/Todo.routes.js";
const router = Router();
router.use("/test7",Test7Routes);
router.use("/todo",TodoRoutes);
export default router;
