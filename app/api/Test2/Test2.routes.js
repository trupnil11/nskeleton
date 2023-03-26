import { Router } from "express";
              import * as Test2Controller from "./Test2.controller.js"
              const router = Router();
              
              //GET ALL 

              router.get('/',Test2Controller.getAllTest2);
                
                //POST

                router.post('/',Test2Controller.createTest2);

                //GET BY ID

                router.get('/:id',Test2Controller.getTest2ById);

                //UPDATE

                router.post('/update/:id',Test2Controller.updateTest2);

                //DELETE

                router.delete('/delete/:id',Test2Controller.deleteTest2);


              
              export default router;