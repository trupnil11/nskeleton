import fs from "fs";
import chalk from "chalk";

export const command = "make:helper";
export const describe = "Global helper creation command";

export const handler = (argv) => {
  if (!argv.helper) {
    console.log(chalk.red("[ERROR...] please provide feature name"));
  } else {
    if (fs.existsSync(`helpers/${argv.helper}.helper.js`)) {
      console.log(`${argv.helper} helper is already exist.`);
    } else {
      fs.writeFile(
        `./helpers/${argv.helper}.helper.js`,
        "//Helper is created successfully....",
        (err) => {
          if (err) throw err;
          console.log(
            chalk.green(`${argv.helper} helper is created successfully.`)
          );
        }
      );
    }
  }
};
