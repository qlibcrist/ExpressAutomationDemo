const router = require('express').Router()

router.use((req, res, next) => {
  console.log(`Request received: Time: ${Date.now()}`)
  next()
})

router.get('/api/checkboxes', (req, res) => {
  console.log(`Request recieved to endpoint /api/checkboxes`)
  res.json([{data: ['Strawberry', 'Banana', 'Apple', 'Orange']}])
})

module.exports = router
