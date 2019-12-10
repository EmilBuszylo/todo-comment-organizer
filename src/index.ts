import path from 'path';

const readdirp = require('readdirp');

const projectPath = process.argv[2] ? path.resolve(process.argv[2]) : 'src';

(async () => {
  for await (const entry of readdirp(projectPath)) {
    const { path } = entry;
    console.log(entry);
  }
})().catch(e => console.error(e));
