import { Router } from "express";
          import * as CustomersController from "./Customers.controller.js"
          const router = Router();
          
          //GET ALL 

          router.get('/',CustomersController.getAllCustomers);
            
            //POST

            router.post('/',CustomersController.createCustomers);

            //GET BY ID

            router.get('/:id',CustomersController.getCustomersById);

            //UPDATE

            router.post('/update/:id',CustomersController.updateCustomers);

            //DELETE

            router.delete('/delete/:id',CustomersController.deleteCustomers);


          
          export default router;