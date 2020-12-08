# Lesson 2: 构建打包环境

## SSR原理
- 首屏需要服务端渲染后输出
- 其他页面需要JS渲染输出
- 综上所述，后端页面直出，浏览器端会接管当前页，转成SPA
## SSR约束
- 服务端的数据是新的，一次性的，确定的，而不应该是响应式数据
- 服务端可用的组件的生命周期钩子，`beforeCreate` & `created`
- 通用代码，不能使用特定平台的API
- 对于自定义指令，如果操作了DOM，就需要进行可用性确认
- 避免状态单例，为每一个请求创建新的Vue根实列，避免状态的交叉污染
- 构建，为了实现“原理”中的描述，我们需要使用webpack去处理应用打包，这样可以保证Sever输出的页面、资源和Client的输出保持一致

## SSR构建
基本的配置是一样的,不一样的地方在于Server和Client两边所使用的入口文件存在差异，这一点毋庸置疑。Server输出页面时，会做很多额外的工作，例如内联相关样式，推断需要preload/prefetch的文件
使用的工具：
- webpack@4.44.2
- webpack-cli
- webpack-merge
- webpack-node-externals
- vue-loader
- vue-template-compiler
- vue-server-renderer/server-plugin

## src结构目录
```
├─server
│      server.js
│
├─ssr
│  │  App.vue                           
│  │  clientApp.js                    (客户端打包入口文件)  
│  │  entry.js
│  │  serverApp.js                    (服务端打包入口文件) 
│  │  ssrApp.js
│  │  template.html
│  │  webpack.config.base.js          (通用打包配置文件)
│  │  webpack.config.client.js        (客户端打包配置文件)
│  │  webpack.config.server.js        (服务端打包配置文件)
│  │
│  └─compoents
└─ssr_dist                            (打包生成文件)
        client.bundle.js              (客户端入口文件)
        vue-ssr-server-bundle.json    (服务端入口文件)
```

### 在`package.json`中添加script
```
"build:client": "webpack --config ./src/ssr/webpack.config.client.js"
"build:server": "webpack --config ./src/ssr/webpack.config.server.js"
"build": "npm run build:client & npm run build:server"
```
## 总结
可以看出，服务端和客户端共享了基本打包配置，为直出页面和SPA混合做好准备。
## 注意
目前对于**Vue2**，`vue-server-renderer/server-plugin`只适配**Webpack4**。如果参照官方SSR文档,那么需要注意在win中对路径以及文件名大小写不敏感，这是容易出问题的地方


