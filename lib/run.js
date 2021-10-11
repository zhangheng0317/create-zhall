const fs = require('fs');
const path = require('path');
const chalk = require('chalk');
const mkdirp = require('mkdirp');
const inquirer = require('inquirer');
const question = require('./question');
const yeoman = require('yeoman-environment');

const runGenerator = async (generatorPath, { name = '', cwd = process.cwd(), args = {} }) => {
  return new Promise((resolve) => {
    if (name) {
      mkdirp.sync(name);
      cwd = path.join(cwd, name);
    }

    const env = yeoman.createEnv([], { cwd });

    const Generator = require(generatorPath);

    const generator = new Generator({
      name,
      env,
      resolved: require.resolve(generatorPath),
      args,
    });

    return generator.run(() => {
      if (name) {
        if (process.platform !== `linux` || process.env.DISPLAY) {
          // clipboardy.writeSync(`cd ${name}`);
          console.log('📋 Copied to clipboard, just use Ctrl+V');
        }
      }
      console.log('✨ File Generate Done');
      resolve(true);
    });
  });
};

const run = async (config) => {
  // console.log(config);
  let { name, template, args } = config;

  console.log(chalk.green('这里是欢迎语,以后补充'));

  if (!name) {
    const answers = await inquirer.prompt(question.name);
    name = answers.name;
  }

  if (!template) {
    const answers = await inquirer.prompt(question.template);
    template = answers.template;
  }

  try {
    return runGenerator(`./generators/${template}`, config);
  } catch (e) {
    console.error(chalk.red(`> Generate failed`), e);
    process.exit(1);
  }
};
module.exports = run;
