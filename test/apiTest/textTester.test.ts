import { CRUDTester } from './crudTester.test'
import { Text } from '../../src/schema'

class TextTester extends CRUDTester<Text> {
  constructor(url: string, apiString: string) {
    super(url, apiString)
  }

  generateTestData() {
    const testData: Text = {
      text: this.getRandomName('text'),
      vId: 12,
    }
    return testData
  }

  run() {
    const testData = this.generateTestData()
    this.add(testData)
    this.list({vId: testData.vId})
    // this.get((data: Text)=> {
    //   return data.text === testData.text 
    // })
    // const newData = this.generateTestData()
    // this.update(newData)
    this.del()
  }
}

export { TextTester }