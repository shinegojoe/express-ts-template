import { ServerResp } from './serverResp'
import { RunResult } from 'better-sqlite3'


export type AddRes = {
  msg: string,
  insetId?: Number
}

const baseLayer = function<T> (data: T) {
  const resp = new ServerResp(data)
  return resp
}

const updateLayer = function (data: RunResult | undefined) {
  if(data === undefined) {
   return 
  }
  const res: string = data.changes === 1 ? 'success' : 'failed'
  return new ServerResp(res)
}

const delLayer = updateLayer


const addLayer = function (data: RunResult | undefined) {
  if(data === undefined) {
    return
  }

  if(data.changes ===0) {
    const res: AddRes = {
      msg: 'data already exist'
    }
    return new ServerResp(res)
  } else {
    const res: AddRes = {
      msg: 'success',
      insetId: data.lastInsertRowid as Number
    }
    return new ServerResp(res)
  }
}

export default { baseLayer, updateLayer, addLayer, delLayer }