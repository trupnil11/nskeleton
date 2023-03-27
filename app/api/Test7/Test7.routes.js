import { Router } from "express";
              import * as Test7Controller from "./Test7.controller.js"
              const router = Router();
              
              //GET ALL 

              router.get('/',Test7Controller.getAllTest7);
                
                //POST

                router.post('/',Test7Controller.createTest7);

                //GET BY ID

                router.get('/:id',Test7Controller.getTest7ById);

                //UPDATE

                router.post('/update/:id',Test7Controller.updateTest7);

                //DELETE

                router.delete('/delete/:id',Test7Controller.deleteTest7);


              
              export default router;