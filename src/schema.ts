

export type Page = {
  id?: number
  name: string
}

export type Text = {
  id?: number
  vId: number
  text: string
}


export type Vocabulary = {
  id?: number
  vocabulary: string
  checked: number
  pageId: number
}

export type Translate = {
  id?: number
  vocabulary: string
  text: string
}

export type Script = {
  id?: number
  name: string,
  text: string
}
