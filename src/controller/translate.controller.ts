import { Request } from 'express'
import { TranslateModel } from '../model/translate.model'


class TranslateController {
  
  model: TranslateModel
  constructor(model: TranslateModel) {
    this.model = model
  }

  async translate(req: Request) {
    const data = await this.model.translate(req)
    return data
  }
}

export { TranslateController }