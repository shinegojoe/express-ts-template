import { assert } from 'chai'
import axios from 'axios'
import { RunResult } from 'better-sqlite3'
import { TestStruct } from '../src/model/test.model'


class CRUDTester {
  
  url: string
  lastId: number
  testData: TestStruct
  constructor(url: string, apiString: string) {
    this.url = `${url}/${apiString}`
    this.lastId = 0
    this.testData = {
      name: `test_${Math.floor(Math.random()* 1000)}`
    }
  }
  add() {
    it('add', async()=> {
      const res = await axios({
        method: 'POST',
        url: `${this.url}`,
        data: this.testData
      })
      const resData: RunResult = res.data.data
      this.lastId = resData.lastInsertRowid as number
      assert.equal(resData.changes, 1)

    })
  }
  
  list() {
    it('list', async()=> {
      const res = await axios({
        method: 'GET',
        url: `${this.url}`,
        params: this.testData

      })
      const resData: RunResult = res.data.data
      console.log(resData)
      assert.isArray(resData)
    })
  }

  get() {
    it('get', async()=> {
      const res = await axios({
        method: 'GET',
        url: `${this.url}/${this.lastId}`
      })
      const resData: TestStruct = res.data.data
      assert.equal(resData.name, this.testData.name)
    })
  }

  update() {
    it('update', async()=> {
      const res = await axios({
        method: 'PUT',
        url: `${this.url}/${this.lastId}`,
        data: {
          name: `new test_${Math.floor(Math.random()* 1000)}`
        }
      })
      // console.log('res', res)
      const resData = res.data.data
      assert.equal(resData, 'success')

    })

  }

  del() {
    it('delete', async()=> {
      const res = await axios({
        method: 'DELETE',
        url: `${this.url}/${this.lastId}`,
      })
      const resData = res.data.data
      assert.equal(resData, 'success')
    })

  }
  
  run() {
    describe('crud test', ()=> {
      this.add()
      this.list()
      this.get()
      this.update()
      this.del()
    })
  }
}

export { CRUDTester }