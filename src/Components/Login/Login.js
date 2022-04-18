import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import React, { useContext } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import { auth } from '../../Firebase.init';
import "./Login.css"

const Login = () => {

  const navigate = useNavigate()
  const navigateSignup = (e) => { 
    e.preventDefault()
    navigate('/signup')
  }
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  let errorText="";
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth)

  if (user) {
    navigate(from, { replace: true });
}


  const handleLogin =  async (event)  => {
      event.preventDefault();
      const email = event.target.email.value;
    const password = event.target.password.value;
    console.log(email, password);
    await signInWithEmailAndPassword(email, password)
  }
  // console.log(error);
  // console.log(user);

  const provider = new GoogleAuthProvider();
  const signInWithGoogle = (e) => { 
    e.preventDefault()
    signInWithPopup(auth, provider)
      .then(result => {
        console.log(result.user)})
        .catch(err => {
          console.log(err.message);
        })
    
  }

    return (
      <>
        
        <h2 className='form-title text-center mt-5 mb-3'>Login</h2>
            <Form onSubmit={handleLogin}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control className='input-tag' type="email" name='email' placeholder="Enter email" required/>
    
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" className='input-tag' name='password' placeholder="Password" required/>
  </Form.Group>
  {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
          </Form.Group> */}
          
  <Button variant="primary" type="submit" value='login'> 
    Submit
  </Button>
        </Form>
        <button onClick={signInWithGoogle} className="googleSignIn">Google sign in</button>
        <p>Don't have an account?  <button onClick={navigateSignup} className='sign-btn'>Sign up</button></p>
            
        </>
    );
};

export default Login;