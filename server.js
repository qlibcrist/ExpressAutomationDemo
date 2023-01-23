const express = require('express')
const cors = require('cors')
const app = express()
const port = 4000
const checkboxes = require('./modules/Checkboxes')
const fruit = require('./modules/Fruit')

app.use(cors())

app.get('/api/checkboxes', checkboxes)
app.post('/api/fruit', fruit)

app.listen(port, () => {
  console.log(`Server listening on port localhost:${port}`)
})
