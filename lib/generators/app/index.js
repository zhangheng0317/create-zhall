const chalk = require('chalk');

const BasicGenerator = require('../../BasicGenerator');
const question = require('../../question');

console.log(`
${chalk.bold(chalk.yellow('# 移动端应用'))}
${chalk.yellow('# 基于 zhall 搭建')}
`);

class Generator extends BasicGenerator {
  async prompting() {
    console.log(chalk.gray('# 获取配置'));
    const props = await this.prompt([question.version]);
    this.prompts = props;
    console.log();
  }
}
module.exports = Generator;
