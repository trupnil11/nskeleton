#!/usr/bin/env node
import chalk from 'chalk';
import figlet from 'figlet';
import { program } from 'commander';

program
  .command('info')
  .description('Information of nskeleton')
  .action(() => {
    console.log(chalk.redBright(figlet.textSync('NSKELETON', { horizontalLayout: 'full' })));
    console.log(
      chalk.cyanBright(
        '\t Made by: Trupnil barot from xcitech technologies. \n Open-source framework specially designed for building microservices.'
      )
    );
  });

program.parse(process.argv);
