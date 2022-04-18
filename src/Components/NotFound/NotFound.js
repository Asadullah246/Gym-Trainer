import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./NotFound.css"

const NotFound = () => {
    const navigate=useNavigate()

    const goToHome = (e) => { 
        e.preventDefault();
        navigate('/')
      }
    
    return (
        <div className='notFound'>
            
            <h1 className='text-center'>404</h1>
            <p className='text-center'>The page you have tried not found</p>
            <button onClick={goToHome} className="notFound-btn text-center">Go to home</button>
        </div>
    );
};

export default NotFound;