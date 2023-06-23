import fs from "fs";
import chalk from "chalk";

export const command = "make:model";
export const describe = "Models creation command";

export const handler = (argv) => {
  if (!argv.db || !argv.model) {
    console.log(chalk.red("[Error...] Please provide arguments"));
    console.log(
      chalk.red("example make:model --model=Callrecord --db=mongodb")
    );
  } else {
    if (argv.db === "mongodb") {
      if (fs.existsSync(`models/${argv.model}.model.js`)) {
        console.log(`${argv.model} model is already exist.`);
      } else {
        fs.writeFile(
          `./models/${argv.model}.model.js`,
          `import mongoose from 'mongoose';

          const ${argv.model}Schema = new mongoose.Schema({
            //Define model schema
          });
          
          const ${argv.model} = mongoose.model('${argv.model}', ${argv.model}Schema);
          
          export default ${argv.model};`,
          (err) => {
            if (err) throw err;
            console.log(
              chalk.green(`${argv.model} model is created successfully.`)
            );
          }
        );
      }
    } else if (argv.db === "sql") {
      if (fs.existsSync(`models/${argv.model}.model.js`)) {
        console.log(`${argv.model} model is already exist.`);
      } else {
        fs.writeFile(
          `./models/${argv.model}.model.js`,
          `//Create SQL model here...`,
          (err) => {
            if (err) throw err;
            console.log(
              chalk.green(`${argv.model} model is created successfully.`)
            );
          }
        );
      }
    } else {
      console.log(chalk.red("[ERROR...] Invalid database type."));
      console.log(chalk.red("Valid options are mongodb and sql."));
    }
  }
};
