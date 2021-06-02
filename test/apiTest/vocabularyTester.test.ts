import { CRUDTester } from '../apiTest/crudTester.test'
import { Vocabulary } from '../../src/schema'

class VocabularyTester extends CRUDTester<Vocabulary> {
  constructor(url: string, apiString: string) {
    super(url, apiString)
  }

  generateTestData() {
    const testData: Vocabulary = {
      vocabulary: this.getRandomName('vocabulary'),
      checked: 0,
      pageId: 1
    }
    return testData
  }

  run() {
    describe('vocabulary test', async()=> {
      // const testData = this.generateTestData()
      // this.add(testData)
      this.list({pageId: 2})
    })
  }

}

export { VocabularyTester }