const ApiError = require('../error/ApiError')
class UserController {
    async registration(req, res) {

    }

    async login(req, res) {
        const query = req.query
        res.json(query)
    }

    async check(req, res, next) {
        const {id} = req.query
        if  (!id) {
           return next(ApiError.badRequest('id doesnt set '))
        }
        res.json(id)
    }
}

module.exports =  new UserController()