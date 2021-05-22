import { BaseRouter } from './base.route'
import { ScriptController } from '../controller/script.controller'
import { ScriptModel, cfg } from '../model/script.model'
import { SqliteHelper } from '../helper/DBHelper/sqliteHelper'
import { Script } from '../type/api.type'


class ScriptRouter extends BaseRouter<Script> {
  constructor (apiString: string, controller: ScriptController) {
    super(apiString, controller)
  }
}

const apiString = '/script'
const sqliteHelper = new SqliteHelper()
const model = new ScriptModel(sqliteHelper, cfg)
const controller = new ScriptController(model)
const router = new ScriptRouter(apiString, controller).build()

export default router


 