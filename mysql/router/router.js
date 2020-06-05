//Koa2/router/router.js
const Router =require("koa-router")
const user = require("./userRoute")

let router = new Router()

router.use(user.routes())

module.exports = router

