import { BaseController } from './base.controller'
import { VocabularyModel, Vocabulary, cfg } from '../model/vocabulary.model'

class VocabularyController extends BaseController<Vocabulary> {
  constructor(model: VocabularyModel) {
    super(model)
  }
}

export { VocabularyController }