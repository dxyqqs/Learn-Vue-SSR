# Lesson 1: 准备环境

## 初始化
```
npm init -y
```
## 安装依赖
```
npm i express vue vue-server-renderer
```
## 开始编写第一个SSR
src结构目录
```
├─server
│      server.js
│
└─ssr
        ssrApp.js     编写服务端
        template.html HTML模板[1]
```
### 在`package.json`中添加script
```
"server": "node ./src/server/server.js"
```
## 总结
简单的来说，`vue-server-renderer`就是一个模板引擎，它会把我们所编写的vue代码转换成html
## 注意
需要注意文件的引用路径是否正确
****
[1] https://ssr.vuejs.org/zh/guide/#%E4%BD%BF%E7%94%A8%E4%B8%80%E4%B8%AA%E9%A1%B5%E9%9D%A2%E6%A8%A1%E6%9D%BF

