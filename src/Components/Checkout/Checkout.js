import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import "./Checkout.css"

const Checkout = () => {
    // const {id} = useParams();
    const [data2, setData] = useState([]);
    const id =parseInt(localStorage.getItem('id'));
    console.log(id);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(user => 
                setData(user) 
        )
    }, [id])
    console.log(data2);
    const handleSubmit = (e) => { 
        e.preventDefault();
        alert('Your order has been placed successfully');
    }
    return (
        <div>
            
            <div className='checkout-div'>
                <h3 className='text-center fw-bold mt-5'>Package details</h3>
                {
                    data2.map(data => {
                        if (data.id === id) {
                            return (
                                <div className='package-details'>
                                <p><strong>Package name</strong> : { data.name}</p>
                                <p><strong>Description</strong> : { data.description}</p>
                                <p><strong>Price</strong> : { data.price}$</p>
                            </div>
                            ) 
                            
                        }
                    })
                }
                <h5 className='text-center mt-4 mb-3'>Please fill up the form</h5>

            <Form className='form-div' onSubmit={handleSubmit}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Control className='input-tag'  type="Name" name='Name' placeholder="Enter Name" required/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Control className='input-tag' type="text" name='address' placeholder="Enter address" required/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Control className='input-tag' type="email" name='email' placeholder="Enter email" required/>
  </Form.Group>
  
  <Button variant="primary" type="submit" value='submit'> 
    Submit
  </Button>
        </Form>

        </div>
        </div>
    );
};

export default Checkout;