import * as dotenv from "dotenv";
import express from 'express';
import path from 'path';
import cors from 'cors';
import Webroute from './routes/web.route.js';
import ApiRoute from './routes/api.route.js';
import * as mongoDbConfig from "./config/db.config.js";
import { fileURLToPath } from 'url';
import { exec } from 'child_process';
import { program } from 'commander';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config();
const app = express();
// MongoDB initiating Connection
if(process.env.MONGODB_URL){
   mongoDbConfig.mongoConnect();
}

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
app.use('/api/',ApiRoute);
//For testing only
// Handle the '/execute-command' route
app.get('/execute-command', (req, res) => {
  const name = req.query.value;
  const type = req.query.type;
  let program;

  if (type === 'model') {
    program = `nskeleton make:${type} --${type}=${name} --db=mongodb`;
  }else if(type === 'feature'){
    program = `nskeleton make:${type} --${type}=${name}`;
  } 
  else {
    program = `nskeleton make:${type} --${type}=${name}`;
  }

  console.log(program);

  exec(program, (error, stdout, stderr) => {
    if (error) {
      console.error('Error executing command:', error);
      res.status(500).json({ error: 'Error executing command' });
    } else {
      console.log('Command executed successfully:', stdout);
      res.json({ message: 'Command executed successfully', output: stdout });
    }
  });
});  
app.listen(process.env.PORT,()=>{
    console.log(`App is listing port `+ process.env.PORT);
})