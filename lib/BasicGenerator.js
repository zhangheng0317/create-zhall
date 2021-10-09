const Generator = require('yeoman-generator');
// const glob = require('glob');
const { statSync } = require('fs');
const { basename } = require('path');
const mkdirp = require('mkdirp');

class BasicGenerator extends Generator {
  constructor(opts) {
    super(opts);
    this.opts = opts;
    this.name = basename(opts.env.cwd);
  }

  initializing() {
    this.props = {};
  }

  prompting(){
    
  }

}

module.exports = BasicGenerator;
