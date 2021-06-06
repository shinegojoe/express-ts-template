import { CRUDTester } from './crudTester.test'
import { Script } from '../../src/type/api.type'


class ScriptTester extends CRUDTester<Script> {
  constructor(url: string, apiString: string) {
    super(url, apiString)
  }

  generateTestData() {
    const testData: Script = {
      name: this.getRandomName('name123'),
      text: this.getRandomName('this is an apple')
    }
    return testData

  }

  run() {
    describe('script test', ()=> {
      const testData = this.generateTestData()
      this.add(testData)
      this.list({
        text: testData.text,
        word: 'apple',
        name: testData.name
      })
      this.del()
    })
   
  }
}

export { ScriptTester }