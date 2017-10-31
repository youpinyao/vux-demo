'use strict'

const path = require('path')
const fs = require('fs')

module.exports = {
  options: {
    vuxDev: false, // true
    vuxSetBabel: false, // false
    vuxWriteFile: false,
    env: 'dev'
  },
  plugins: [
    'vux-ui', 'inline-manifest',
    {
      name: 'duplicate-style',
      envs: ['production']
    },
    {
      name: 'progress-bar',
      envs: ['development']
    },
    {
      name: 'i18n',
      vuxStaticReplace: false,
      staticReplace: false,
      extractToFiles: 'src/locales/components.yml',
      localeList: ['en', 'zh-CN']
    },
    {
      name: 'less-theme',
      path: 'src/theme.less'
    }
  ]
}

function toDash(str) {
  return str.replace(/([A-Z])/g, function(m, w) {
    return '-' + w.toLowerCase();
  }).replace('-', '')
}
