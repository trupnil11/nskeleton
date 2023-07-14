#!/usr/bin/env node

import chalk from 'chalk';
import figlet from 'figlet';
import { program } from 'commander';
import fs from 'fs';

/**
     * Command Name: nskeleton info
     * Description: information genenerate...
*/

program
  .command('info')
  .description('Information of nskeleton')
  .action(() => {
    console.log(chalk.redBright(figlet.textSync('NSKELETON', { horizontalLayout: 'full' })));
    console.log(
      chalk.cyanBright(
        '\t Made by: Trupnil Barot. \n Open-source framework specially designed for building microservices.'
      )
    );
  });

  /**
     * Command Name: nskeleton genearate env
     * Description: To generate .env file
*/

program
.command('generate env')
.description('To generate .env file')
.action(() => {
   // Source file path
   const sourcePath = "./env.example";

   // Destination file path
   const destPath = ".env";

   // Read the contents of the source file
   fs.readFile(sourcePath, (err, data) => {
     if (err) throw err;

     // Write the contents to the destination file
     fs.writeFile(destPath, data, (err) => {
       if (err) throw err;
       console.log(chalk.green(`.env file generated successfully.`));
     });
   });
 
});

/**
     * Command Name: nskeleton make:util
     * Description: Utility genenerate...
*/

program
  .command('make:util')
  .description('Utility creation command')
  .action((argv) => {
    console.log('Utility created successfully.');
  });

/**
     * Command Name: nskeleton make:test --test=testfile_name
     * Description: test file genenerate in app/test folder...
*/

  program
  .command('make:test')
  .description('Test creation command')
  .action(() => {
    console.log('Test created successfully.');
  });

  /**
     * Command Name: nskeleton make:middleware --middleware=middlewareName
     * Description: Middleware file genenerate in app/middleware folder...
*/


  program
  .command('make:middleware')
  .description('middleware creation command')
  .action((argv) => {
    console.log('middleware created successfully.');
  });

/**
     * Command Name: nskeleton make:route --route=routename
     * Description: Route file genenerate in app/routes folder...
*/


  
program
.command('make:route')
.description('Route file creation command')
.option('--route <name>', 'Name of the route')
.action((argv) => {
  if (!argv.route) {
    console.log(chalk.red('[Error...] Please provide route name'));
  } else {
    if (fs.existsSync(`routes/${argv.route}.routes.js`)) {
      console.log(chalk.red(`[Error...] ${argv.route} route already exists.`));
    } else {
      fs.writeFile(
        `./routes/${argv.route}.routes.js`,
        `//Global route file
import { Router } from 'express';
const router = Router();

router.get('', (req, res, next) => {
// Add your route logic here
});

export default router;
`,
        (err) => {
          if (err) throw err;
          console.log(chalk.green(`${argv.route} route created successfully.`));
        }
      );
    }
  }
});


/**
     * Command Name: nskeleton make:model --model=modelname
     * Description: Model file genenerate in app/models folder...
     * Database use only mongoDB
*/


program
  .command('make:model')
  .description('Model file creation command')
  .option('--db <type>', 'Database type (mongodb, sql)')
  .option('--model <name>', 'Name of the model')
  .action((argv) => {
    if (!argv.db || !argv.model) {
      console.log(chalk.red('[Error...] Please provide arguments'));
      console.log(chalk.red('Example: make:model --model=Callrecord --db=mongodb'));
    } else {
      if (argv.db === 'mongodb') {
        if (fs.existsSync(`models/${argv.model}.model.js`)) {
          console.log(chalk.red(`${argv.model} model already exists.`));
        } else {
          fs.writeFile(
            `./models/${argv.model}.model.js`,
            `import mongoose from 'mongoose';

const ${argv.model}Schema = new mongoose.Schema({
  // Define model schema
});

const ${argv.model} = mongoose.model('${argv.model}', ${argv.model}Schema);

export default ${argv.model};
`,
            (err) => {
              if (err) throw err;
              console.log(chalk.green(`${argv.model} model created successfully.`));
            }
          );
        }
      } else if (argv.db === 'sql') {
        if (fs.existsSync(`models/${argv.model}.model.js`)) {
          console.log(chalk.red(`${argv.model} model already exists.`));
        } else {
          fs.writeFile(
            `./models/${argv.model}.model.js`,
            `// Create SQL model here...
`,
            (err) => {
              if (err) throw err;
              console.log(chalk.green(`${argv.model} model created successfully.`));
            }
          );
        }
      } else {
        console.log(chalk.red('[ERROR...] Invalid database type.'));
        console.log(chalk.red('Valid options are mongodb and sql.'));
      }
    }
  });

  /**
     * Command Name: nskeleton make:helper --helper=helpername
     * Description: helper file genenerate in app/helpers folder...
*/


  
program
.command('make:helper')
.description('Global helper creation command')
.option('--helper <name>', 'Name of the helper')
.action((argv) => {
  if (!argv.helper) {
    console.log(chalk.red('[ERROR...] Please provide feature name'));
  } else {
    if (fs.existsSync(`helpers/${argv.helper}.helper.js`)) {
      console.log(chalk.red(`${argv.helper} helper already exists.`));
    } else {
      fs.writeFile(
        `./helpers/${argv.helper}.helper.js`,
        '// Helper is created successfully....',
        (err) => {
          if (err) throw err;
          console.log(chalk.green(`${argv.helper} helper created successfully.`));
        }
      );
    }
  }
});


