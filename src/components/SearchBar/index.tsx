import React from 'react'
import { Container } from './styles'

export const SearchBar: React.FC = () => {
  return (
    <Container>
      <img src="/images/search-icon.svg" alt="Search" />
      <input type="text" placeholder="Search Book" />
    </Container>
  )
}
