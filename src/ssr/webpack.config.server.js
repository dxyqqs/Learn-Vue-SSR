const path = require('path')
const {merge} = require('webpack-merge')
const webpackBaseConfig = require('./webpack.config.base')
const VueSSRServerPlugin = require('vue-server-renderer/server-plugin')

module.exports = merge(webpackBaseConfig,{
  entry:{
    server:path.resolve(__dirname,'serverApp.js')
  },
  target: 'node',
  devtool: 'source-map',
  output: {
    libraryTarget: 'commonjs2'
  },
  plugins: [
    new VueSSRServerPlugin()
  ]
})