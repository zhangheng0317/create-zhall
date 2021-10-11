const Generator = require('yeoman-generator');
const { statSync } = require('fs');
const { basename } = require('path');
const mkdirp = require('mkdirp');

class BasicGenerator extends Generator {
  constructor(opts) {
    super(opts);
    this.opts = opts;
    this.name = basename(opts.env.cwd);
  }

  writeFiles({ context, filterFiles }) {
    console.log(JSON.stringify(context));
  }

  prompt(questions) {
    return super.prompt(questions);
  }
}

module.exports = BasicGenerator;
