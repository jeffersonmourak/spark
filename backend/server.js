const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Welcome to backend')
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
