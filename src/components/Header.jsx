import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
    <Navbar className="bg-info">
        <Container>
          <Link to={'/'} className='text-decoration-none'>
          <Navbar.Brand style={{color:"white",}}>
          <i class="fa-solid fa-music me-2"></i>
            Media player
          </Navbar.Brand>
          </Link>
        </Container>
      </Navbar>
    </>
  )
}

export default Header