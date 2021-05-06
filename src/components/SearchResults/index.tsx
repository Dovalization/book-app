import React, { useContext } from 'react'
import { BooksContext } from '../../context/booksContext'
import { BookCard } from '../BookCard'
import { IBook } from '../../types/index'
import { Container } from './styles'

export const SearchResults = () => {
  const { books } = useContext(BooksContext)

  return (
    <Container>
      {books.items?.map((book: IBook) => (
        <BookCard
          coverUrl={
            book.volumeInfo.imageLinks
              ? book.volumeInfo.imageLinks.thumbnail
              : '/images/no-cover.jpg'
          }
          authors={book.volumeInfo.authors}
          title={book.volumeInfo.title}
          id={book.id}
          key={book.id}
        />
      ))}
    </Container>
  )
}
