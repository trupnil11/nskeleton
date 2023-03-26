#!/usr/bin/env node
import yargs from "yargs/yargs";
import { hideBin } from "yargs/helpers";
import fs from "fs";
import chalk from "chalk";
import figlet from "figlet";
import { exec } from "child_process";

const argv = yargs(hideBin(process.argv)).argv;

// Define common error messages
const ERROR_NO_ARG_PROVIDED = chalk.red("[Error...] Please provide argument");
const ERROR_ARG_ALREADY_EXISTS = (arg) => chalk.red(`[Error...] ${arg} already exists`);
const ERROR_INVALID_ARG = chalk.red("[Error...] Invalid argument provided");

// Create a new route file in the routes folder
yargs(hideBin(process.argv))
  .command({
    command: "make:route <name>",
    describe: "Create a new route file in the routes folder",
    handler: (argv) => {
      const { name } = argv;
      if (!name) {
        console.log(ERROR_NO_ARG_PROVIDED);
        return;
      }
      const filePath = `./routes/${name}.routes.js`;
      if (fs.existsSync(filePath)) {
        console.log(ERROR_ARG_ALREADY_EXISTS(name));
        return;
      }
      const routeContent = `// Global route file
import { Router } from 'express';
const router = Router();
router.get('', function (req, res, next) {
});
export default router;
`;
      fs.writeFile(filePath, routeContent, function (err) {
        if (err) throw err;
        console.log(chalk.green(`${name} route created successfully.`));
      });
    },
  })
  .parse();

// Create a new helper file in the helpers folder
yargs(hideBin(process.argv))
  .command({
    command: "make:helper <name>",
    describe: "Create a new helper file in the helpers folder",
    handler: (argv) => {
      const { name } = argv;
      if (!name) {
        console.log(ERROR_NO_ARG_PROVIDED);
        return;
      }
      const filePath = `./helpers/${name}.helper.js`;
      if (fs.existsSync(filePath)) {
        console.log(ERROR_ARG_ALREADY_EXISTS(name));
        return;
      }
      const helperContent = "// Helper is created successfully....";
      fs.writeFile(filePath, helperContent, function (err) {
        if (err) throw err;
        console.log(chalk.green(`${name} helper created successfully.`));
      });
    },
  })
  .parse();

  
// Models creation command
yargs(hideBin(process.argv))
.command({
  command: "make:model",
  describe: "Models creation command",
  handler: (argv) => {
    switch (true) {
      case !argv.db || !argv.model:
        console.log(ERROR_NO_ARG_PROVIDED);
        console.log(chalk.red("example make:model --model=Callrecord --db=mongodb"));
        break;
      case argv.db === "mongodb":
        if (fs.existsSync(`models/${argv.model}.model.js`)) {
          console.log(ERROR_ARG_ALREADY_EXISTS(argv.model));
        } else {
          fs.writeFile(
            `./models/${argv.model}.model.js`,
            `import mongoose from "mongoose"
             var Schema = mongoose.Schema;
             const ${argv.model}Schema  = new Schema({})
             module.exports = mongoose.model('${argv.model}', ${argv.model}Schema)`,
            function (err) {
              if (err) throw err;
              console.log(chalk.green(`${argv.model} model is created successfully.`));
            }
          );
        }
        break;
      case argv.db === "sql":
        console.log(chalk.bgYellow.bold("WE ARE WORKING ON SQL MODULE !! "));
        break;
      default:
        console.log(ERROR_INVALID_ARG);
        break;
    }
  },
})
.parse();
