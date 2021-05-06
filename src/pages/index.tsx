import React, { useContext } from 'react'
import Head from 'next/head'
import { ContentContainer } from '../styles/pages/Home'
import { NavBar } from '../components/NavBar'
import { SearchBar } from '../components/SearchBar'
import { DiscoverBooks } from '../components/DiscoverBooks'
import { CurrentlyReading } from '../components/CurrentlyReading'
import { Reviews } from '../components/Reviews'
import { SearchResults } from '../components/SearchResults'
import { LoadMoreButton } from '../components/LoadMoreButton'
import { BooksContext } from '../context/booksContext'

const Home: React.FC = () => {
  const { isLoading, books, displayBooks } = useContext(BooksContext)
  return (
    <div>
      <Head>
        <title>Book App</title>
      </Head>

      <ContentContainer>
        <SearchBar />
        {displayBooks ? (
          <>
            <SearchResults />
            <LoadMoreButton>Load More</LoadMoreButton>
          </>
        ) : (
          <>
            <div className="greeting">
              <h1>
                Hi, <span className="userName">Mehmed Al Fatih</span>
              </h1>
              <span className="greetingEmoji">👋</span>
            </div>

            <DiscoverBooks />
            <CurrentlyReading />
            <Reviews />
          </>
        )}

        <NavBar />
      </ContentContainer>
    </div>
  )
}

export default Home
