import { CRUDTester } from './crudTester.test'
import axios from 'axios'
import { Translate } from '../../src/type/api.type'
import { assert } from 'chai'
import { ServerResp } from '../../src/responseLayer/serverResp'


class TranslateTester  {
  
  url: string
  apiString: string
  constructor(url: string, apiString: string) {
    this.url = url
    this.apiString = apiString
  }

  async translate() {
    it('translate test', async()=> {
      const testData = {
        text: 'rock and paper'
      }
      const url = `${this.url}/${this.apiString}`
      const res = await axios.post<ServerResp<Translate>>(url, testData)
      assert.equal(res.data.data.text, "石頭和紙")
    })
   
  }

  run() {
    describe('translate test', ()=> {
      this.translate()
    })
    
  }
}

export { TranslateTester }
