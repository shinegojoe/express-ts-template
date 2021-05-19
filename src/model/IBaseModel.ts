import { Request, Response, NextFunction} from 'express'
import { RunResult } from 'better-sqlite3'


interface IBaseModel {
  findMany<T>(req: Request): Promise<Array<T>>
  findOne<T>(req: Request): Promise<T>
  insertOne(req: Request): Promise<RunResult>
  update(req: Request): Promise<RunResult>
  del(req: Request): Promise<RunResult>



}

export { IBaseModel }