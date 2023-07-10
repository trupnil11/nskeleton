import { Router } from "express";
          import * as BlogController from "./Blog.controller.js"
          const router = Router();
          
          //GET ALL 

          router.get('/',BlogController.getAllBlog);
            
            //POST

            router.post('/',BlogController.createBlog);

            //GET BY ID

            router.get('/:id',BlogController.getBlogById);

            //UPDATE

            router.post('/update/:id',BlogController.updateBlog);

            //DELETE

            router.delete('/delete/:id',BlogController.deleteBlog);


          
          export default router;