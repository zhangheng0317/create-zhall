const chalk = require('chalk');

const template = {
  type: 'list',
  name: 'template',
  message: '请选择项目模板',
  choices: [
    {
      name: `PC系统管理 ${chalk.grey('基于 Ant Design Pro 搭建的系统管理')}`,
      value: 'system',
    },
    {
      name: `可视化大屏 ${chalk.grey('基于 umi 搭建的可视化数据展示大屏')}`,
      value: 'visualization',
    },
    {
      name: `移动端应用 ${chalk.grey('基于 React Native 搭建的移动端App')}`,
      value: 'app',
    },
  ],
};

const name = {
  type: 'input',
  name: 'name',
  message: '项目名称',
  validate: (value) => {
    if (value) return true;
    return '请输入项目名称';
  },
};

const version = {
  type: 'input',
  name: 'version',
  message: '版本号',
  default: '1.0.0',
};

// 使用mock数据
const mock = {
  type: 'confirm',
  name: 'mock',
  message: '使用mock数据?',
  suffix: chalk.gray('(默认否)'),
  default: false,
};

module.exports = {
  name,
  version,
  template,
  mock,
};
