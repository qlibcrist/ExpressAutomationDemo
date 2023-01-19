const router = require('express').Router()

router.use((req, res, next) => {
  console.log('Time: ', Date.now())
  next()
})

router.get('/api/checkboxes', (req, res) => {
  res.json([{data: ['Strawberry', 'Banana', 'Apple', 'Orange']}])
})

module.exports = router
