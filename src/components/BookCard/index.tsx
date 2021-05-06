import React from 'react'
import { Container } from './styles'
import Image from 'next/image'
import Link from 'next/link'

interface IBookCardProps {
  coverUrl?: string
  title: string
  authors: string[]
  id: string
}

export const BookCard: React.FC<IBookCardProps> = ({
  coverUrl,
  title,
  authors,
  id,
}) => {
  return (
    <Container>
      <Link href={`/book/${id}`} passHref>
        <a>
          <div className="coverContainer">
            <Image src={coverUrl} width={100} height={150} />
          </div>
        </a>
      </Link>

      <strong className="bookTitle">{title}</strong>
      <p className="bookAuthors">{`by ${authors}`}</p>
    </Container>
  )
}
