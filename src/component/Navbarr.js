import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {NavLink} from 'react-router-dom'


const Navbarr = () => {
  return (
        <Navbar sticky='top' className="bg-white shadow-sm mb-3">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link to="/" as={NavLink}>Home</Nav.Link>
            <Nav.Link to="store" as={NavLink}>Store</Nav.Link>
            <Nav.Link  to="about" as={NavLink}>About</Nav.Link>
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
  )
}

export default Navbarr
