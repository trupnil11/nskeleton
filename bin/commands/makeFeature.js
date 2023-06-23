import fs from "fs";
import chalk from "chalk";

export const command = "make:feature";
export const describe = "Create feature with sub files";

export const builder = (yargs) =>
  yargs
    .option("feature", {
      describe: "Feature name",
      demandOption: true,
      type: "string",
    })
    .option("routes", {
      describe: "Generate routes file",
      type: "boolean",
      default: true,
    })
    .option("helper", {
      describe: "Generate helper file",
      type: "boolean",
      default: true,
    })
    .option("validator", {
      describe: "Generate validator file",
      type: "boolean",
      default: true,
    })
    .option("service", {
      describe: "Generate service file",
      type: "boolean",
      default: true,
    })
    .option("controller", {
      describe: "Generate controller file",
      type: "boolean",
      default: true,
    });

export const handler = (argv) => {
  const featureName = argv.feature;
  const generateRoutes = argv.routes;
  const generateHelper = argv.helper;
  const generateValidator = argv.validator;
  const generateService = argv.service;
  const generateController = argv.controller;

  const featureFolderPath = `./app/api/${featureName}`;
  if (fs.existsSync(featureFolderPath)) {
    console.log(chalk.red(`[Error...] ${featureName} already exists.`));
  } else {
    fs.mkdirSync(featureFolderPath);
    console.log(chalk.green(`[Success...] ${featureName} folder created.`));

    if (generateRoutes) {
      fs.writeFile(
        `${featureFolderPath}/${featureName}.routes.js`,
        `import { Router } from 'express'
        const router = Router();
        
        // Define routes
        
        export default router;`,
        (err) => {
          if (err) throw err;
          console.log(
            chalk.green(`[Success...] ${featureName}.routes.js created.`)
          );
        }
      );
    }

    if (generateHelper) {
      fs.writeFile(
        `${featureFolderPath}/${featureName}.helper.js`,
        "// Helper file created",
        (err) => {
          if (err) throw err;
          console.log(
            chalk.green(`[Success...] ${featureName}.helper.js created.`)
          );
        }
      );
    }

    if (generateValidator) {
      fs.writeFile(
        `${featureFolderPath}/${featureName}.validator.js`,
        "// Validator file created",
        (err) => {
          if (err) throw err;
          console.log(
            chalk.green(`[Success...] ${featureName}.validator.js created.`)
          );
        }
      );
    }

    if (generateService) {
      fs.writeFile(
        `${featureFolderPath}/${featureName}.service.js`,
        "// Service file created",
        (err) => {
          if (err) throw err;
          console.log(
            chalk.green(`[Success...] ${featureName}.service.js created.`)
          );
        }
      );
    }

    if (generateController) {
      fs.writeFile(
        `${featureFolderPath}/${featureName}.controller.js`,
        "// Controller file created",
        (err) => {
          if (err) throw err;
          console.log(
            chalk.green(`[Success...] ${featureName}.controller.js created.`)
          );
        }
      );
    }
  }
};
