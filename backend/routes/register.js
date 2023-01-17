const route = require('express').Router()
const controller = require("../controller/controller")

route.post('/Register',controller.createUser)
route.post('/findreg',controller.findreg)
route.post('/Searchuser', controller.Searchuser)
route.get('/Register',controller.getlatestUser)
route.patch('/Register/:id',controller.updateUser)
// route.get('/Searchuser',controller.getData)


module.exports = route;