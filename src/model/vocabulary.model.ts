import { BaseModel } from './base.model'
import { ISqlConfig } from '../helper/DBHelper/ISqlConfig'
import { SqliteHelper } from '../helper/DBHelper/sqliteHelper'




const cfg: ISqlConfig = {
  add: 'INSERT or IGNORE INTO vocabulary(vocabulary, pageId) VALUES($vocabulary, $pageId)',
  list: 'SELECT * from vocabulary WHERE pageId=$pageId',
  get: 'SELECT * from vocabulary WHERE id=$id',
  update: 'UPDATE vocabulary SET vocabulary=$vocabulary WHERE id=$id',
  del: 'DELETE from vocabulary WHERE id=$id'
}

class VocabularyModel extends BaseModel {
  constructor(sqliteHelper: SqliteHelper, cfg: ISqlConfig) {
    super(sqliteHelper, cfg)
  }
}

export { VocabularyModel, cfg }