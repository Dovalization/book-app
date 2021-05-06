import React, { useEffect, useState } from 'react'
import { IBook } from '../../types/index'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Container } from '../../styles/pages/books/Book'
import axios from 'axios'
import { ContextualNavBar } from '../../components/ContextualNavBar'
import { FiArrowLeft } from 'react-icons/fi'
import { route } from 'next/dist/next-server/server/router'

const Book: React.FC = () => {
  const [book, setBook] = useState<IBook>(null)
  const router = useRouter()
  const { id } = router.query

  useEffect(() => {
    async function fetchBook() {
      await axios
        .get(`https://www.googleapis.com/books/v1/volumes/${id}`)
        .then(res => setBook(res.data))
    }

    fetchBook()
  }, [id])

  return (
    <Container>
      <div className="header">
        <img src="/images/pink-solid-oval.svg" className="decor1" />
        <img src="/images/blue-solid-oval.svg" className="decor2" />
        <img src="/images/oval.svg" className="decor3" />
        <img src="/images/waves.png" className="decor4" />
        <Link href="/" passHref>
          <a>
            <FiArrowLeft size={32} color="black" />
          </a>
        </Link>
      </div>
      <div className="bookCover">
        <Image
          src={
            book?.volumeInfo.imageLinks
              ? book.volumeInfo.imageLinks?.thumbnail
              : '/images/no-cover.jpg'
          }
          width={153}
          height={229}
        />
      </div>
      <div className="content">
        <h1>{book?.volumeInfo.title}</h1>
        <span>{book?.volumeInfo.authors}</span>
        <p
          dangerouslySetInnerHTML={{
            __html: `${book?.volumeInfo.description}`,
          }}
        ></p>
      </div>
      <ContextualNavBar />
    </Container>
  )
}

export default Book
