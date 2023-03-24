import { Router } from "express";
import TodoRoutes from "../app/api/Todo/Todo.routes.js";
const router = Router();
router.use("/todo",TodoRoutes); //todo routes added
export default router;
