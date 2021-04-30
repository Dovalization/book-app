import React from 'react'
import { Container } from './styles'
import { FiUser, FiBook, FiHome } from 'react-icons/fi'

export const NavBar: React.FC = () => {
  return (
    <Container>
      <div className="navContent">
        <a className="navItem">
          <FiHome width={16} height={18} />
          <p>Home</p>
        </a>
        <a className="navItem">
          <FiBook width={16} height={18} />
          <p>Libraries</p>
        </a>
        <a className="navItem">
          <FiUser width={16} height={18} />
          <p>Profile</p>
        </a>
      </div>
    </Container>
  )
}
