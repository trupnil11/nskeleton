import fs from "fs";
import chalk from "chalk";

export const command = "make:route";
export const describe = "Route file create function";

export const handler = (argv) => {
  if (!argv.route) {
    console.log(chalk.red("[Error...] Please provide route name"));
  } else {
    if (fs.existsSync(`routes/${argv.route}.routes.js`)) {
      console.log(
        chalk.red(`[Error...] ${argv.route} route already exists.`)
      );
    } else {
      fs.writeFile(
        `./routes/${argv.route}.routes.js`,
        `//Global route file
        import { Router } from 'express'
        const router = Router();
        
        router.get('',function(req,res,next){
        }) 
        
        export default router;`,
        (err) => {
          if (err) throw err;
          console.log(chalk.green(`${argv.route} route created successfully.`));
        }
      );
    }
  }
};
