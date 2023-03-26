import { Router } from "express";
              import * as Test4Controller from "./Test4.controller.js"
              const router = Router();
              
              //GET ALL 

              router.get('/',Test4Controller.getAllTest4);
                
                //POST

                router.post('/',Test4Controller.createTest4);

                //GET BY ID

                router.get('/:id',getTest4Controller.Test4ById);

                //UPDATE

                router.post('/update/:id',Test4Controller.updateTest4);

                //DELETE

                router.delete('/delete/:id',Test4Controller.deleteTest4);


              
              export default router;