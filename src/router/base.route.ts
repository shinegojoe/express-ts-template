import { Router } from 'express'
import httpStatus from 'http-status'
import respLayer from '../responseLayer/baseLayer'
import { IBaseController } from '../controller/IBaseController'
import { IBaseModel } from '../model/IBaseModel'



class BaseRouter<T> {
    router: Router
    apiString: string
    controller: IBaseController

    constructor(apiString: string, controller: IBaseController) {
        this.router = Router()
        this.apiString = apiString
        this.controller = controller
    }

    add() {
        this.router.post(this.apiString, async (req, resp, next) => {
            try {
                const res = await this.controller.insertOne(req)
                const data = respLayer.addLayer(res)
                resp.status(httpStatus.OK).json(data)
            } catch(e) {
                next(e)
            }
      
        })
    }

    get() {
        this.router.get(`${this.apiString}/:id`, async (req, resp, next) => {
            try {
                const res = await this.controller.findOne<T>(req)
                const data = respLayer.baseLayer(res)
                resp.status(httpStatus.OK).json(data)
            } catch(e) {
                next(e)
            }
         
        })

    }

    list() {
        this.router.get(this.apiString, async (req, resp, next) => {
            try {
                const res = await this.controller.findMany<T[]>(req)
                const data = respLayer.baseLayer(res)
                resp.status(httpStatus.OK).json(data)
            } catch (e) {
                next(e)
            }
        })
    }

    update() {
        this.router.patch(`${this.apiString}/:id`, async (req, resp, next) => {
            try {
                const res = await this.controller.update(req)
                const data = respLayer.updateLayer(res)
                resp.status(httpStatus.OK).json(data)
            } catch(e) {
                next(e)
            }
        })

    }

    del() {
        this.router.delete(`${this.apiString}/:id`, async (req, resp, next) => {
            try {
                const res = await this.controller.del(req)
                const data = respLayer.delLayer(res)
                resp.status(httpStatus.OK).json(data)
            } catch(e) {
                next(e)
            }
          
        })

    }

    build() {
        this.add()
        this.get()
        this.list()
        this.update()
        this.del()
        return this.router
    }

}

export { BaseRouter }