const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  output:{
    path:path.resolve(__dirname,'../ssr_dist'),
    filename:'[name].bundle.js'
  },
  module:{
    rules:[
      {
        test: /\.vue$/,
        use:[
          'vue-loader'
        ]
      }
    ]
  },
  resolve:{
    alias:{
      '@':__dirname
    },
    extensions:['.js','.vue']
  },
  plugins:[
    new VueLoaderPlugin()
  ]
}