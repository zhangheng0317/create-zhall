const chalk = require('chalk');
const execa = require('execa');
const path = require('path');
const fs = require('fs-extra');
const prettier = require('prettier');

const BasicGenerator = require('../../BasicGenerator');
const question = require('../../question');

const cloneUrl = 'https://gitee.com/zhangheng_0317/system-template';

console.log(`
${chalk.bold(chalk.blue('# PC系统管理'))}
${chalk.blue('# 基于 Ant Design Pro 搭建')}
`);

class Generator extends BasicGenerator {
  async prompting() {
    console.log(chalk.gray('# 获取配置'));
    const props = await this.prompt([question.version, question.mock]);
    this.prompts = props;
    console.log();
  }

  async writing() {
    const projectName = this.opts.name;
    const projectPath = path.resolve(projectName);

    // 克隆项目模板
    console.log(chalk.gray('# 克隆文件'));
    if (fs.existsSync(projectPath) && fs.statSync(projectPath).isDirectory() && fs.readdirSync(projectPath).length > 0) {
      console.log(chalk.red('! 写入失败! 请在空文件夹中使用'));
      process.exit(1);
    }
    await execa('git', ['clone', cloneUrl, '--depth=1', projectName], { stdio: 'ignore' });
    console.log(chalk.green('√ 克隆完成'), '\n');

    // 重写 package.json
    console.log(chalk.gray('# 写入配置'));
    const pkg = require(path.resolve(projectPath, 'package.json'));
    const projectPkg = {
      ...pkg,
      name: projectName,
      version: this.prompts.version,
      description: '',
    };
    delete projectPkg['create-zhall'];
    fs.writeFileSync(
      path.resolve(projectPath, 'package.json'),
      prettier.format(JSON.stringify(projectPkg), {
        parser: 'json',
      })
    );
    console.log(chalk.green('√ 配置完成'), '\n');

    // 清理无用文件
    console.log(chalk.gray('# 清理无用文件'));
    const ignoreFiles = pkg['create-zhall'].ignore;
    ignoreFiles.forEach((filePath) => {
      const targetPath = path.resolve(projectPath, filePath);
      fs.removeSync(targetPath);
    });
    console.log(chalk.green('√ 清理完成'), '\n');
  }
}

module.exports = Generator;
