#!/usr/bin/env node

const yParser = require('yargs-parser');
const run = require('../lib/run');
const version = require('../package.json').version;

const args = yParser(process.argv.slice(2), {
  alias: {
    version: ['v'],
    help: ['h'],
    type: ['t'],
  },
  boolean: ['version'],
});
console.log(args);

if (args.v || args.version) {
  console.log(`@zhall/cli ${version}`);
  process.exit(0);
}

const name = args._[0];
const type = args.t || args.type;

(async () => {
  await run({ name, type, args });
  process.exit(0);
})();
