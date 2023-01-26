const storage = require('../localStorage/storage')
const router = require('express').Router()
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()

router.use((req, res, next) => {
  console.log(`Request received: Time: ${Date.now()}`)
  next()
})

router.get('/api/items', (req, res) => {
  console.log(`Current Storage State: ${storage.values}`)
  res.json([{data: storage.values}])
})

router.delete('/api/item', jsonParser, (req, res) => {
  const values = req.body.values
  values.forEach(element => {
    if (storage.values.includes(element))
      storage.values.pop(element)
      console.log(`Popped: ${element}`)
  });

  res.sendStatus(200)
})

module.exports = router
