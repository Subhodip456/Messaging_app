const route = require("express").Router()
const controller_login = require("../controller/controller_login")

route.post('/',controller_login.findlogin)

module.exports = route;