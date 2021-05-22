import { BaseController } from './base.controller'
import { VocabularyModel, cfg } from '../model/vocabulary.model'
import { Vocabulary } from '../type/api.type'

class VocabularyController extends BaseController<Vocabulary> {
  constructor(model: VocabularyModel) {
    super(model)
  }
}

export { VocabularyController }