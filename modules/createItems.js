const storage = require('../localStorage/storage')
const router = require('express').Router()
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()

const route = '/api/item'

router.use((req, res, next) => {
  console.log(`POST Request to '${route}' received: Time: ${Date.now()}`)
  next()
})

router.post(route, jsonParser, (req, res) => {
  if (req.body.name === '' || req.body.name === null || !req.body.name) {
    res.sendStatus(400)
    return
  }

  console.log(`Pushing: ${req.body.name}`)
  storage.values = storage.values.concat([req.body.name])
  console.log(`Current storage: ${storage.values.join(', ')}`)
  res.sendStatus(200)
})

module.exports = router
