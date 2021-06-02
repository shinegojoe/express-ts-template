import { CRUDTester } from './crudTester.test'
import { Page } from '../../src/schema'
import { assert } from 'chai'



class PageTester extends CRUDTester<Page> {
  
  generateTestData() {
    const page: Page = {
      name: this.getRandomName('testPage')
    }
    return page
  }

  run() {
    describe('page test', async()=> {
      const testData = this.generateTestData()
      
      this.add(testData)
      this.list()
      this.get((data: Page)=> {
        assert(data.name === testData.name)        
      })
      const newData = this.generateTestData()
      this.update(newData)
      this.del()
    })
  }
}

export { PageTester }