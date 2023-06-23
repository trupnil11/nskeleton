#!/usr/bin/env node
import yargs from "yargs/yargs";
import { hideBin } from "yargs/helpers";
import fs from "fs";
import chalk from "chalk";
import figlet from "figlet";
import exec from "child_process";

const argv = yargs(hideBin(process.argv)).argv;

yargs(hideBin(process.argv)).commandDir("commands").parse();

yargs(hideBin(process.argv))
  .command({
    command: "info",
    describe: "Information of nskeleton",
    handler: () => {
      console.log(
        chalk.redBright(
          figlet.textSync("NSKELETON", { horizontalLayout: "full" })
        )
      );
      console.log(
        chalk.cyanBright(
          "\t Made by: Trupnil barot from xcitech technologies. \n Open-source framework specially designed for building microservices."
        )
      );
    },
  })
  .parse();
