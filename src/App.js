import React , { Component , Fragment } from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from '../src/Components/Navigation/Navigation'
import Home from '../src/Components/Home/Home';
import Contact from '../src/Components/Contact/Contact';
import Men from '../src/Components/Men/Men';
import Women from './Components/Women/Women';


class App extends Component {
  render(){
  return (



    <BrowserRouter>

      
      
      
      
      

      <Routes>
        
        <Route exact path='/' element={<Home />} />
        <Route exact path='/Men' element={<Men />} />
        <Route exact path='/Women' element={<Women />} />
        <Route exact path='/contact' element={<Contact />} />
      </Routes>

      

    </BrowserRouter>



  );
}
}
export default App;
