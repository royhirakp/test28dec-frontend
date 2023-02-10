// import logo from './logo.svg';
import React from 'react'
import './App.css';
import Login from './components/login/Login';
import Register from './components/register/Register';
import Home from './components/home/Home';
import Create from './components/create/Create';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
// import Form from './components/Form'
// import Loader from './components/card/Loder';
function App() {
  return (
    <div className="App">
         {/* <Form/>   */}
         {/* <Loader/> */}
         <BrowserRouter>
              <Routes>
                <Route path='/' element ={<Login/>}/>
                <Route path='/register' element ={<Register/>}/>
                <Route path='/home' element ={<Home/>}/>
                <Route path='/create' element ={<Create/>}/>
              </Routes>
          </BrowserRouter>
    </div>
  );
}

export default App;
