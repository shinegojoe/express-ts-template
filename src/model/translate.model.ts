import { Request } from 'express'
import googleTranslate from '@google-cloud/translate'
import { Translate as TranslateType} from '../type/api.type'
import { SqliteHelper } from '../helper/DBHelper/sqliteHelper'
import { IQuery } from '../helper/DBHelper/IDB'

const { Translate } = googleTranslate.v2
const translate = new Translate()


class TranslateModel {
  sqlHelper: SqliteHelper
  
  constructor(sqlHelper: SqliteHelper) {
    this.sqlHelper = sqlHelper
  }

  async findVocabulary(vocabulary: string) {
    const q: IQuery = {
      query: 'SELECT * from translate WHERE vocabulary=$vocabulary',
      filter: { vocabulary }
    }
    const res = await this.sqlHelper.findOne<TranslateType | undefined>(q)
    return res
  }

  async insertTranslate(vocabulary: string, text: string) {
    const q: IQuery = {
      query: 'INSERT or IGNORE INTO translate(vocabulary, text) VALUES($vocabulary, $text)',
      filter: { 
        vocabulary,
        text
      }
    }
    const res = await this.sqlHelper.insertOne(q)
    return res
  }

  async translate(req: Request) {
    const text = req.body.text
    const target = 'zh-TW'
    // const [languages] = await translate.getLanguages()
    // console.log('languages', languages)
    const v = await this.findVocabulary(text)
    // console.log('v', v)

    if(v === undefined) {
      const [translation] = await translate.translate(text, target)
      console.log(`Translation: ${translation}`)
      
      const inserRes = await this.insertTranslate(text, translation)
      console.log('insert', inserRes)

      const data: TranslateType = {
        text: translation
      }

      return data

    } else {
      const data: TranslateType = {
        text: v.text
      }
      return data 
    }
    
  }
}

export { TranslateModel }
