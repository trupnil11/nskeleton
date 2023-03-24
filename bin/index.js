#!/usr/bin/env node
import yargs from "yargs/yargs";
import { hideBin } from "yargs/helpers";
import fs from "fs";
import chalk from "chalk";
import figlet from "figlet";
import exec from "child_process";

const argv = yargs(hideBin(process.argv)).argv;
//Create a new route file in routes folder
yargs(hideBin(process.argv))
  .command({
    command: "make:route",
    describe: "Route file creat function",
    handler: (argv) => {
      if (!argv.route) {
        console.log(chalk.red("[Error...] Please provide route name"));
      } else {
        if (fs.existsSync("routes/" + argv.route + ".routes.js")) {
          console.log(
            chalk.red("[Error...]" + argv.route + " route is already exist.")
          );
        } else {
          fs.writeFile(
            "./routes/" + argv.route + ".routes.js",
            `//Global route file
            import { Router } from 'express'
const router = Router();
router.get('',function(req,res,next){
}) 
export default router;`,
            function (err) {
              if (err) throw err;
              console.log(
                chalk.green(argv.route + " route created successfully.")
              );
            }
          );
        }
      }
    },
  })
  .parse();
//Helper creation command
yargs(hideBin(process.argv))
  .command({
    command: "make:helper",
    describe: "global helper creation command",
    handler: (argv) => {
      if (!argv.helper) {
        console.log(chalk.red("[ERROR...] please provide feature name"));
      } else {
        if (fs.existsSync("helpers/" + argv.helper + ".helper.js")) {
          console.log(argv.helper + " helper is already exist.");
        } else {
          fs.writeFile(
            "./helpers/" + argv.helper + ".helper.js",
            "//Helper is created successfully....",
            function (err) {
              if (err) throw err;
              console.log(
                chalk.green(argv.helper + " helper is created successfully.")
              );
            }
          );
        }
      }
    },
  })
  .parse();

//Models creation commnad
yargs(hideBin(process.argv))
  .command({
    command: "make:model",
    describe: "Models creation command",
    handler: (argv) => {
      if (!argv.db || !argv.model) {
        console.log(chalk.red("[Error...] Please provide arguments"));
        console.log(
          chalk.red("example make:model --model=Callrecord --db=mongodb")
        );
      } else {
        if (argv.db == "mongodb") {
          if (fs.existsSync("models/" + argv.model + ".model.js")) {
            console.log(argv.model + " model is already exist.");
          } else {
            fs.writeFile(
              "./models/" + argv.model + ".model.js",
              `import mongoose from "mongoose"
               var Schema = mongoose.Schema;
               const ` +
                argv.model +
                `Schema  = new Schema({})
               module.exports = mongoose.model('` +
                argv.model +
                `', ` +
                argv.model +
                `Schema)`,
              function (err) {
                if (err) throw err;
                console.log(
                  chalk.green(argv.model + " model is created successfully.")
                );
              }
            );
          }
        } else if (argv.db == "sql") {
          console.log(chalk.bgYellow.bold("WE ARE WORKING ON SQL MODULE !! "));
        }
      }
    },
  })
  .parse();

//Middle warecreation commnad
yargs(hideBin(process.argv))
  .command({
    command: "make:middleware",
    describe: "middleware creation command",
    handler: (argv) => {
      console.log("middleware created successfully...");
    },
  })
  .parse();
//Utils creation command
yargs(hideBin(process.argv))
  .command({
    command: "make:util",
    describe: "util creation command",
    handler: (argv) => {
      console.log("util created successfully...");
    },
  })
  .parse();

//Utils creation command
yargs(hideBin(process.argv))
  .command({
    command: "make:test",
    describe: "test file creation command",
    handler: (argv) => {
      console.log("Test file created successfully...");
    },
  })
  .parse();

