import React, { useContext } from 'react'
import { BooksContext } from '../../context/booksContext'
import { Container } from './styles'
import { DebounceInput } from 'react-debounce-input'

export const SearchBar: React.FC = () => {
  const { setSearchQuery, searchQuery } = useContext(BooksContext)

  return (
    <Container>
      <img src="/images/search-icon.svg" alt="Search" />
      <DebounceInput
        type="text"
        placeholder="Search Book"
        value={searchQuery}
        onChange={e => setSearchQuery(e.target.value)}
        onFocus={() => setSearchQuery('')}
        debounceTimeout={300}
      />
    </Container>
  )
}
