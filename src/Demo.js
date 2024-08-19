import express from 'express'
const app = express()

app.get('/', function (req, res) {
  res.send(Math.random().toString)
})

app.listen(4000)