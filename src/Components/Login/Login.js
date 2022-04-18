import {  } from 'bootstrap';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import { auth } from '../../Firebase.init';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import "./Login.css"

const Login = () => {

  const navigate = useNavigate()
  const navigateSignup = (e) => { 
    e.preventDefault()
    navigate('/signup')
  }
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  const [email, setEmail] = useState('');
  const emailBlur = e => {
    setEmail(e.target.value);
  }
  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(
    auth
  );

  
  const resetPassword = async (event) => {
  
    if (email) {
      await sendPasswordResetEmail(email);
      toast('Sent email');
    }
    else{
      toast('please enter your email address');
    }
}
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

  const provider = new GoogleAuthProvider();
  const signInWithGoogle = (e) => { 
    e.preventDefault()
    signInWithPopup(auth, provider)
      .then(result => {
        navigate('/')
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
    <Form.Control className='input-tag' onBlur={emailBlur} type="email" name='email' placeholder="Enter email" required/>
    
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" className='input-tag' name='password' placeholder="Password" required/>
  </Form.Group>
          
  <Button variant="primary" type="submit" value='login'> 
    Submit
  </Button>
        </Form>
        <ToastContainer />
        <p>Forget password ? <button onClick={resetPassword} className='sign-btn'>Reset password</button></p>
        <button onClick={signInWithGoogle} className="googleSignIn">Google sign in</button>
        <p>Don't have an account?  <button onClick={navigateSignup} className='sign-btn'>Sign up</button></p>
            
        </>
    );
};

export default Login;