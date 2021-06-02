import { BaseModel } from './base.model'
import { ISqlConfig } from '../helper/DBHelper/ISqlConfig'
import { SqliteHelper } from '../helper/DBHelper/sqliteHelper'
import { Request } from 'express'
import { RunResult, Database } from 'better-sqlite3'

const cfg: ISqlConfig = {
  add: 'INSERT or IGNORE INTO page(name) VALUES($name) ',
  list: 'SELECT * from page',
  get: 'SELECT * from page WHERE id=$id',
  update: 'UPDATE page SET name = $name WHERE id = $id',
  del: ''
}

class PageModel extends BaseModel {
  constructor(sqliteHelper: SqliteHelper, cfg: ISqlConfig) {
    super(sqliteHelper, cfg)
  }

  runStmt(db: Database, sql: string, q: object) {
    const stmt = db.prepare(sql)
    const res = stmt.run(q)
    return res
  }

  async del(req: Request): Promise<RunResult> {
    // delete text where vId
    // delete vocabulary where pageId
    // delete page
    const pageId = req.params.id
    console.log('pageId', pageId)
    const db = this.sqliteHelper.connect()
    const begin = db.prepare('BEGIN')
    const commit = db.prepare('COMMIT')
    const rollback = db.prepare('ROLLBACK')
    begin.run()
    try {
      const sql1 = 'SELECT * from vocabulary WHERE pageId = $pageId'
      const q1 = {
        pageId: pageId 
      }
       
      const stmt1 = db.prepare(sql1)
      const vocabularyList = stmt1.all(q1)
      for(const v of vocabularyList) {
        const sql = 'DELETE from text WHERE vId=$vId'
        const q = { vId: v.id }
        const res = this.runStmt(db, sql, q)
        console.log(res)
      }
      const sql2 = 'DELETE from vocabulary WHERE pageId=$pageId'
      const res2 = this.runStmt(db, sql2, q1)
      const sql3 = 'DELETE from page WHERE id=$pageId'
      const res3 = this.runStmt(db, sql3, q1)
      console.log('res3', res3)
      commit.run()
      return res3
    } catch (e) {
      throw e
    }
    finally {
      if (db.inTransaction) {
        rollback.run()
      }
      db.close()
    }
    
  }
}

export { PageModel, cfg  }
