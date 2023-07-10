import { Router } from "express";
          import * as CategoriesController from "./Categories.controller.js"
          const router = Router();
          
          //GET ALL 

          router.get('/',CategoriesController.getAllCategories);
            
            //POST

            router.post('/',CategoriesController.createCategories);

            //GET BY ID

            router.get('/:id',CategoriesController.getCategoriesById);

            //UPDATE

            router.post('/update/:id',CategoriesController.updateCategories);

            //DELETE

            router.delete('/delete/:id',CategoriesController.deleteCategories);


          
          export default router;