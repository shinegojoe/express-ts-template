import { Router } from 'express'
import httpStatus from 'http-status'
import respLayer from '../responseLayer/baseLayer'
import { IBaseController } from '../controller/IBaseController'



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
    this.router.post(this.apiString, async(req, resp, next)=>{
      const res = await this.controller.insertOne(req, resp, next)
      const data = respLayer.addLayer(res)
      resp.status(httpStatus.OK).json(data)
    })
  }

  get() {
    this.router.get(`${this.apiString}/:id`, async(req, resp, next)=> {
      const res = await this.controller.findOne<T>(req, resp, next)
      const data = respLayer.baseLayer(res)
      resp.status(httpStatus.OK).json(data)
    })

  }

  list() {
    this.router.get(this.apiString, async(req, resp, next)=> {
      const res = await this.controller.findMany<T[]>(req, resp, next)
      const data = respLayer.baseLayer(res)
      resp.status(httpStatus.OK).json(data)
    })
  }

  update() {
    this.router.patch(`${this.apiString}/:id`, async(req, resp, next)=> {
      const res = await this.controller.update(req, resp, next)
      const data = respLayer.updateLayer(res)
      resp.status(httpStatus.OK).json(data)
    })

  }

  del() {
    this.router.delete(`${this.apiString}/:id`, async(req, resp, next)=> {
      const res = await this.controller.del(req, resp, next)
      const data = respLayer.delLayer(res)
      resp.status(httpStatus.OK).json(data)
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