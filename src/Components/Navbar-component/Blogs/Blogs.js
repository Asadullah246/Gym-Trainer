import React from 'react';
import "./Blogs.css"

const Blogs = () => {
    return (
        <div className='blogs'>
            <div className='text-start'>
                <h2>Difference between authorization and authentication</h2>

                <ul><strong>Authorization</strong>
                    <li>What resources a user can access, authorization determines that</li>
                    <li>It work through the setting that are maintained and implemented by the organization</li>
                    <li>It always take Place after authentication</li>
                    <li>It is not visible or changeable by the user</li>
                   
                </ul>

                <ul> <strong>Authentication</strong>:
                    <li>Authentication varifies the user</li>
                    <li>It works through one time pins, passwords and other information provided by the user</li>
                    <li>It is visible and changeable by the user</li>
                    <li>it is the first step of access management process and a good identity</li>
                    
                </ul>

               
            </div>
            
            <div className='text-start'>
                <h2>Importants of firebase</h2>
                <p>Firebase is most used for authentication. Because it have more good Advantage than the others.It provides backend services, easy to use SDKs and ready made ui libraries. Besides, It supports authentication using passwords, phone numbers, popular federated identity providers like google , facebook etc.</p><br />
                <p>Alternatively, We can use Parse, Back4app, kinvey, Backendless, Kuzzle, Heroku etc.</p>
            </div>
            <div className='text-start'>
                <h2>The other services firebase do without authentication</h2>
                <ul>
                    <li>Cloud FireStore</li>
                    <li>Hosting</li>
                    <li>Google analytics</li>
                    <li>Predictions</li>
                    <li>Cloud messaging</li>
                    <li>Cloud storage</li>
                    <li>Cloud functions</li>
                    <li>Dynamic links</li>
                    <li>Remote config</li>
                </ul>
            </div>

            
        </div>
    );
};

export default Blogs;