import React, { useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import "./Signup.css"
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '../../../Firebase.init';
import { async } from '@firebase/util';
import { useNavigate } from 'react-router-dom';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const Signup = () => {
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    // const [confirmPassword, setConfirmPassword] = useState('');
  
    const navigate=useNavigate()
  
  const navigateLogin = e => {
    e.preventDefault();
    navigate('/login')
  }
    // const [error2, setError] = useState(null);
    // const [loading2, setLoading] = useState(false);

    

    const [
        createUserWithEmailAndPassword,
        user,
        loading, error
  ] = useCreateUserWithEmailAndPassword(auth);
  
  // ,{sendEmailVerification: true}

    const emailRef=useRef('')
    const passwordRef=useRef('')
    const confirmPasswordRef = useRef('')

    
    const handleSubmit =async (event) => { 
        event.preventDefault();
        // setLoading(true);
        // setError(null);
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
      const confirmPassword = confirmPasswordRef.current.value;
      console.log(email, password, confirmPassword);
        
        // if (password !== confirmPassword && password.length <5)  { 
        //     setError("password and confirm password not match or password length is less than 6");
        //     return;
        // }
        await createUserWithEmailAndPassword(email, password)
                // .then((result) => {
                //     console.log(result.user);
                // })
                // .catch(e => {
                //     setError(e.message);
                // })
                // navigate('/login');
      console.log(user , error);
        
        
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
    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required/>
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control ref={passwordRef} type="password" placeholder="Password" required/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Confirm Password</Form.Label>
    <Form.Control ref={confirmPasswordRef} type="password" placeholder="Confirm Password" required/>
  </Form.Group>
  {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group> */}
                <p>{ error?.message}</p>
  <Button variant="primary" type="submit" value='login'> 
    Submit
  </Button>
        </Form>
        <button onClick={signInWithGoogle}>sign up with google</button>
            
            <p>Already have an account? <button onClick={navigateLogin}>Login here</button></p>
            
        </div>
    );
};

export default Signup;