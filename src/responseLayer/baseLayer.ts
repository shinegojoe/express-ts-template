import { ServerResp } from './serverResp'
import { RunResult } from 'better-sqlite3'


const baseLayer = function<T> (data: T) {
  const resp = new ServerResp(data)
  return resp
}

const sqlLayer = function (data: RunResult | undefined) {
  if(data !== undefined) {
    const res: string = data.changes === 1 ? 'sucess' : 'failed'
    return new ServerResp(res)
  }
}

export default { baseLayer, sqlLayer }