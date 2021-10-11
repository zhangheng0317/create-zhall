const chalk = require('chalk');

const name = {
  type: 'input',
  name: 'name',
  message: '项目名称',
  validate: (value) => {
    if (value) return true;
    return '请输入项目名称';
  },
};

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

// 使用mock数据
const useMock = {
  type: 'confirm',
  name: 'mock',
  message: '使用mock数据?',
  suffix: chalk.gray('(默认否)'),
  default: false,
};

// 项目需求功能
const plugins = {
  system: {},
  visualization: {
    type: 'checkbox',
    name: 'plugins',
    message: '功能组件',
    default: [],
    choices: [
      {
        name: `模拟数据 ${chalk.grey('mock')}`,
        value: 'mock',
      },
    ],
  },
  app: {
    type: 'checkbox',
    name: 'extra',
    message: '额外功能',
    default: ['amap', 'video'],
    choices: [
      {
        name: `高德地图 ${chalk.grey('amap')}`,
        value: 'amap',
      },
      {
        name: `百度地图 ${chalk.grey('bmap')}`,
        value: 'bmap',
      },
      {
        name: `相机 ${chalk.grey('camera')}`,
        value: 'camera',
      },
      {
        name: `视频 ${chalk.grey('video')}`,
        value: 'video',
      },
      {
        name: `音频 ${chalk.grey('audio')}`,
        value: 'audio',
      },
      {
        name: `PDF ${chalk.grey('PDF')}`,
        value: 'pdf',
      },
      {
        name: `可视化图表 ${chalk.grey('victory-native')}`,
        value: 'visualization',
      },
    ],
  },
};

module.exports = {
  name,
  template,
  useMock,
};
