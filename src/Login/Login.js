import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import "./Login.css"

const Login = () => {
  const navigate = useNavigate()
  const navigateSignup = () => { 
    navigate('/signup')
  }

    return (
      <>
        
        <h2 className='form-title text-center mt-5 mb-3'>Login</h2>
            <Form >
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" required/>
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" required/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit" value='login'> 
    Submit
  </Button>
        </Form>
        <p>Don't have an account? <button onClick={navigateSignup} className='signup-btn'>Sign up here</button></p>
            
        </>
    );
};

export default Login;