const express = require('express')
const cors = require('cors')
const app = express()
const port = 4000
const createItems = require('./modules/createItems')
const getItems = require('./modules/getItems')
const deleteItems = require('./modules/deleteItems')

app.use(cors())

app.get('/api/items', getItems)
app.post('/api/item', createItems)
app.delete('/api/item', deleteItems)

app.listen(port, () => {
  console.log(`Server listening on port localhost:${port}`)
})
