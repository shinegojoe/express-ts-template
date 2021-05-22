import { BaseModel } from './base.model'
import { ISqlConfig } from '../helper/DBHelper/ISqlConfig'
import { SqliteHelper } from '../helper/DBHelper/sqliteHelper'


const cfg: ISqlConfig = {
  add: 'INSERT or IGNORE INTO script(name, text) VALUES($name, $text) ',
  list: 'SELECT * from script WHERE instr(text, $word)>1 AND name = $name LIMIT 3',
  get: 'SELECT * from script WHERE id=$id',
  update: '',
  del: 'DELETE from script WHERE id=$id'
}

class ScriptModel extends BaseModel {
  constructor(sqliteHelper: SqliteHelper, cfg: ISqlConfig) {
    super(sqliteHelper, cfg)
  }
}

export { ScriptModel, cfg }