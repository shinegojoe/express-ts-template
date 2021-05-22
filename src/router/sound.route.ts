import { Router } from 'express'
import { IRouter } from './IRouter'
import { SoundController } from '../controller/sound.controller'
import { SoundModel } from '../model/sound.model'
import respLayer from '../responseLayer/baseLayer'
import httpStatus from 'http-status'

class SoundRouter implements IRouter {
    router: Router
    controller: SoundController
    apiString: string
    constructor (apiString: string,  controller: SoundController) {
        this.router = Router()
        this.controller = controller
        this.apiString = apiString
    }
    sound() {
        this.router.post(this.apiString, async(req, resp, next)=> {
            try {
                const data = await this.controller.sound(req)
                const res = respLayer.baseLayer<any>(data)
                resp.status(httpStatus.OK).json(res)
            } catch(e) {
                next(e)
            }
        })
    }

    build() {
        this.sound()
        return this.router
    }
}

const apiString = '/sound'
const model = new SoundModel()
const controller = new SoundController(model)
const router = new SoundRouter(apiString, controller).build()

export default router

