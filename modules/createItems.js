const storage = require('../localStorage/storage')
const router = require('express').Router()
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()

router.use((req, res, next) => {
  console.log(`Request received: Time: ${Date.now()}`)
  next()
})

router.post('/api/item', jsonParser, (req, res) => {
  console.log(req.body)
  res.sendStatus(200)
  storage.values.push(req.body.name)
})

module.exports = router
