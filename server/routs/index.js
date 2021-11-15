const Router = require('express')
const router = new Router()
const deviceRouter = require('./deviceRouter')
const typeeRouter = require('./typeRouter')
const brandRouter = require('./brandRouter')
const userRouter = require('./userRouter')

router.use('/user', userRouter)
router.use('/type', typeeRouter)
router.use('/brand', brandRouter)
router.use('/device', deviceRouter)


module.exports = router