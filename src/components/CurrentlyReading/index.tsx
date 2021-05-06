import Link from 'next/link'
import Image from 'next/image'

import React from 'react'
import { Container } from './styles'

export const CurrentlyReading: React.FC = () => {
  return (
    <Container>
      <div className="headingContainer">
        <h2>Currently Reading</h2>
        <Link href="" passHref>
          <a>More</a>
        </Link>
      </div>
      <div className="currentlyReadingBooks">
        <div className="book">
          <div className="bookCover">
            <Image
              src="/images/originals-book.jpg"
              width={88}
              height={130}
              layout="intrinsic"
            />
          </div>
          <div className="bookInfo">
            <strong>Originals</strong>
            <p>by Adam Grant</p>
            <div className="chapters">
              <img src="/images/chapter-icon.svg" alt="Chapters remaining" />
              <p>
                Chapter <span>2</span> From 9
              </p>
            </div>
            <img src="/images/waves.png" className="decor1" />
            <img src="/images/oval.svg" className="decor2" />
            <img src="/images/rectangle.svg" className="decor3" />
          </div>
        </div>
      </div>
    </Container>
  )
}
