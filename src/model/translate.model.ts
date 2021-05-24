import { Request } from 'express'
import axios from 'axios'
import googleTranslate from '@google-cloud/translate'
import { Translate as TranslateType } from '../type/api.type'


const { Translate } = googleTranslate.v2
const translate = new Translate()




class TranslateModel {
  async translate(req: Request) {
    const text = req.body.text
    const target = 'zh-TW'
    // const [languages] = await translate.getLanguages()
    // console.log('languages', languages)
    const [translation] = await translate.translate(text, target)
    console.log(`Translation: ${translation}`)
    const data: TranslateType = {
      text: translation
    }
    return data
  }
}

export { TranslateModel }

// /Users/taka/Downloads/vocabulary-trainer-314704-33075cda622a.json
// export GOOGLE_APPLICATION_CREDENTIALS=/Users/taka/Downloads/vocabulary-trainer-314704-33075cda622a.json
