import { Router } from "express";
import Test2Routes from "../app/api/Test2/Test2.routes.js";
import Test5Routes from "../app/api/Test5/Test5.routes.js";
const router = Router();
router.use("/test2",Test2Routes);
router.use("/test5",Test5Routes);
export default router;
