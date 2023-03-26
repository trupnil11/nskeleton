import { Router } from "express";
              import * as Test5Controller from "./Test5.controller.js"
              const router = Router();
              
              //GET ALL 

              router.get('/',Test5Controller.getAllTest5);
                
                //POST

                router.post('/',Test5Controller.createTest5);

                //GET BY ID

                router.get('/:id',Test5Controller.getTest5ById);

                //UPDATE

                router.post('/update/:id',Test5Controller.updateTest5);

                //DELETE

                router.delete('/delete/:id',Test5Controller.deleteTest5);


              
              export default router;