import { Request, Response, NextFunction } from 'express'
import { logger } from './helper/logHelper'
import { ServerResp } from './responseLayer/serverResp'
import httpStatus from 'http-status'


const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
  console.log('error catched', err.name, err.message)
  logger.error(err.name)
  const msg = {
    message: err.message
  }
  const resp = new ServerResp(msg, 'error')
  return res.status(httpStatus.OK).json(resp)
}

export default errorHandler
