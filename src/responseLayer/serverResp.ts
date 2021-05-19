

interface IResp {
  resp<T>(data: T): ServerResp<T>
}

class ServerResp<T> {
  status: string
  data: T
  constructor(data: T, status: string = 'ok') {
    this.data = data
    this.status = status
  }
}

export { ServerResp, IResp }
