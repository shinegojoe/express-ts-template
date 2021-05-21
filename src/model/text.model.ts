import { BaseModel } from './base.model'
import { ISqlConfig } from '../helper/DBHelper/ISqlConfig'
import { SqliteHelper } from '../helper/DBHelper/sqliteHelper'

type Text = {
  id?: number
  vId: number
  text: string
}

const cfg: ISqlConfig = {
  add: 'INSERT or IGNORE INTO text(text, vId) VALUES($text, $vId)',
  list: 'SELECT * from text WHERE vId=$vId',
  get: '',
  update: '',
  del: 'DELETE from text WHERE id=$id'
}

class TextModel extends BaseModel {
  constructor(sqliteHelper: SqliteHelper, cfg: ISqlConfig) {
    super(sqliteHelper, cfg)
  }
}

export { TextModel, Text, cfg }