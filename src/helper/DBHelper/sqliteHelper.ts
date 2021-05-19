import sqlite3, { Database, RunResult } from 'better-sqlite3'
import { IDB, IQuery } from './IDB'

const dbPath = process.env.DB_PATH as string
console.log('db', dbPath)

class SqliteHelper implements IDB {
  constructor() {

  }

  connect(): Database {
    const db = new sqlite3(dbPath, { verbose: console.log })
    return db
  }

  runSql(q: IQuery): Promise<RunResult> {
    const p = new Promise<RunResult>((resolve, reject)=> {
      const db = this.connect()
      try {
        console.log(q)
        const stmt = db.prepare(q.query);
        const res = stmt.run(q.filter)
        resolve(res)

      } catch(e) {
        throw e

      } finally {
        db.close()
      }

    })
    return p
  }




  insertOne(q: IQuery): Promise<RunResult> {
    return this.runSql(q)
  }

  update(q: IQuery): Promise<RunResult> {
    return this.runSql(q)
  }

  del(q: IQuery): Promise<RunResult> {
    return this.runSql(q)
  }

  findOne<T>(q: IQuery): Promise<T> {
    const p = new Promise<T>((resolve, reject)=> {
      const db = this.connect()
      try {
        const stmt = db.prepare(q.query);
        const res = stmt.get(q.filter) as T
        resolve(res)

      } catch(e) {
        throw e
      }

    })
    return p
  }

  findMany<T>(q: IQuery): Promise<Array<T>> {
    const p = new Promise<Array<T>>((resolve, reject)=> {
      const db = this.connect()
      try {
        const stmt = db.prepare(q.query)
        const res = stmt.all(q.filter) as Array<T>
        console.log('res', res)
        resolve(res)

      } catch (e) {
          // reject(e)
          throw e
      } finally {
          db.close()
      }
    })

    return p
  }

  
}

export { SqliteHelper }
