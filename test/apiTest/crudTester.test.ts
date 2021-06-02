import { assert } from 'chai'
import axios, { AxiosRequestConfig } from 'axios'
import { RunResult } from 'better-sqlite3'
import { ServerResp } from '../../src/responseLayer/serverResp'



abstract class CRUDTester<T> {
  
  url: string
  lastId: number
  constructor(url: string, apiString: string) {
    this.url = `${url}/${apiString}`
    this.lastId = 0
    // this.testData = {
    //   name: `test_${Math.floor(Math.random()* 1000)}`
    // }
  }

  abstract generateTestData(): T
  abstract run(): void


  getRandomName(base: string) {
    const name = `${Math.floor(Math.random()* 9999)}_${base}`
    return name
  }

  add(testData: T) {
    it('add', async()=> {
      // const res = await axios({
      //   method: 'POST',
      //   url: `${this.url}`,
      //   data: testData
      // })
      const res = await axios.post<ServerResp<string>>(this.url, testData)
      const resData = res.data
      assert.equal(resData.data, 'success')

    })
  }
  
  list(query: Object = {}) {
    it('list', async()=> {
      const cfg: AxiosRequestConfig = {
        params: query
      }
      const res = await axios.get<ServerResp<T[]>>(this.url, cfg)
      const resData = res.data.data
      // console.log(resData)
      assert.isArray(resData)
      const data = resData[resData.length-1] as any
      this.lastId = data.id
    })
  }

  get(statement: Function) {
    it('get', async()=> {
      
      const url = `${this.url}/${this.lastId}`
      const res = await axios.get<ServerResp<T>>(url)
      const resData= res.data.data
      statement(resData)
    })
  }

  update(newData: T) {
    it('update', async()=> {
      const url = `${this.url}/${this.lastId}`
      const res = await axios.patch(url, newData)
      const resData = res.data.data
      // console.log('update', resData)
      assert.equal(resData, 'success')
    })

  }

  del() {
    it('delete', async()=> {
      const url = `${this.url}/${this.lastId}`
      const res = await axios.delete(url)
      const resData = res.data.data
      assert.equal(resData, 'success')
    })

  }
  
  // run() {
  //   describe('crud test', ()=> {
  //     const testData = this.generateTestData()
  //     this.add(testData)
  //     // this.list()
  //     // this.get()
  //     // this.update()
  //     // this.del()
  //   })
  // }
}


export { CRUDTester }