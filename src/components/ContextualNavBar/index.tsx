import React from 'react'
import { Container } from './styles'
import { FiHeadphones, FiBookOpen, FiShare } from 'react-icons/fi'

export const ContextualNavBar: React.FC = () => {
  return (
    <Container>
      <a className="navItem">
        <FiBookOpen size={16} />
        <p>Read</p>
      </a>
      <a className="navItem">
        <FiHeadphones size={16} />
        <p>Listen</p>
      </a>
      <a className="navItem">
        <FiShare size={16} />
        <p>Share</p>
      </a>
    </Container>
  )
}
