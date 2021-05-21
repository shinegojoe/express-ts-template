import { BaseController } from './base.controller'
import { Text, TextModel} from '../model/text.model'

class TextController extends BaseController<Text> {
  constructor(model: TextModel) {
    super(model)
  }
}

export { TextController}
