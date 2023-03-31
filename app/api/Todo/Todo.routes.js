import { Router } from "express";
              import * as TodoController from "./Todo.controller.js"
              const router = Router();
              
              //GET ALL 

              router.get('/',TodoController.getAllTodo);
                
                //POST

                router.post('/',TodoController.createTodo);

                //GET BY ID

                router.get('/:id',TodoController.getTodoById);

                //UPDATE

                router.post('/update/:id',TodoController.updateTodo);

                //DELETE

                router.delete('/delete/:id',TodoController.deleteTodo);


              
              export default router;