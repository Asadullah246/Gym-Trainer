import React, { useEffect, useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink, useNavigate } from 'react-router-dom';
import "./Home.css"

const Home = () => {
    const [data, setData] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
        .then(data => setData(data))
    }, [])
    
    const checkout = (id) => { 
        navigate(`/checkout`)
        // navigate(`/checkout/${id}`)
        localStorage.setItem('id', id);
    }
    return (
        <>
             

            {/* heading section  */}

            <header className='header'>
                <div className='header-text'>
                <h1>Your Personal Trainer</h1>
                <h5>Get the best gym trains</h5>
                </div>
            </header>

            {/* main section  */}

            <main >
                <h2 className='package-heading'>Our Packages</h2>
                <div className="container">
                    <div className="row">
                       
                            {
                                data.map(singlePackage => {
                                    return (
                                        <div className="col-md-4">
                                            <div className="card card-div">
                                                <div className="card-body card-section">
                                                    <div className='img-div'><img className='card-img' src={singlePackage.image} alt="" /></div>
                                                    <h5 className="card-title">{singlePackage.name}</h5>
                                                    <p className="card-text"><span>Price :</span> ${singlePackage.price}</p>
                                                    <p className="card-text description"><span>Description :</span>{singlePackage.description}</p>
                                                    <button onClick={()=>checkout(singlePackage.id)} className="btn btn-primary checkout-button">Checkout</button>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                                

                       

                    </div>
                </div>

                <div className='fitness-structure'>
                    <h3>I FOLLOW MY 5 KEY PILLARS OF FITNESS TO GET YOU IN TOP CONDITION</h3>

                    <div className=' container '>
                        <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 all-pillers'>
                            <div className=''>
                                <h4>Posture</h4>
                                <p>Correcting your posture will reduce stress and strain on your body. You’ll  stand taller, move better, and feel less fatigue.</p>
                            </div>
                            <div>
                                <h4>Mobility</h4>
                                    <p>Good mobility allows your body to move the way it was designed to move – pain free and with a good range of motion.</p>
                                
                            </div>
                            <div>
                                <h4>Core</h4>
                                <p>Your core is part of almost every move you make. Strong core muscles act as a stabilizer, making moving safer and more efficient.</p>
                            </div>
                            <div>
                                <h4>Strength</h4>
                                <p>Strength training helps you develop strong bones, manage weight and help you do everyday activities better and easier.</p>
                            </div>
                            <div>
                                <h4>Cardio</h4>
                                <p>Improving your cardio will strengthen your stamina and endurance so you can work harder for long and burn more calories.</p>
                            </div>
                        </div>
                    </div>
                </div>

            </main>

            {/* footer section  */}

            <footer className='d-flex footer'>
                <div>
                    <small>All right reserved &copy; 2022</small>
                </div>
                <div><small>For any problem or suggestion, please mail us </small> <br />
                <strong>something@hotmail.com</strong>
                </div>
            </footer>
            
        </>
    );
};

export default Home;