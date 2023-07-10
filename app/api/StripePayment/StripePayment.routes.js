import { Router } from "express";
          import * as StripePaymentController from "./StripePayment.controller.js"
          const router = Router();
          
          //GET ALL 

          router.get('/',StripePaymentController.getAllStripePayment);
            
            //POST

            router.post('/',StripePaymentController.createStripePayment);

            //GET BY ID

            router.get('/:id',StripePaymentController.getStripePaymentById);

            //UPDATE

            router.post('/update/:id',StripePaymentController.updateStripePayment);

            //DELETE

            router.delete('/delete/:id',StripePaymentController.deleteStripePayment);


          
          export default router;