/**
     * Command Name: nskeleton make:feature --feature=featurename
     * Description: Feature files genenerate in app/api/featurefiles
     * Route,Helper,Validation,Model,Service File genearet with code
*/



program
.command('make:feature')
.description('Global Feature creation command')
.option('--feature <name>', 'Name of the Feature')
.action((argv) => {
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
            `Controller.create` +
            argv.feature +
            `);

            //GET BY ID

            router.get('/:id',` +
            argv.feature +
            `Controller.get` +
            argv.feature +
            `ById);

            //UPDATE

            router.post('/update/:id',` +
            argv.feature +
            `Controller.update` +
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
          `import ${argv.feature}Model from "../../../models/${argv.feature}.model.js";

          export const getAll = async () => {
            try {
              const ${argv.feature} = await ${argv.feature}Model.find();
             return ${argv.feature};
            } catch (error) {
              console.log(error);
              throw new Error("Unable to get ${argv.feature}");
            }
          }
          
          export const getById = async (id) => {
            try {
             
              const ${argv.feature} = await ${argv.feature}Model.findById(id);
              return ${argv.feature};
            } catch (error) {
              console.log(error);
              throw new Error('Unable to get ${argv.feature}');
            }
          }
          
          export const create = async(data) => {
            try {
              const new${argv.feature} = await ${argv.feature}Model.create(data);
              return new${argv.feature};
            } catch (error) {
              console.log(error);
              throw new Error("Unable to create ${argv.feature}");
            }
          }
          
          export const update = async(id,data) => {
            try {
              const updated${argv.feature} = await ${argv.feature}Model.findByIdAndUpdate(id, data, { new: true });
              
              if (!updated${argv.feature}) {
                return res.status(404).json({ error: '${argv.feature} not found' });
              }
              return updated${argv.feature};
            } catch (error) {
              console.log(error);
              throw new Error("Unable to update ${argv.feature}");
            }
          }
          
          export const deleteById = async (id) => {
            try {
              const deleted${argv.feature} = await ${argv.feature}Model.findByIdAndDelete(id);
              if (!deleted${argv.feature}) {
                return res.status(404).json({ error: '${argv.feature} not found' });
              }
             return deleted${argv.feature};
            } catch (error) {
              console.log(error);
              throw new Error("Unable to delete ${argv.feature}");
            }
          }
          
          export default {
            getAll,
            getById,
            create,
            update,
            deleteById
          };
          `,
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
          `import Response from "../../../helpers/Response.helper.js";
import * as ${argv.feature}Service from "./${argv.feature}.service.js";

// get all
export const getAll${argv.feature} = async (req, res, next) => {
try {
 const ${argv.feature.toLowerCase()} = await ${
            argv.feature
          }Service.getAll();
 Response.success(res, 200, "Records Fetched Successfully",  ${argv.feature.toLowerCase()});
} catch (error) {
 next(error);
}
};

// get by id
export const get${argv.feature}ById = async (req, res, next) => {
try {
 const ${argv.feature.toLowerCase()} = await ${
            argv.feature
          }Service.getById(req.params.id);
 if (!${argv.feature.toLowerCase()}) {
   return res.status(404).json(Response.error("${argv.feature} not found"));
 }
 Response.success(res, 200, "Single Records Fetched Successfully",  ${argv.feature.toLowerCase()});
} catch (error) {
 next(error);
}
};

// create
export const create${argv.feature} = async (req, res, next) => {
try {
 const ${argv.feature.toLowerCase()} = await ${
            argv.feature
          }Service.create(req.body);
 Response.success(res, 200, "Records Creted Successfully",  ${argv.feature.toLowerCase()});
} catch (error) {
 next(error);
}
};

// update
export const update${argv.feature} = async (req, res, next) => {
try {
 const ${argv.feature.toLowerCase()} = await ${
            argv.feature
          }Service.update(req.params.id, req.body);
 if (!${argv.feature.toLowerCase()}) {
   return res.status(404).json(Response.error("${argv.feature} not found"));
 }
 Response.success(res, 200, "Records uddated Successfully",  ${argv.feature.toLowerCase()});
} catch (error) {
 next(error);
}
};

// delete
export const delete${argv.feature} = async (req, res, next) => {
try {
 const ${argv.feature.toLowerCase()} = await ${
            argv.feature
          }Service.delete(req.params.id);
 if (!${argv.feature.toLowerCase()}) {
   return res.status(404).json(Response.error("${argv.feature} not found"));
 }
 Response.success(res, 200, "Records Deleted Successfully");
} catch (error) {
 next(error);
}
};
`,
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
            export default mongoose.model("` +
            argv.feature +
            `", ` +
            argv.feature +
            `Schema, "` +
            argv.feature +
            `");`,
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
});


program.parse(process.argv);