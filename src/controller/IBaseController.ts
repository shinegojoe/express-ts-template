import { Request, Response, NextFunction } from 'express'
import { RunResult } from 'better-sqlite3'
import { IBaseModel } from '../model/IBaseModel'

interface IBaseController extends IBaseModel {
  
}

// interface IBaseController {
//   findMany<T>(req: Request, resp: Response, next: NextFunction): Promise<T[] | undefined>
//   findOne<T>(req: Request, resp: Response, next: NextFunction): Promise<T | undefined>
//   insertOne(req: Request, resp: Response, next: NextFunction): Promise<RunResult | undefined>
//   update(req: Request, resp: Response, next: NextFunction): Promise<RunResult | undefined>
//   del(req: Request, resp: Response, next: NextFunction): Promise<RunResult | undefined>
// }

export { IBaseController }