import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import * as fs from 'fs';
import * as path from 'path';

const commandFiles = fs.readdirSync(path.join(__dirname, 'commands'));

const argv = yargs(hideBin(process.argv))
  .commandDir('commands', { visit: loadCommand })
  .demandCommand()
  .help()
  .argv;

function loadCommand(commandModule) {
  const commandFile = commandFiles.find((file) =>
    file.toLowerCase().startsWith(commandModule)
  );

  if (!commandFile) {
    throw new Error(`Command file for "${commandModule}" not found.`);
  }

  const commandPath = path.join(__dirname, 'commands', commandFile);
  const command = require(commandPath);

  if (command.handler && typeof command.handler === 'function') {
    command.handler(argv);
  } else {
    throw new Error(`Command handler not found for "${commandModule}".`);
  }
}
