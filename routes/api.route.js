import { Router } from "express";
import Test6Routes from "../app/api/Test6/Test6.routes.js";
import Test7Routes from "../app/api/Test7/Test7.routes.js";
const router = Router();
router.use("/test6",Test6Routes);
router.use("/test7",Test7Routes);
export default router;
