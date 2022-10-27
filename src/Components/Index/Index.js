import React , { Component , Fragment } from 'react';
import { BrowserRouter, Switch , Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from '../Navigation/Navigation';
import Home from '../Home/Home';
import Contact from '../Contact/Contact';
import Men from '../Men/Men';
import Women from '../Women/Women';



class Index extends Component {
    render(){
    return (

    

        

        <BrowserRouter>
                    <Fragment>
                        <Navigation />
                        <Routes>
                            <Route exact path='/Navigation' element={<Navigation />} />
                            <Route exact path='/' element={<Home />} />
                            <Route exact path='/Men' element={<Men />} />
                            <Route exact path='/Women' element={<Women />} />
                            <Route exact path='/contact' element={<Contact />} />
                        </Routes>
                    </Fragment>
                </BrowserRouter>



);
}
}
export default Index;