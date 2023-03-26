import { Router } from "express";
              import * as Test3Controller from "./Test3.controller.js"
              const router = Router();
              
              //GET ALL 

              router.get('/',Test3Controller.getAllTest3);
                
                //POST

                router.post('/',Test3Controller.createTest3);

                //GET BY ID

                router.get('/:id',Test3Controller.getTest3ById);

                //UPDATE

                router.post('/update/:id',Test3Controller.updateTest3);

                //DELETE

                router.delete('/delete/:id',Test3Controller.deleteTest3);


              
              export default router;