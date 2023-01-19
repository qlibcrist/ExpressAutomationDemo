const express = require('express')
var cors = require('cors')
const app = express()
const port = 4000
const checkboxes = require('./modules/Checkboxes')

app.use(cors())

app.get('/api/checkboxes', checkboxes)

app.listen(port, () => {
  console.log(`Server listening on port localhost:${port}`)
})
