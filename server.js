const express = require('express')
const cors = require('cors')
const app = express()
const port = 4000
const checkboxes = require('./modules/checkboxes')
const input = require('./modules/input')

app.use(cors())

app.get('/api/checkboxes', checkboxes)
app.post('/api/input', input)

app.listen(port, () => {
  console.log(`Server listening on port localhost:${port}`)
})
