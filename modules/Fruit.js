const router = require('express').Router()
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()

router.use((req, res, next) => {
  console.log(`Request received: Time: ${Date.now()}`)
  next()
})

router.post('/api/fruit', jsonParser, (req, res) => {
  console.log(`Request recieved to endpoint /api/checkboxes`)
  console.log(req.body)
  res.send("Ok")
})

module.exports = router
