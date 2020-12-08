# Lesson 3: 与客户端集成

## 问题
客户端只输出了服务端的内容，打包好的静态资源并没有加载。我们需要告诉服务端需要加载哪些资源
## `clientManifest`
> - 在生成的文件名中有哈希时，可以取代 html-webpack-plugin 来注入正确的资源 URL。
> - 在通过 webpack 的按需代码分割特性渲染 bundle 时，我们可以确保对 chunk 进行最优化的资源预加载/数据预取，并且还可以将所需的异步 chunk 智能地注入为 `<script>` 标签，以避免客户端的瀑布式请求 (waterfall request)，以及改善可交互时间 (TTI - time-to-interactive)。

`webpack.config.client`
```
const VueSSRClientPlugin = require('vue-server-renderer/client-plugin')

plugins: [
  new VueSSRClientPlugin()
]
```
## 总结
`vue-server-renderer/client-plugin`和`vue-server-renderer/server-plugin`配合使用，
让服务端知道如何处理Vue编写的组件同时知道了需要向浏览器推送哪些静态资源文件。现在，再次访问页面的时候，页面已经能够正确的响应事件。

## 注意
需要设置`express`的**静态资源路径**，否则无法访问打包后的静态资源文件。具体设置方法请[参考这里](http://expressjs.com/en/starter/static-files.html)
需要设置`webpack`的`publicPath`,确保静态资源是相对与`host`加载而非当前的访问路径


