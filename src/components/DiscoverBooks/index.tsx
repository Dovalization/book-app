import React from 'react'
import { Container } from './styles'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

export const DiscoverBooks: React.FC = () => {
  return (
    <Container>
      <div className="headingContainer">
        <h2>Discover new book</h2>
        <Link href="" passHref>
          <a>More</a>
        </Link>
      </div>
      <motion.div
        drag="x"
        dragConstraints={{ left: -280, right: 0 }}
        className="discoverBooks"
      >
        <div className="book variantOne">
          <div className="bookInfo">
            <strong>Hooked</strong>
            <p>Nir Eyal</p>
            <div className="readCount">
              <img src="/images/read-count.svg" alt="Reading count" />
              <strong>120+</strong>
              <p>Read now</p>
            </div>
          </div>
          <div className="bookCover">
            <Image
              src="/images/hooked-book.jpg"
              width={73}
              height={109}
              layout="fixed"
            />
          </div>
          <img src="/images/triangle.svg" alt="" className="decor1" />
          <img src="/images/rectangle.svg" alt="" className="decor2" />
          <img src="/images/oval.svg" alt="" className="decor3" />
          <img src="/images/waves.png" alt="" className="decor4" />
        </div>
        <div className="book variantTwo">
          <div className="bookInfo">
            <strong>The One Thing</strong>
            <p>Garry Keller</p>
            <div className="readCount">
              <img src="/images/read-count.svg" alt="Reading count" />
              <strong>90+</strong>
              <p>Read now</p>
            </div>
          </div>
          <img src="/images/waves.png" alt="" className="decor4" />
        </div>
      </motion.div>
    </Container>
  )
}
