const express = require("express")
const router = express.Router()
const controller = require("../controllers/catController.js")

// The routes that are exported
module.exports = router

// Use the container name as the server name
// mongoose.connect('mongodb://localhost/test', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// })

router.get('/', controller.list)
router.get('/add', controller.add)
router.get('/:name', controller.findOne)
