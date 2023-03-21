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
      console.log("Model created successfully...");
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
              "//Route is created successfully....",
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
              "//controller is created successfully....",
              function (err) {
                if (err) throw err;
                console.log(
                  chalk.green(
                    argv.feature + " controller is created successfully."
                  )
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
        chalk.cyanBright("\t Made by : Trupnil barot from xcitech technologies. \n open source framwork a Specially design for build a micro services.")
      );
    },
  })
  .parse();

  //Server stat
  // yargs(hideBin(process.argv))
  // .usage("About: Light weighted open source micro framework, aspecially deisgn for build micro services")
  // .option("route", {
  //   alias: "r",
  //   describe: "nskeleton make:route --route=<route_name>",
  //   demandOption: "The width is required.",
    
  // })
  // .parse();

//Jwt authentication file setup
yargs(hideBin(process.argv))
  .command({
    command: "jwt-g",
    describe: "Generate jwt authentication middleware",
    handler: (argv) => {
      exec.exec('npm i jsonwebtoken', (err, stdout, stderr) => {  
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
            `const jwt = require('jsonwebtoken');
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
              console.log(
                chalk.green("Jwt auth is successfully generated...")
              );
            }
          );
        }

        
      });  
    },
  })
  .parse();
