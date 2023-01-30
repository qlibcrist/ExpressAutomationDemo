const storage = require('../localStorage/storage')
const router = require('express').Router()
const bodyParser = require('body-parser')

const route = '/api/item'

router.use((req, res, next) => {
  console.log(`GET Request to '${route}' received: Time: ${Date.now()}`)
  next()
})

router.get('/api/items', (req, res) => {
  if (storage.values.length > 0) 
    console.log(`Current storage: ${storage.values.join(', ')}`)
    
  res.json([{data: storage.values}])
})

module.exports = router
