import { RunResult } from 'better-sqlite3'

// interface IQueryRes {
//   changes: number
//   lastInsertRowid: number
// }

interface IQuery {
  query: string
  filter: any
}


interface IDB {
  connect(): any
  findOne<T>(q: IQuery): Promise<T>
  findMany<T>(q: IQuery): Promise<Array<T>>
  insertOne(q: IQuery): Promise<RunResult>
  update(q: IQuery): Promise<RunResult>
  del(q: IQuery): Promise<RunResult>
  
}

export { IDB, IQuery }