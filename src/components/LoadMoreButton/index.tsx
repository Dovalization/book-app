import React, { useContext } from 'react'
import { BooksContext } from '../../context/booksContext'
import { Button } from './styles'

export const LoadMoreButton: React.FC = ({ children }) => {
  const { fetchMoreBooks } = useContext(BooksContext)
  return <Button onClick={() => fetchMoreBooks()}>{children}</Button>
}
