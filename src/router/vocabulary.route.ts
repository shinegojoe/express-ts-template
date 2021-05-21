import { BaseRouter } from './base.route'
import { VocabularyModel, Vocabulary, cfg } from '../model/vocabulary.model'
import { VocabularyController } from '../controller/vocabulary.controller'
import { SqliteHelper } from '../helper/DBHelper/sqliteHelper'


class VocabularyRouter extends BaseRouter<Vocabulary> {
  constructor(apiString: string, controller: VocabularyController) {
    super(apiString, controller)
  }
}

const apiString = '/vocabulary'
const sqliteHelper = new SqliteHelper()
const model = new VocabularyModel(sqliteHelper, cfg)
const controller = new VocabularyController( model)
const router = new VocabularyRouter(apiString, controller).build()

export default router



