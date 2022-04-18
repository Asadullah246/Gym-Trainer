import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import "./Signup.css"
import { useAuthState, useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../../Firebase.init';

const Signup = () => {
  const navigateLogin = e => {
    e.preventDefault();
    navigate('/login');
  }
  const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [agree, setAgree] = useState();

    const navigate = useNavigate();

    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth,{sendEmailVerification: true})

    const handleEmailBlur = event =>{
        setEmail(event.target.value);
    }

    const handlePasswordBlur = event =>{
        setPassword(event.target.value);
    }

    const handleConfirmPasswordBlur = event =>{
        setConfirmPassword(event.target.value);
    }

    if(user){
        navigate('/');
    }

    const handleSubmit = event =>{
        event.preventDefault();
        if(password !== confirmPassword){
            setError('Your two passwords did not match');
            return;
        }
        if(password.length <6){
            setError('Password must be 6 characters or longer');
            return;
        }
        
        createUserWithEmailAndPassword(email, password);
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
        <div>
            <h2 className='text center mt-5 mb-3'>Sign up</h2>
             <Form onSubmit={handleSubmit}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Name</Form.Label>
    <Form.Control onBlur={handleEmailBlur} type="text" className='input-tag' placeholder="Enter name" required/>
    
          </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control onBlur={handleEmailBlur} type="email" className='input-tag' placeholder="Enter email" required/>
    
          </Form.Group>
          

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control onBlur={handlePasswordBlur} type="password" className='input-tag' placeholder="Password" required/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Confirm Password</Form.Label>
    <Form.Control onBlur={handleConfirmPasswordBlur} type="password" className='input-tag' placeholder="Confirm Password" required/>
  </Form.Group>
 
          <input type="checkbox" name="terms" id="" onClick={() => setAgree(!agree)} />
          <label className={`ps-2 ${agree ? 'agree' : 'notAgree'}`} for="terms">I agree to the terms and conditions</label>
         
          <p>{error} </p>
  <Button  disabled={!agree} variant="primary" type="submit" value='sign up'> 
    Submit
  </Button>
        </Form>
        <button onClick={signInWithGoogle} className="googleSignIn">google sign in</button>
            
            <p>Already have an account? <button onClick={navigateLogin} className="sign-btn">Login here</button></p>
            
        </div>
    );
};

export default Signup;