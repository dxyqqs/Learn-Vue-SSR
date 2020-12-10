const path = require('path')
const {merge} = require('webpack-merge')
const webpackBaseConfig = require('./webpack.config.base')
const VueSSRClientPlugin = require('vue-server-renderer/client-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

module.exports = merge(webpackBaseConfig,{
  entry:{
    client:path.resolve(__dirname,'clientApp.js')
  },
  plugins:[
    new CleanWebpackPlugin(),
    new VueSSRClientPlugin()
  ]
})