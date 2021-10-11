const chalk = require('chalk');

const BasicGenerator = require('../../BasicGenerator');
const question = require('../../question');

console.log(`
${chalk.bold(chalk.magenta('# 可视化大屏'))}
${chalk.magenta('# 基于 umi 搭建')}
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
