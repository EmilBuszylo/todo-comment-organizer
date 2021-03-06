import path from 'path';
import minimalist from 'minimist';
import { printHelp } from './modules/helpModule';
import { printAllToDo } from './modules/printFileModule';

const args = minimalist(process.argv.slice(2), {
  boolean: ['help'],
  string: ['print', 'create-issue', 'set-config'],
  alias: {
    h: 'help',
    ci: 'create-issue',
  },
  stopEarly: true,
  unknown: getUnknowCommand,
});

function getUnknowCommand() {
  console.log('run help');
  return true;
}

const projectPath = args.print ? path.resolve(args.print) : 'src';

// function testt() {
//   console.log(args);
//   appRunner(args);
// }

// testt();

function appRunner(args: { [key: string]: boolean | string | string[] }) {
  if (args.help) {
    return printHelp();
  } else if (args.print) {
    console.log(projectPath);
    printAllToDo(projectPath);
  } else if (args['create-issue']) {
  } else if (args['set-config']) {
  } else {
    printHelp();
  }
}
appRunner(args);
// (async () => {
//   for await (const entry of readdirp(projectPath)) {
//     const { path } = entry;
//     console.log(entry);
//   }
// })()
// .catch(e => console.error(e));
