import { Router } from "express";
          import * as ProductsController from "./Products.controller.js"
          const router = Router();
          
          //GET ALL 

          router.get('/',ProductsController.getAllProducts);
            
            //POST

            router.post('/',ProductsController.createProducts);

            //GET BY ID

            router.get('/:id',ProductsController.getProductsById);

            //UPDATE

            router.post('/update/:id',ProductsController.updateProducts);

            //DELETE

            router.delete('/delete/:id',ProductsController.deleteProducts);


          
          export default router;