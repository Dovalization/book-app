import React, {
  createContext,
  useEffect,
  useState,
  useCallback,
  ReactNode,
} from 'react'

import { api } from '../services/api'
import { IBooksList } from '../types/index'

export const BooksContext = createContext(null)

interface IBooksContextProps {
  children: ReactNode
}

export const BooksProvider = ({ children }: IBooksContextProps) => {
  const [searchQuery, setSearchQuery] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [books, setBooks] = useState<IBooksList>(null)
  const [displayBooks, setDisplayBooks] = useState(false)
  const [bookCount, setBookCount] = useState(10)

  const fetchBooks = useCallback(async () => {
    setIsLoading(true)

    try {
      const response = await api.get(searchQuery)
      setBooks(response.data)
      setIsLoading(false)
    } catch (error) {
      console.log(error)
    }
  }, [searchQuery])

  const fetchMoreBooks = useCallback(async () => {
    setIsLoading(true)
    setBookCount(bookCount + 10)
    const updatedBooks = books

    try {
      const response = await api.get(`${searchQuery}&startIndex=${bookCount}`)
      updatedBooks.items.push(...response.data.items)
      setBooks(updatedBooks)
      setIsLoading(false)
    } catch (error) {
      setIsLoading(false)
      console.log(error)
    }
  }, [bookCount, books, searchQuery])

  useEffect(() => {
    if (searchQuery === '') {
      setIsLoading(false)
      setBooks(null)
      setDisplayBooks(false)
      setBookCount(10)
    }

    if (searchQuery.trim() != '') {
      fetchBooks()
    }
  }, [searchQuery, fetchBooks])

  useEffect(() => {
    if (books?.totalItems > 0) {
      console.log(books)
      return setDisplayBooks(true)
    }
    setDisplayBooks(false)
    if (books?.totalItems <= 0) {
      alert('No books matching search criteria')
    }
  }, [books])

  return (
    <BooksContext.Provider
      value={{
        books,
        setBooks,
        searchQuery,
        setSearchQuery,
        isLoading,
        displayBooks,
        setDisplayBooks,
        fetchMoreBooks,
      }}
    >
      {children}
    </BooksContext.Provider>
  )
}
