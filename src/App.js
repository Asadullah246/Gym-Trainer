
import { createContext, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Checkout from './Components/Checkout/Checkout';
import Blogs from './Components/Navbar-component/Blogs/Blogs';
import Navb from './Components/Navbar-component/Navb';
import Signup from './Components/Navbar-component/Signup/Signup';
import RequireAuth from './Components/RequireAuth';
import Home from './Home/Home';
import Login from './Login/Login';

export const MyContext = createContext();



function App() {
  const [userData, setUserData] = useState([]);

  return (
  
    <MyContext.Provider value={[userData, setUserData]}>
      <div className="App">
      {/* <Navbar></Navbar> */}
      <Navb></Navb>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/checkout" element={
          <RequireAuth>
            <Checkout></Checkout>
          </RequireAuth>
        }></Route>
      </Routes>
    

    </div>
    </MyContext.Provider>
  );
  
}



export default App;
