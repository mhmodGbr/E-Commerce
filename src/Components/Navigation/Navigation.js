import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import './Navigation.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Home from "../Home/Home";


const Navigation = () => {
    return(


        <Fragment>
        <Navbar  className="Navigation"  expand="lg">
        <Container className="nav-container">
            <Navbar.Brand className="logo" href="#">Vens</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                <Link to='/Navigation'>Navigation</Link>
                <Link to='/'>Home</Link>
                <Link to='/Men'>Men</Link>
                <Link to='/Women'>Women</Link>
                <Link to='/Contact'>Contact</Link>
                </Nav>
            </Navbar.Collapse>
            </Container>
            
        </Navbar>

        
        </Fragment>
        
        
    )
}

export default Navigation ;
