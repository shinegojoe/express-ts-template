import { Request, Response, NextFunction } from 'express'
import { BaseModel } from '../model/base.model'
// import { BaseLayer } from '../responseLayer/baseLayer'
import { IBaseController } from '../controller/IBaseController'


class BaseController<T> implements IBaseController {
  model: BaseModel
  // respLayer: IResp
  constructor(model: BaseModel) {
    this.model = model
    // this.respLayer = respLayer
  }

  async insertOne(req: Request, resp: Response, next: NextFunction) {
    try {
      const data = await this.model.insertOne(req)
      return data
    } catch(e) {
      next(e)
    }
  }

  async update(req: Request, resp: Response, next: NextFunction) {
    try {
      const data = await this.model.update(req)
      return data
    } catch(e) {
      next(e)
    }
  }

  async del(req: Request, resp: Response, next: NextFunction) {
    try {
      const data = await this.model.del(req)
      return data
    } catch(e) {
      next(e)
    }
  }

  async findMany<T>(req: Request, resp: Response, next: NextFunction) {
    try {
      const data = await this.model.findMany<T>(req)
      // const res = this.respLayer.resp<T[]>(data)
      // resp.status(httpStatus.OK).json(res)
      return data

    } catch(e) {
      console.log('xxx', e)
      next(e)
    }
  }

  async findOne<T>(req: Request, resp: Response, next: NextFunction) {
    try {
      const data = await this.model.findOne<T>(req)
      // const res = this.respLayer.resp<T>(data)
      // resp.status(httpStatus.OK).json(res)
      return data

    } catch(e) {
      next(e)
    }
  }
}


// const sqliteHelper = new SqliteHelper()
// const model = new BaseModel(sqliteHelper)
// const respLayer = new BaseLayer()
// const controller = new BaseController<TestStruct>(model, respLayer)

export { BaseController }