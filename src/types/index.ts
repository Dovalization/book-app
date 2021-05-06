export type IBook = {
  id: string
  volumeInfo: {
    title: string
    authors: string[]
    description: string
    imageLinks: {
      thumbnail: string
    }
  }
}

export type IBooksList = {
  items: IBook[]
  totalItems: number
}
