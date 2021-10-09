#!/usr/bin/env node

const yParser = require('yargs-parser');

const args = yParser(process.argv.slice(2), {
  alias: {
    version: ['v'],
    help: ['h'],
  },
  boolean: ['version'],
});
console.log(args);
