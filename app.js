import * as dotenv from "dotenv";
import express from 'express';
import path from 'path';
import cors from 'cors';
import Webroute from './routes/web.route.js';
import ApiRoute from './routes/api.route.js';
import * as mongoDbConfig from "./config/db.config.js";
import { fileURLToPath } from 'url';
import executeCommandRoute from './config/execute-command.route.js';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config();
const app = express();
if(process.env.MONGODB_URL){
   mongoDbConfig.mongoConnect();
}
var corsOption = {
	origin: "*",
};
app.use(cors(corsOption));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use('/',Webroute);
app.use('/api/',ApiRoute);
app.get('/execute-command',executeCommandRoute );  
app.listen(process.env.PORT,()=>{
    console.log(`App is listing port `+ process.env.PORT);
})