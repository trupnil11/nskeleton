import { Router } from "express";
const router = Router();

router.get('/',(req,res,next)=>{ return res.render("main") })

router.get('/documentation',(req,res,next)=>{ return res.render("documentation/doc") })


export default router;
