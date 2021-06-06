import dotenv from 'dotenv'

const pp = `${process.cwd()}/config/development.env`
const env = dotenv.config({
  path: pp
}).parsed

// import { CRUDTester } from './test.tester'
// import { PageTester } from './pageTester.test'
import{ PageTester} from './apiTest/pageTester.test'
import { VocabularyTester } from './apiTest/vocabularyTester.test'
import { TextTester } from './apiTest/textTester.test'
import { TranslateTester } from './apiTest/translateTester.test'
import { ScriptTester } from './apiTest/scriptTester.test'


const port = process.env.PORT
const url = `http://localhost:${port}/api`
console.log('url', url)

describe('test start', async()=> {
  // const testTester = new CRUDTester(url, 'test')
  // testTester.run()

  const pageTester = new PageTester(url, 'page')
  pageTester.run()

  const vocabularyTester = new VocabularyTester(url, 'vocabulary')
  vocabularyTester.run()

  const textTester = new TextTester(url, 'text')
  textTester.run()

  const translateTester = new TranslateTester(url, 'translate')
  translateTester.run()
  
  const scriptTester = new ScriptTester(url, 'script')
  scriptTester.run()
})
