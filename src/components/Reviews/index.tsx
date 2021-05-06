import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import { Container } from './styles'

export const Reviews: React.FC = () => {
  return (
    <Container>
      <div className="headingContainer">
        <h2>Reviews of The Days</h2>
        <Link href="" passHref>
          <a>All Video</a>
        </Link>
      </div>
      <div className="reviews">
        <Link href="https://youtu.be/vBzBgewl4ac" passHref>
          <a target="_blank">
            <div className="review">
              <Image
                src="/images/review-thumbnail.jpg"
                layout="responsive"
                width={340}
                height={181}
              />
              <div className="reviewInfo">
                <h3>Don't Make Me Think - Steve Krug</h3>
                <div className="stats">
                  <span>Jesse Showalter</span>
                  <span>5.2K Views</span>
                  <span>1 Week</span>
                </div>
                <p>
                  "Don't Make Me Think" by Steve Krug is one of the first books
                  I read when I was getting into digital design. It helped me
                  move from designing things that just "look nice" to designing
                  things that are usable, useful, memorable and simple to learn
                  and use.
                </p>
              </div>
            </div>
          </a>
        </Link>
      </div>
    </Container>
  )
}
