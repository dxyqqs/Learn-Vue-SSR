const express = require('express')

const ssr = require('../ssr/ssrApp')

const app = express()

const port = 3000

app.get('*',async (req,res)=>{
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