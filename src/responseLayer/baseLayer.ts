import { ServerResp } from './serverResp'
import { RunResult } from 'better-sqlite3'


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
    return new ServerResp('data already exist')
  } else {
    return new ServerResp('success')
  }
}

export default { baseLayer, updateLayer, addLayer, delLayer }