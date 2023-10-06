import { Router } from "express";
import TodoRoute from "../app/api/Todo/Todo.routes.js";
const router = Router();
router.use("/todo",TodoRoute);
export default router;

