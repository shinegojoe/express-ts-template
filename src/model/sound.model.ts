import fs from 'fs'
import { Request } from 'express'
import axios from 'axios'

const gttsFile = process.env.GTTS_FILE as string
const host  = process.env.SOUND_SERVER_HOST
const port  = process.env.SOUND_SERVER_PORT


class SoundModel {

   
    async sound(req: Request): Promise<any> {
        const url = `${host}:${port}`
        const gtts = await axios({
            method: 'POST',
            url: url,
            data: req.body
        })
        console.log('gtts', gtts.data)
        
        var data = fs.readFileSync(gttsFile)
        return data
    }
}

export { SoundModel }