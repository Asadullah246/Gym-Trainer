import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import "./Navb.css"

const Navb = () => {
    return (
        <div>
              <Navbar bg="primary" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="me-3">
     
      <NavLink to="/home">Home</NavLink>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/Blogs">Blogs</NavLink>
      <NavLink to="/about">About</NavLink>
    </Nav>
    </Container>
            </Navbar>
           
            
        </div>
    );
};

 {/* <Nav.Link to="#home">Home</Nav.Link> */}

export default Navb;