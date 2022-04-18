import React from 'react';
import './About.css'
import logo from '../../images/mypic.png'

const About = () => {
    return (
        <div>
            <div className='img-div'>
            <img className='mypic' src={logo} alt="" />
            </div>
            <div className='details'>
                <h3 className='mt-5 mb-3'>Hellow, I am Asadullah</h3>
                <p className='text-start'>I am going to tell something about me and my aim. Currently I am student and I read in BSc. Beside that, I am learning Web development. I want to be an expert programmer and I am going to my aim. I work hard reach to my destination. I hope I can touch this. I am developing my skills on some special Programming languages like C, PYTHON and JAVASCRIPT. I want to give services to the world famous organization like Google Apple etc. So I am going to next days with the preparaion and the preparation is to reach my goal. </p>
            </div>

            
        </div>
    );
};

export default About;