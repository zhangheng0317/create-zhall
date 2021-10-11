const chalk = require('chalk');
const execa = require('execa');
const BasicGenerator = require('../../BasicGenerator');
const question = require('../../question');
const path = require('path');
const fs = require('fs-extra');

const cloneUrl = 'https://gitee.com/zhangheng_0317/system-template';

console.log('\n');
console.log(chalk.bold(chalk.blue('PC系统管理')));
console.log(chalk.blue('基于 Ant Design Pro 搭建'));
console.log('\n');

class Generator extends BasicGenerator {
  async prompting() {
    console.log('获取配置');
    const props = await this.prompt(question.useMock);
    this.prompts = props;
  }

  async writing() {
    console.log('写入文件');
    // console.log(this.prompts);
    const projectName = this.opts.name;
    const projectPath = path.resolve(projectName);

    if (fs.existsSync(projectPath) && fs.statSync(projectPath).isDirectory() && fs.readdirSync(projectPath).length > 0) {
      console.log('\n');
      console.log('请在空文件夹中使用');
      process.exit(1);
    }

    // 克隆项目模板
    console.log('开始克隆 Ant Design Pro');
    await execa('git', ['clone', cloneUrl, '--depth=1', projectName], { stdio: 'inherit' });
    console.log('克隆完成');

    // 根据配置更改文件
  }
}

module.exports = Generator;
