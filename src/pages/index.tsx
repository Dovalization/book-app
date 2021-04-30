import React from 'react'
import Head from 'next/head'
import { ContentContainer } from '../styles/pages/Home'
import { NavBar } from '../components/NavBar'
import { SearchBar } from '../components/SearchBar'

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Book App</title>
      </Head>

      <ContentContainer>
        <SearchBar />
        <div className="greeting">
          <h1>
            Hi, <span className="userName">Mehmed Al Fatih</span>
          </h1>
          <span className="greetingEmoji">👋</span>
        </div>

        <NavBar />
      </ContentContainer>
    </div>
  )
}

export default Home
