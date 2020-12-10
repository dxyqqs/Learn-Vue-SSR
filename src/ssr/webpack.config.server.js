const path = require('path')
const nodeExternals = require('webpack-node-externals')
const {merge} = require('webpack-merge')
const webpackBaseConfig = require('./webpack.config.base')
const VueSSRServerPlugin = require('vue-server-renderer/server-plugin')

module.exports = merge(webpackBaseConfig,{
  mode:'development',
  entry:{
    server:path.resolve(__dirname,'serverApp.js')
  },
  target: 'node',
  devtool: 'source-map',
  output: {
    libraryTarget: 'commonjs2'
  },
  externals: nodeExternals({
    allowlist: /\.(css|vue)$/
  }),
  plugins: [
    new VueSSRServerPlugin()
  ]
})