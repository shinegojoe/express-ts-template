import { Router } from 'express'
import testRouter from './test.route'
import pageRouter from './page.route'
import scriptRouter from './script.route'
import vocabularyRouter from './vocabulary.route'
import textRouter from './text.route'
import soundRouter from './sound.route'

const router = Router()
router.use('/', testRouter)
router.use('/', pageRouter)
router.use('/', scriptRouter)
router.use('/', vocabularyRouter)
router.use('/', textRouter)
router.use('/', soundRouter)

export default router