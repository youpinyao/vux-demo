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
      name: 'less-theme',
      path: 'src/theme.less'
    }
  ]
}
