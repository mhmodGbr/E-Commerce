import React , {Component, Fragment} from "react";
import { Link } from "react-router-dom";
import './Home.css';

import Header from "../Home/Header/Header";
import Feature from "../Home/Feature/Feature";
import Footer from "../Home/Footer/Footer";
import Navigation from "../Navigation/Navigation";

class Home extends Component {
    render() {
        return(
            <Fragment>
            <Navigation />
            <Header />
            <Feature />
            <Footer />
            
            </Fragment>
        )
    }
}
export default Home ;