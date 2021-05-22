import { BaseController } from './base.controller'
import { ScriptModel } from '../model/script.model'
import { Script } from '../type/api.type'


class ScriptController extends BaseController<Script> {
  constructor(model: ScriptModel) {
    super(model)
  }
}

export { ScriptController }
