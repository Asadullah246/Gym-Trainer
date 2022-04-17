import React, { useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import "./Signup.css"
import { useAuthState, useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '../../../Firebase.init';
import { async } from '@firebase/util';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const Signup = () => {
    // const navigate=useNavigate()
  
  const navigateLogin = e => {
    e.preventDefault();
  }
  // const [user, setUser] = useAuthState(auth)
  
  // const [error, setError]=useState("")
  // //   const [
  // //       createUserWithEmailAndPassword,
  // //       user2,
  // //       loading, error
  // // ] = useCreateUserWithEmailAndPassword(auth);

  //   const emailRef=useRef('')
  //   const passwordRef=useRef('')
  // // const confirmPasswordRef = useRef('')
  // const email = emailRef.current.value;
  //       const password = passwordRef.current.value;
  // // const confirmPassword = confirmPasswordRef.current.value;
  // const [createUserWithEmailAndPassword, user2] = useCreateUserWithEmailAndPassword(auth)

  

    
  //   const handleSubmit =event => { 
  //       event.preventDefault();
  //       createUserWithEmailAndPassword( email, password)
  //       // .then((result) => {
  //       //   // setUser(result.user)
  //       //   console.log(result.user);
  //       // })
  //       // .catch((error) => { 
  //       //   setError(error.message)
  //       // })
        
  // }
  const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
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
        navigate('/login');
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
    <Form.Label>Email address</Form.Label>
    <Form.Control onBlur={handleEmailBlur} type="email" placeholder="Enter email" required/>
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control onBlur={handlePasswordBlur} type="password" placeholder="Password" required/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Confirm Password</Form.Label>
    <Form.Control onBlur={handleConfirmPasswordBlur} type="password" placeholder="Confirm Password" required/>
  </Form.Group>
          
  {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group> */}
          {/* <p>{ error?.message}</p> */}
          <p>{error} </p>
  <Button variant="primary" type="submit" value='sign up'> 
    Submit
  </Button>
        </Form>
        <button onClick={signInWithGoogle}>sign up with google</button>
            
            <p>Already have an account? <button onClick={navigateLogin}>Login here</button></p>
            
        </div>
    );
};

export default Signup;