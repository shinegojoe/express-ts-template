import {  PageModel } from '../model/page.model'
import { BaseController } from './base.controller'
import { Page } from '../type/api.type'

class PageController extends BaseController<Page> {
  constructor(model: PageModel) {
    super(model)
  }
}

// const sqliteHelper = new SqliteHelper()
// const model = new PageModel(sqliteHelper, cfg)
// const controller = new PageController(model)

export { PageController}




