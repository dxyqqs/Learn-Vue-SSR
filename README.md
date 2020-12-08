# Lesson 3: 运行 - 在Server端使用`Bundle Renderer`

## 生产
>通过使用 webpack 的自定义插件，server bundle 将生成为可传递到 bundle renderer 的特殊 JSON 文件
## 优点
> - 内置的 source map 支持（在 webpack 配置中使用 devtool: 'source-map'
> - 在开发环境甚至部署过程中热重载（通过读取更新后的 bundle，然后重新创建 renderer 实例）
> - 关键 CSS(critical CSS) 注入（在使用 *.vue 文件时）：自动内联在渲染过程中用到的组件所需的CSS。更多细节请查看 CSS 章节。
> - 使用 clientManifest 进行资源注入：自动推断出最佳的预加载(preload)和预取(prefetch)指令，以及初始渲染所需的代码分割 chunk。
## `createBundleRenderer`的使用
```
const { createBundleRenderer } = require('vue-server-renderer')
const renderer = createBundleRenderer(serverBundle, { /* 选项 */ })
renderer.renderToString(context)
```
>`serverBundle` 参数可以是以下之一：
> - 绝对路径，指向一个已经构建好的 bundle 文件（`.js` 或 `.json`）。必须以 / 开头才会被识别为文件路径。
> - 由 webpack + vue-server-renderer/server-plugin 生成的 bundle 对象。
> - JavaScript 代码字符串（不推荐）。
## 在`package.json`中添加script
```
"start":"npm run build & npm run server"
```
## 在`webpack.config.base.js`中添加新的别名
```
'@components':path.resolve(__dirname,'./components')
```
## 总结
到目前为止，我们已经能够把编写的Vue组件输出到客户端中，
但是在客户端查看源码的时候我们发现打包后的客户端文件并没有加载，
如果尝试在组件中添加事件，并没有任何作用
## 注意
`createBundleRenderer`第一个参数不能是相对路径，否则无法解析。但如果是相对路径，可以使用`reqruir`引入


