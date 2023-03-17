import { Router } from "express";
import BookRoutes from "../app/api/books/books.route.js";
const router = Router();

router.use('/book',BookRoutes);

export default router;
