const path = require('path')
const {merge} = require('webpack-merge')
const webpackBaseConfig = require('./webpack.config.base')

module.exports = merge(webpackBaseConfig,{
  entry:{
    client:path.resolve(__dirname,'clientApp.js')
  }
})