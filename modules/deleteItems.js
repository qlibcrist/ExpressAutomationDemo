const storage = require('../localStorage/storage')
const router = require('express').Router()
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()

const route = '/api/item'

router.use((req, res, next) => {
  console.log(`DELETE Request to '${route}' received: Time: ${Date.now()}`)
  next()
})

router.delete(route, jsonParser, (req, res) => {
  const newValues = []
  
  storage.values.forEach(element => {
    if (req.body.values.includes(element)) {
      console.log(`Popping: ${element}`)
    } else {
      newValues.push(element)
    }
  });

  storage.values = newValues

  console.log(`Current storage: ${storage.values.join(', ')}`)

  res.sendStatus(200)
})

module.exports = router
