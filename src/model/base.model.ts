import { RunResult } from 'better-sqlite3'
import { Request } from 'express'
import { SqliteHelper } from '../helper/DBHelper/sqliteHelper'
import { IQuery } from '../helper/DBHelper/IDB'
import { IBaseModel } from './IBaseModel'
import { ISqlConfig } from '../helper/DBHelper/ISqlConfig'



class BaseModel implements IBaseModel {

  sqliteHelper: SqliteHelper
  cfg: ISqlConfig
  constructor(sqliteHelper: SqliteHelper, cfg: ISqlConfig) {
    this.sqliteHelper = sqliteHelper
    this.cfg = cfg
  }

  async insertOne(req: Request): Promise<RunResult> {
    const q: IQuery = {
      query: this.cfg.add,
      filter: req.body
    }
    const res = await this.sqliteHelper.insertOne(q)
    return res
  }

  async update(req: Request): Promise<RunResult> {
    const q: IQuery = {
      query: this.cfg.update,
      filter: {
        id: req.params.id,
        name: req.body.name
      }
    }
    const res = await this.sqliteHelper.update(q)
    return res
  }

  async del(req: Request): Promise<RunResult> {
    const q: IQuery = {
      query: this.cfg.del,
      filter: {
        id: req.params.id,
      }
    }
    const res = await this.sqliteHelper.del(q)
    return res
  }

  async findMany<T>(req: Request): Promise<T[]> {
    const name = req.query.name
    const q: IQuery = {
      query: this.cfg.list,
      filter: { name: name }
    }
    const res = await this.sqliteHelper.findMany<T>(q)
    return res
  }

  async findOne<T>(req: Request): Promise<T> {
    const id = req.params.id
    const q: IQuery = {
      query: this.cfg.get,
      filter: { id: id }
    }
    const res = await this.sqliteHelper.findOne<T>(q)
    return res
  }
  
}

export { BaseModel }