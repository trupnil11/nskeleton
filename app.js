import * as dotenv from "dotenv";
import express from 'express';
import path from 'path';
import cors from 'cors';
import Webroute from './routes/web.route.js';
import * as mongoDbConfig from "./config/db.config.js";

import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config();
const app = express();
// MongoDB initiating Connection
mongoDbConfig.mongoConnect();
// CORS Middleware
var corsOption = {
	origin: "*",
};
app.use(cors(corsOption));
// Request Payload Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// simple route for API
// Set EJS as templating engine
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use('/',Webroute);
app.listen(process.env.PORT,()=>{
    console.log(`App is listing `+ process.env.PORT);
})