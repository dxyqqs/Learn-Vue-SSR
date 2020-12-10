const path = require('path')
const {createBundleRenderer} = require('vue-server-renderer')

module.exports= function(url){
  const renderer = createBundleRenderer(
    require('../ssr_dist/vue-ssr-server-bundle.json'),
    {
      template:require('fs').readFileSync(path.resolve(__dirname,'../ssr/template.html'),"utf-8"),
      clientManifest:require('../ssr_dist/vue-ssr-client-manifest.json'),
      runInNewContext: false
    }
  )
  const context = {title:url}
  return renderer.renderToString(context)
}