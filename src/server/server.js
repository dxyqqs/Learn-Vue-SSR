const express = require('express')
const ssr = require('../ssr/ssrApp')
const path = require('path')
const app = express()
const port = 3000

app.use('/static',express.static(path.resolve(__dirname, '../ssr_dist/static')))

app.get('*',async (req,res)=>{
  console.warn(req.url)
  try {
    const html = await ssr(req.url)
    res.send(html)
  } catch (error) {
    res.status(500).send(error.message)
  }
})


app.listen(port,()=>{
  console.log(`http://localhost:${port}`)
})