const Vue = require('vue')
const renderer = require('vue-server-renderer').createRenderer({
  template:require('fs').readFileSync(require('path').resolve(__dirname,'../ssr/template.html'),"utf-8")
})

const creatApp = ()=>{
  return new Vue({
    data:{
      url:''
    },
    template:'<h1>{{url}}</h1>'
  })
}

module.exports= function(url){
  const app = creatApp()
  app.$data.url = url
  return renderer.renderToString(app,{title:new Date})
}