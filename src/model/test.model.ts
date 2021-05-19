import { BaseModel } from './base.model'
import { SqliteHelper } from '../helper/DBHelper/sqliteHelper'
import { ISqlConfig } from '../helper/DBHelper/ISqlConfig'

const cfg: ISqlConfig = {
  add: 'INSERT INTO testTable(name) VALUES($name) ',
  list: 'SELECT * from testTable WHERE name=$name',
  get: 'SELECT * from testTable WHERE id=$id',
  update: 'UPDATE testTable SET name = $name WHERE id = $id',
  del: 'DELETE from testTable WHERE id = $id'
}

class TestModel extends BaseModel {
  constructor(sqliteHelper: SqliteHelper, cfg: ISqlConfig) {
    super(sqliteHelper, cfg)
  }
}



export { TestModel, cfg }