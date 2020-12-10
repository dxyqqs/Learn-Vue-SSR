# Lesson 5: 处理Vue中的CSS

## 前言
到目前为止，我们已经做了很多复杂的事请，但还有很多简单的事请的没做，比如CSS。但记住，虽然说的是CSS，
其实是为了说明出现问题，如何解决它。  
让我们在`Vue.app`中加入样式,并启动服务
```css
<style>
  #app{
    border:1px solid #f00
  }

</style>
```
**然而样式并没有按照预期展示出来。**
## 解决问题
- 按照官方文档，样式应当会自动注入模板文件，但是也可以手动注入，尝试一下
- 尝试以后发现方法`context.renderStyles()`返回压根是空的，可以推断，`renderStyles`出现了问题
- `renderStyles`属于Node环境代码，那我们就需要一种手段能够对node代码进行调试，我们在命令行加入以下代码，
就能够在chrome中开始断点了
```
"server": "node --inspect ./src/server/server.js"
```
- 进行断点后发现`renderStyles`来源于`server bundle`,但`server bundle`经过压缩完全不能阅读
- 请在`webpack.config.server.js`中加上以下代码
```javascript
mode:'development'
```
- 再次断点，发现以下问题,list应当是一个数组，但是实际传递的是一个对象
```
function addStyleDev (styles, list) {
...
}
```
- 最终发现list数据来源于`css-loader`,问题是`css-loader`转换的CSS对象使用了ES6 module的默认导出也就是`{default}`
- 最终推出`css-loader`的导出模式出现问题，因为版本和官方示例不同，所以基本就是版本问题。然后去`vue-style-loader`的issue
上查找一下，发现了[如下问题](https://github.com/vuejs/vue-style-loader/issues/46)

## 总结
出现问题时，要学会寻找解决问题的步骤

## 注意
这个问题花了3天时间才最终解决，凡事不要放弃。



