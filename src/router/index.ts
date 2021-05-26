import { Router } from 'express'
import testRouter from './test.route'
import pageRouter from './page.route'
import scriptRouter from './script.route'
import vocabularyRouter from './vocabulary.route'
import textRouter from './text.route'
import soundRouter from './sound.route'
import translateRouter from './translate.route'

const router = Router()
router.use('/', testRouter)
router.use('/', pageRouter)
router.use('/', scriptRouter)
router.use('/', vocabularyRouter)
router.use('/', textRouter)
router.use('/', soundRouter)
router.use('/', translateRouter)

router.get('/echo', (res, resp, next)=> {
  resp.send('test v3')
})

export default router