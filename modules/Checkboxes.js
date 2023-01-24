const storage = require('../localStorage/storage')
const router = require('express').Router()

router.use((req, res, next) => {
  console.log(`Request received: Time: ${Date.now()}`)
  next()
})

router.get('/api/checkboxes', (req, res) => {
  console.log(`Request recieved to endpoint /api/checkboxes`)
  console.log(`Current Storage State: ${storage.values}`)
  res.json([{data: storage.values}])
})

module.exports = router
