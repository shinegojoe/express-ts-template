import { BaseController } from './base.controller'
import {  TextModel} from '../model/text.model'
import { Text } from '../type/api.type'

class TextController extends BaseController<Text> {
  constructor(model: TextModel) {
    super(model)
  }
}

export { TextController}
