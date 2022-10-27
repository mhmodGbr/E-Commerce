import React , { Component , Fragment } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './Components/Navigation/Navigation';
import Home from './Components/Home/Home';
import Men from './Components/Men/Men';
import Women from './Components/Women/Women';
import Contact from './Components/Contact/Contact';



class App extends Component {
  render(){
  return (

    
      
      <BrowserRouter>
                    
              <Navigation />

              <Routes>
                  <Route exact path='/Navigation' element={<Navigation />} />
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
