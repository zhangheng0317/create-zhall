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
      console.log(chalk.bold(chalk.green('√ 项目创建完成'), '\n'));
      console.log(chalk.gray('# 运行以下命令来安装依赖'));
      console.log(`cd ${name}`);
      console.log(`yarn`, chalk.gray('or'), `npm i`);
      console.log('\n');
      resolve(true);
    });
  });
};

const run = async (config) => {
  let { name, template, args } = config;

  console.log(chalk.green('这里是欢迎语,以后补充', '\n'));

  if (!name) {
    const answers = await inquirer.prompt(question.name);
    name = answers.name;
  }

  if (!template) {
    const answers = await inquirer.prompt(question.template);
    template = answers.template;
  }

  try {
    return runGenerator(`./generators/${template}`, { name, args });
  } catch (e) {
    console.error(chalk.red(`! Generate failed`), e);
    process.exit(1);
  }
};
module.exports = run;
