const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
module.exports = {
  output:{
    publicPath:'/',
    path:path.resolve(__dirname,'../ssr_dist'),
    filename:'static/[name].bundle.js'
  },
  module:{
    rules:[
      {
        test: /\.vue$/,
        use:[
          'vue-loader'
        ]
      },
      {
        test: /\.css$/,
        use:[
          'vue-style-loader',
          {
            loader: 'css-loader',
            options: {
              esModule:false
            }
          }
        ]
      }
    ]
  },
  resolve:{
    alias:{
      '@':__dirname,
      '@components':path.resolve(__dirname,'./components'),

    },
    extensions:['.js','.vue']
  },
  plugins:[
    new VueLoaderPlugin()
  ]
}