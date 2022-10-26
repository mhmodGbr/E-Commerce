import React from "react";
import { Link } from "react-router-dom";
import './Navigation.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Navigation = () => {
    return(
        
        <Navbar  className="Navigation"  expand="lg">
        <Container className="nav-container">
            <Navbar.Brand className="logo" href="#">Vens</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                <Link to='/'>Home</Link>
                <Link to='/Men'>Men</Link>
                <Link to='/Women'>Women</Link>
                <Link to='/Contact'>Contact</Link>
                </Nav>
            </Navbar.Collapse>
            </Container>
            
        </Navbar>
        
        
    )
}

export default Navigation ;
