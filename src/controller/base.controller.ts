import { Request, Response, NextFunction } from 'express'
import { BaseModel } from '../model/base.model'
// import { BaseLayer } from '../responseLayer/baseLayer'
import { IBaseController } from '../controller/IBaseController'
// import { IBaseModel } from '../model/IBaseModel'

class BaseController<T> implements IBaseController {
  model: BaseModel
  // respLayer: IResp
  constructor(model: BaseModel) {
    this.model = model
    // this.respLayer = respLayer
  }

  async insertOne(req: Request) {
      const data = await this.model.insertOne(req)
      return data
  }

  async update(req: Request) {
      const data = await this.model.update(req)
      return data
  }

  async del(req: Request) {
      const data = await this.model.del(req)
      return data
  }

  async findMany<T>(req: Request) {
      const data = await this.model.findMany<T>(req)
      // const res = this.respLayer.resp<T[]>(data)
      // resp.status(httpStatus.OK).json(res)
      return data
  }

  async findOne<T>(req: Request) {
      const data = await this.model.findOne<T>(req)
      // const res = this.respLayer.resp<T>(data)
      // resp.status(httpStatus.OK).json(res)
      return data
  }
}

export { BaseController }