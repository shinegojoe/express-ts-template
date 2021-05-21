import { BaseModel } from './base.model'
import { ISqlConfig } from '../helper/DBHelper/ISqlConfig'
import { SqliteHelper } from '../helper/DBHelper/sqliteHelper'


type Vocabulary = {
  id?: number
  vocabulary: string
  checked: boolean
  pageId: number
}

const cfg: ISqlConfig = {
  add: 'INSERT or IGNORE INTO vocabulary(vocabulary, pageId) VALUES($vocabulary, $pageId)',
  list: 'SELECT * from vocabulary WHERE pageId=$pageId',
  get: '',
  update: 'UPDATE vocabulary SET vocabulary=$vocabulary WHERE id=$id',
  del: 'DELETE from vocabulary WHERE id=$id'
}

class VocabularyModel extends BaseModel {
  constructor(sqliteHelper: SqliteHelper, cfg: ISqlConfig) {
    super(sqliteHelper, cfg)
  }
}

export { VocabularyModel, Vocabulary, cfg }