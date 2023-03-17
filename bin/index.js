#!/usr/bin/env node
import yargs from "yargs/yargs";
import { hideBin } from "yargs/helpers";
import fs from "fs";
import chalk from "chalk";

const argv = yargs(hideBin(process.argv)).argv;
//Create a new route file in routes folder
yargs(hideBin(process.argv))
  .command({
    command: "make:route",
    describe: "api make module folder",
    handler: (argv) => {
      fs.writeFile(
        "./routes/" + argv.route + ".routes.js",
        "//Route is created...",
        function (err) {
          if (err) throw err;
          console.log(argv.route + " route is created successfully.");
        }
      );
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
              console.log(chalk.green(argv.helper + " helper is created successfully."));
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
                console.log(chalk.green(argv.feature + " helper is created successfully."));
              }
            );
            fs.writeFile(
              "./app/api/" + argv.feature + "/" + argv.feature + ".routes.js",
              "//Route is created successfully....",
              function (err) {
                if (err) throw err;
                console.log(chalk.green(argv.feature + " route is created successfully."));
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
                    chalk.green(argv.feature + " validator is created successfully.")
                );
              }
            );
            fs.writeFile(
              "./app/api/" + argv.feature + "/" + argv.feature + ".service.js",
              "//service is created successfully....",
              function (err) {
                if (err) throw err;
                console.log(chalk.green(argv.feature + " service is created successfully."));
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
                    chalk.green(argv.feature + " controller is created successfully.")
                );
              }
            );
          } catch (e) {
            console.error(e);
          }
          console.log(chalk.green(argv.feature + " Feature is created successfully."));
        }
      }
    },
  })
  .parse();
