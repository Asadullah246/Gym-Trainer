import React, { useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import "./Signup.css"
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '../../../Firebase.init';
import { async } from '@firebase/util';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    // const [confirmPassword, setConfirmPassword] = useState('');
    const [error2, setError] = useState(null);
    const [loading2, setLoading] = useState(false);

    const navigate=useNavigate()

    const [
        createUserWithEmailAndPassword,
        user,
        loading, error
    ] = useCreateUserWithEmailAndPassword(auth,{sendEmailVerification: true});

    const emailRef=useRef('')
    const passwordRef=useRef('')
    const confirmPasswordRef = useRef('')

    
    const handleSubmit =async event => { 
        event.preventDefault();
        setLoading(true);
        setError(null);
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const confirmPassword = confirmPasswordRef.current.value;
        
        if (password !== confirmPassword && password.length <5)  { 
            setError("password and confirm password not match or password length is less than 6");
            return;
        }
        await createUserWithEmailAndPassword(email, password)
                .then(() => {
                    console.log("done");
                })
                .catch(error => {
                    setError(error.message);
                })
                navigate('/login');
        
        
        

        
    

        // try {
        //     const userCredential = await auth.createUserWithEmailAndPassword(email, password);
        //     console.log(userCredential)
        //     setLoading(false);
        //     setEmail('');
        //     setPassword('');
        //     setConfirmPassword('');
        // } catch (error) {
        //     setLoading(false);
        //     setError(error);
        // }
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
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <p>{error2}{ error2?.message}</p>
  <Button variant="primary" type="submit" value='login'> 
    Submit
  </Button>
            </Form>
            
            <p>Already have an account? <button>Login here</button></p>
            
        </div>
    );
};

export default Signup;