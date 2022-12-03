const route = require('express').Router()
const controller = require("../controller/controller_message")

route.post('/',controller.saveMessage)
route.get('/',controller.getMessage)


module.exports = route;