import { RunResult } from 'better-sqlite3'
import { Router } from 'express'
import testController from '../controller/test.controller'
import httpStatus from 'http-status'
import respLayer from '../responseLayer/baseLayer'


const router = Router()
const apiString = '/test'

// router.get('/test', (req, res, next)=> {
//   try {
//     console.log('get test')
//     res.send('one qqq rock v4')
//   } catch(e) {
//     // throw Error('get test error')
//     next(e)
//   }
// })

router.get('/err', (req, res, next)=> {
  try {
    console.log('error test')
    next(Error('error test'))
  } catch(e) {
    next(Error('error test'))
  }
})

type TestStruct = {
  id: number
  name: string
}

router.get(apiString, async(req, resp, next)=> {
  const res = await testController.findMany<TestStruct[]>(req, resp, next)
  const data = respLayer.baseLayer(res)
  resp.status(httpStatus.OK).json(data)
})

router.get(`${apiString}/:id`, async(req, resp, next)=> {
  // console.log('name', req.params)
  // resp.send('ok')
  const res = await testController.findOne<TestStruct>(req, resp, next)
  const data = respLayer.baseLayer(res)
  resp.status(httpStatus.OK).json(data)
})

router.post(apiString, async(req, resp, next)=>{
  const res = await testController.insertOne(req, resp, next)
  const data = respLayer.addLayer(res)
  resp.status(httpStatus.OK).json(data)
})

router.put(`${apiString}/:id`, async(req, resp, next)=> {
  const res = await testController.update(req, resp, next)
  const data = respLayer.updateLayer(res)
  resp.status(httpStatus.OK).json(data)
})

router.delete(`${apiString}/:id`, async(req, resp, next)=> {
  const res = await testController.del(req, resp, next)
  const data = respLayer.delLayer(res)

  resp.status(httpStatus.OK).json(data)
})



export default router