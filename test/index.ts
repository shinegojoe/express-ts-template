import dotenv from 'dotenv'

const pp = `${process.cwd()}/config/development.env`
const env = dotenv.config({
  path: pp
}).parsed

import { CRUDTester } from './test.tester'
import { PageTester } from './pageTester.test'


const port = process.env.PORT
const url = `http://localhost:${port}/api`
console.log('url', url)

describe('test start', async()=> {
  // const testTester = new CRUDTester(url, 'test')
  // testTester.run()

  const pageTester = new PageTester(url, 'page')
  pageTester.run()
})
