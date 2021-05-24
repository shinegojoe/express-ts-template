import { Router } from 'express'
import httpStatus from 'http-status'
import { TranslateModel } from '../model/translate.model'
import { TranslateController } from '../controller/translate.controller'
import { IRouter } from './IRouter'
import responseLayer from '../responseLayer/baseLayer'

class TranslateRouter implements IRouter {

  controller: TranslateController
  router: Router
  apiString: string

  constructor(controller: TranslateController, apiString: string) {
    this.controller = controller
    this.apiString = apiString
    this.router = Router()
  }

  translate() {
    this.router.post(this.apiString,(async(req, resp, next)=> {
      try {
        const data = await this.controller.translate(req)
        const res = responseLayer.baseLayer(data)
        resp.status(httpStatus.OK).json(res)
      } catch(e) {
        next(e)
      }

    }))
  }

  build() {
    this.translate()
    return this.router
  }
}

const apiString = '/translate'
const model = new TranslateModel()
const controller = new TranslateController(model)
const router: Router = new TranslateRouter(controller, apiString).build()

export default router