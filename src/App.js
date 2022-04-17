
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navb from './Components/Navbar-component/Navb';
import Signup from './Components/Navbar-component/Signup/Signup';
import Home from './Home/Home';
import Login from './Login/Login';



function App() {

  return (
  
    <div className="App">
      {/* <Navbar></Navbar> */}
      <Navb></Navb>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
      </Routes>
    

    </div>
  );
  
}



export default App;