//Feature creation command
yargs(hideBin(process.argv))
  .command({
    command: "make:feature",
    describe: "Feature files creation command",
    handler: (argv) => {
      if (!argv.feature) {
        console.log(chalk.red("[Error...] Please provide feature name"));
      } else {
        if (fs.existsSync("app/api/" + argv.feature)) {
          console.log(chalk.red("[ERROR...] Feature is already exist"));
        } else {
          let folderPath = "app/api/";
          try {
            fs.mkdirSync(folderPath + argv.feature);
            fs.writeFile(
              "./app/api/" + argv.feature + "/" + argv.feature + ".helper.js",
              "//Helper is created successfully....",
              function (err) {
                if (err) throw err;
                console.log(
                  chalk.green(argv.feature + " helper is created successfully.")
                );
              }
            );
            fs.writeFile(
              "./app/api/" + argv.feature + "/" + argv.feature + ".routes.js",

              `import { Router } from "express";
              import * as ` +
                argv.feature +
                `Controller from "./` +
                argv.feature +
                `.controller.js"
              const router = Router();
              
              //GET ALL 

              router.get('/',` +
                argv.feature +
                `Controller.getAll` +
                argv.feature +
                `);
                
                //POST

                router.post('/',` +
                argv.feature +
                `Controller.Add` +
                argv.feature +
                `);

                //GET BY ID

                router.get('/:id',` +
                argv.feature +
                `Controller.` +
                argv.feature +
                `ById);

                //UPDATE

                router.post('/update/:id',` +
                argv.feature +
                `Controller.Update` +
                argv.feature +
                `);

                //DELETE

                router.delete('/delete/:id',` +
                argv.feature +
                `Controller.delete` +
                argv.feature +
                `);


              
              export default router;`,
              function (err) {
                if (err) throw err;
                console.log(
                  chalk.green(argv.feature + " route is created successfully.")
                );
              }
            );
            fs.writeFile(
              "./app/api/" +
                argv.feature +
                "/" +
                argv.feature +
                ".validator.js",
              "//validator is created successfully....",
              function (err) {
                if (err) throw err;
                console.log(
                  chalk.green(
                    argv.feature + " validator is created successfully."
                  )
                );
              }
            );
            fs.writeFile(
              "./app/api/" + argv.feature + "/" + argv.feature + ".service.js",
              "//service is created successfully....",
              function (err) {
                if (err) throw err;
                console.log(
                  chalk.green(
                    argv.feature + " service is created successfully."
                  )
                );
              }
            );
            fs.writeFile(
              "./app/api/" +
                argv.feature +
                "/" +
                argv.feature +
                ".controller.js",
              `import `+argv.feature+` from "../../../models/` +
                argv.feature +
                `.model.js";
              //import Response from "../helpers/Response.helper.js" 
              
              //get all
              
              export const getAll` +
                argv.feature +
                ` = (req,res,next) => {
                console.log("` +
                argv.feature +
                ` get all called");
              }
             
              //Add 
             
              export const Add` +
                argv.feature +
                ` = (req,res,next) => {

              }
             
              //Update
             
              export const Update` +
                argv.feature +
                ` = (req,res,next) => {
                
              }
             
              //Get by id
             
              export const ` +
                argv.feature +
                `ById = (req,res,next) => {
                
              }

              //Delete
              
              export const delete` +
                argv.feature +
                ` = (req,res,next) => {
                
              }`,
              function (err) {
                if (err) throw err;
                console.log(
                  chalk.green(
                    argv.feature + " controller is created successfully."
                  )
                );
              }
            );
            fs.writeFile(
              "./models/" + argv.feature + ".model.js",
              `import mongoose from 'mongoose';
              var Schema = mongoose.Schema;
              const ` +
                argv.feature +
                `Schema  = new Schema({})
                export default mongoose.model("`+argv.feature+`", `+argv.feature+`Schema, "`+argv.feature+`");`,
              function (err) {
                if (err) throw err;
                console.log(
                  chalk.green(argv.feature + " model is created successfully.")
                );
              }
            );
          } catch (e) {
            console.error(e);
          }
          console.log(
            chalk.green(argv.feature + " Feature is created successfully.")
          );
        }
      }
    },
  })
  .parse();

//Utils creation command
yargs(hideBin(process.argv))
  .command({
    command: "info",
    describe: "Information of nskeleton",
    handler: (argv) => {
      console.log(
        chalk.redBright(
          figlet.textSync("NSKELETON", { horizontalLayout: "full" })
        )
      );
      console.log(
        chalk.cyanBright(
          "\t Made by : Trupnil barot from xcitech technologies. \n open source framwork a Specially design for build a micro services."
        )
      );
    },
  })
  .parse();
  
  //Jwt authentication file setup
yargs(hideBin(process.argv))
  .command({
    command: "jwt-g",
    describe: "Generate jwt authentication middleware",
    handler: (argv) => {
      exec.exec("npm i jsonwebtoken", (err, stdout, stderr) => {
        if (err) {
          console.error(err);
          return;
        }
        console.log(stdout);
        if (fs.existsSync("middlewares/jwt-auth.middleware.js")) {
          console.log(chalk.red("[Error...] jwt middleware is already exist"));
        } else {
          fs.writeFile(
            "./middlewares/jwt-auth.middleware.js",
            `import jwt from "jsonwebtoken"
            exports.tokenVerify = function(req,res,next){
               try{
                    let secretKey = process.env.JWT_SECRET_KEY;
                    let token =req.headers['authorization'].split(' ')[1] //Remove for Bearer word
                    if(token){
                        if(jwt.verify(token,secretKey)){
                           next();
                        }else{
                            res.status(401).json({auth:false,"message":"Unauthorised token"})
                        }
                    }
                    else
                    {
                      throw new Error({"message":"Unauthorised token"});
                    }
                }
                catch(e){
                    res.status(401).json({auth:false,"message":"Unauthorised token"})
                }
            }
            `,
            function (err) {
              if (err) throw err;
              console.log(chalk.green("Jwt auth is generated successfully..."));
            }
          );
        }
      });
    },
  })
  .parse();

//Generate env 
yargs(hideBin(process.argv))
  .command({
    command: "generate env",
    describe: "Generate ENV file",
    handler: (argv) => {
     // Source file path
       const sourcePath = './env.example';

// Destination file path
const destPath = '.env';

// Read the contents of the source file
fs.readFile(sourcePath, (err, data) => {
  if (err) throw err;
  
  // Write the contents to the destination file
  fs.writeFile(destPath, data, (err) => {
    if (err) throw err;
    console.log('File copied successfully!');
  });
});
      
    },
  })
  .parse();