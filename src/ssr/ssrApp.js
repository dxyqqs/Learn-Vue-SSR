const Vue = require('vue')
const renderer = require('vue-server-renderer').createBundleRenderer(
  require('../ssr_dist/vue-ssr-server-bundle.json'),
  {
    template:require('fs').readFileSync(require('path').resolve(__dirname,'../ssr/template.html'),"utf-8"),
    clientManifest:require('../ssr_dist/vue-ssr-client-manifest.json')
  }
)

module.exports= function(url){
  return renderer.renderToString({title:new Date})
}