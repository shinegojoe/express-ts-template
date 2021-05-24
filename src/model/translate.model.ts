import { Request } from 'express'
import axios from 'axios'
import { Translate } from '../type/api.type'

const host  = process.env.SOUND_SERVER_HOST
const port  = process.env.SOUND_SERVER_PORT

class TranslateModel {
  async translate(req: Request) {
    const url = `${host}:${port}`
    const gtts = await axios({
        method: 'POST',
        url: `${url}/translate`,
        data: req.body
    })
    if(gtts.data.status !== "ok") {
      throw Error("translate error")
    }
    // console.log(gtts.data)
    const data: Translate = {
      text: gtts.data.text
    }
    return data
  }
}

export { TranslateModel }