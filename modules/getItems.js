const storage = require('../localStorage/storage')
const router = require('express').Router()
const bodyParser = require('body-parser')

router.use((req, res, next) => {
  console.log(`Request received: Time: ${Date.now()}`)
  next()
})

router.get('/api/items', (req, res) => {
  console.log(`Current Storage State: ${storage.values}`)
  res.json([{data: storage.values}])
})

module.exports = router
