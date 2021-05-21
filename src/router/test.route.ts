import { TestController } from '../controller/test.controller'
import { BaseRouter } from './base.route'
import { TestStruct, TestModel, cfg } from '../model/test.model'
import { SqliteHelper } from '../helper/DBHelper/sqliteHelper'

const apiString = '/test'
const sqliteHelper = new SqliteHelper()
const model = new TestModel(sqliteHelper, cfg)
const controller = new TestController(model)



class TestRouter extends BaseRouter<TestStruct> {
  constructor(apiString: string, controller: TestController) {
    super(apiString, controller)
  }
}

const router = new TestRouter(apiString, controller).build()


export default router