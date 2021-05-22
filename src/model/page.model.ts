import { BaseModel } from './base.model'
import { ISqlConfig } from '../helper/DBHelper/ISqlConfig'
import { SqliteHelper } from '../helper/DBHelper/sqliteHelper'


const cfg: ISqlConfig = {
  add: 'INSERT or IGNORE INTO page(name) VALUES($name) ',
  list: 'SELECT * from page',
  get: 'SELECT * from page WHERE id=$id',
  update: 'UPDATE page SET name = $name WHERE id = $id',
  del: ''
}

class PageModel extends BaseModel {
  constructor(sqliteHelper: SqliteHelper, cfg: ISqlConfig) {
    super(sqliteHelper, cfg)
  }
}

export { PageModel, cfg  }
