import { BaseController } from '../controller/base.controller'
import { TestModel, cfg, TestStruct } from '../model/test.model'
// import { BaseLayer } from '../responseLayer/baseLayer'
import { SqliteHelper } from '../helper/DBHelper/sqliteHelper'
import { IResp } from '../responseLayer/serverResp'


const sqliteHelper = new SqliteHelper()
// const respLayer = new BaseLayer()
const model = new TestModel(sqliteHelper, cfg)

class TestController extends BaseController<TestStruct> {
  constructor(model: TestModel) {
    super(model)
  }
}

const controller = new TestController(model)

export default controller
