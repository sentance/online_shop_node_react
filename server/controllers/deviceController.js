const {Device, DeviceInfo} = require('../models/models')
const ApiError = require('../error/ApiError')
const uuid = require('uuid')
const path = require('path')


class DeviceController {
    async create(req, res, next) {
        try {
            let {name, price, brandId, typeId, info} = req.body
             //receive file from request
            const {img} = req.files
            let fileName = uuid.v4() + ".jpg" //generate name for img
            await img.mv(path.resolve(__dirname, '..', 'static', fileName)) //move img to directory and add generated file name

            if(info){
                info = JSON.parse(info)
                info.forEach(i=>{
                    DeviceInfo.create({
                        title: i.title,
                        description: i.description,
                        deviceId: device.id
                    })
                })
            }

            const device = await Device.create({name, price, brandId, typeId, img: fileName, info})
            return res.json(device)
        }catch (e){
            next(ApiError.badRequest(e.message))
        }
    }

    async getAll(req, res) {
        let {brandId, typeId, limit, page} = req.query
        page = page || 1
        limit = limit || 9
        let offset = page * limit - limit
        let devices;
        if(!brandId && !typeId){
            devices = await Device.findAndCountAll({limit, offset})
        }
        if(brandId && !typeId){
            devices = await Device.findAndCountAll({where: {brandId}, limit, offset})
        }
        if(!brandId && typeId){
            devices = await Device.findAndCountAll({where: {typeId}, limit, offset})
        }if(brandId && typeId){
            devices = await Device.findAndCountAll({where: {typeId, brandId}, limit, offset})
        }
        return res.json(devices)
    }

    async getOne(req, res) {
        const {id} = req.params
        if(!id){
            return res.json(ApiError.badRequest('Id now found'))
        }
        const device = await Device.findOne(
            {
                where: {id},
                include: [{model: DeviceInfo, as: 'info'}]
            })
        return res.json(device)
    }

}

module.exports =  new DeviceController()