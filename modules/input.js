const storage = require('../localStorage/storage')
const router = require('express').Router()
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()

router.use((req, res, next) => {
  console.log(`Request received: Time: ${Date.now()}`)
  next()
})

router.post('/api/input', jsonParser, (req, res) => {
  console.log(req.body)
  res.send(`${res.status}`)
  console.log('Response sent')
  storage.values.push(req.body.name)
})

module.exports = router
