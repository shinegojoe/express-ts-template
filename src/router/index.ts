import { Router } from 'express'
import testRouter from './test.route'

const router = Router()
router.use('/', testRouter)

export default router