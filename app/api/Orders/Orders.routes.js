import { Router } from "express";
          import * as OrdersController from "./Orders.controller.js"
          const router = Router();
          
          //GET ALL 

          router.get('/',OrdersController.getAllOrders);
            
            //POST

            router.post('/',OrdersController.createOrders);

            //GET BY ID

            router.get('/:id',OrdersController.getOrdersById);

            //UPDATE

            router.post('/update/:id',OrdersController.updateOrders);

            //DELETE

            router.delete('/delete/:id',OrdersController.deleteOrders);


          
          export default router;