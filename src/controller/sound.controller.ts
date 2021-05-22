import { Request } from 'express'
import { SoundModel } from '../model/sound.model'


class SoundController {
    model: SoundModel
    constructor(model: SoundModel) {
        this.model = model
    }

    async sound(req: Request) {
        return await this.model.sound(req)
    }
}

export { SoundController }