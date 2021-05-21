import { Page, PageModel, cfg } from '../model/page.model'
import { BaseController } from './base.controller'

class PageController extends BaseController<Page> {
  constructor(model: PageModel) {
    super(model)
  }
}

// const sqliteHelper = new SqliteHelper()
// const model = new PageModel(sqliteHelper, cfg)
// const controller = new PageController(model)

export { PageController}




