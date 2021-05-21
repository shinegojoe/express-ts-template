import { BaseController } from './base.controller'
import { ScriptModel, Script } from '../model/script.model'

class ScriptController extends BaseController<Script> {
  constructor(model: ScriptModel) {
    super(model)
  }
}

export { ScriptController }
