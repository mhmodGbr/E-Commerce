import React , {Component, Fragment} from "react";
import { Link } from "react-router-dom";
import './Home.css';

import Header from "../Home/Header/Header";
import Feature from "../Home/Feature/Feature";
import Footer from "../Home/Footer/Footer";

class Home extends Component {
    render() {
        return(
            <Fragment>

            <Header />
            <Feature />
            <Footer />
            
            </Fragment>
        )
    }
}
export default Home ;