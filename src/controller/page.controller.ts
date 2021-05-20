import { Page, PageModel, cfg } from '../model/page.model'
import { BaseController } from './base.controller'

class PageController extends BaseController<Page> {
  constructor(model: PageModel) {
    super(model)
  }
}

export { PageController }



