import { PageController } from '../controller/page.controller'
import { PageModel, cfg} from '../model/page.model'
import { BaseRouter } from './base.route'
import { SqliteHelper } from '../helper/DBHelper/sqliteHelper'
import { Page } from '../type/api.type'


const apiString = '/page'
const sqliteHelper = new SqliteHelper()
const model = new PageModel(sqliteHelper, cfg)
const controller = new PageController(model)


class PageRouter extends BaseRouter<Page> {
  constructor(apiString: string, controller: PageController) {
    super(apiString, controller)
  }
}

const router = new PageRouter(apiString, controller).build()

export default router