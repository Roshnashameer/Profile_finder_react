import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div class="d-flex justify-content-center">
        
    <Navbar className="bg-body-tertiary  ">
    <Container>
      <Navbar.Brand >
        <Link to={"/"}>
        <img
          alt=""
          src="https://i.postimg.cc/G3gRQ7Sz/profile-finder-1545042-1315685.png"
          width="35"
          height="35"
          className="d-inline-block align-top"
        />
        </Link>{' '}
       
       <span class="navbar-brand" href="#">Profile Finder</span>
        
      </Navbar.Brand>
    </Container>
  </Navbar></div>
  )
}

export default Header