import { BaseRouter } from './base.route'
import { TextController } from '../controller/text.controller'
import { TextModel, Text, cfg } from '../model/text.model'
import { SqliteHelper } from '../helper/DBHelper/sqliteHelper'

class TextRouter extends BaseRouter<Text> {
  constructor(apiString: string, controller: TextController) {
    super(apiString, controller)
  }
}

const apiString = '/text'
const sqliteHelper = new SqliteHelper()
const model = new TextModel(sqliteHelper, cfg)
const controller = new TextController(model)
const router = new TextRouter(apiString, controller).build()

export default router
