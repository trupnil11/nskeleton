import { Router } from "express";
const router = Router();

router.get('/',(req,res,next)=>{
return res.send('book route called');
});

export default router;
