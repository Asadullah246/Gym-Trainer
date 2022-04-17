import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink } from 'react-router-dom';
import { auth } from '../../Firebase.init';
import "./Navb.css"

const Navb = () => {
    const [user] = useAuthState(auth);
    return (
        <div>
              <Navbar bg="primary" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="me-3">
     
                        <NavLink to="/home">Home</NavLink>
                        {
                            user?.uid ? <button className='signOut-button' onClick={()=>signOut(auth)}>Sign out</button> :<NavLink to="/login">Login</NavLink>
                        }
      
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