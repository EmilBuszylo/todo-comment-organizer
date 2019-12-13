import chalk from 'chalk';
import clear from 'clear';

export const printHelp = () => {
  const log = console.log;

  clear();

  log(chalk.yellow('Welcome in ToDo comments Organizer\n'));
  log(chalk.green.bold('It is your help screen\n'));
  log('\n');
  log(chalk.yellow('Command list:\n'));
  log(
    chalk.yellow(
      '`yarn dev src/index.ts {command}` - start command in developer mode\n'
    )
  );
  log(chalk.yellow('`--help`                          - print help'));
  log(
    chalk.yellow(
      '`--print DIRPATH`                 - print all files and dirs from path'
    )
  );
  log(
    chalk.yellow(
      '`--set-config`                    - print all files and dirs from path'
    )
  );
  log(
    chalk.yellow(
      '`--create-issue DIRPATH`          - print all files and dirs from path'
    )
  );
};
