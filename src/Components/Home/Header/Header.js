import React from "react";
import './Header.css'
import { Link } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';

const Header = () => {
    return(
        <div className='Home-container'>

            <Nav className="ms-auto" id="link">
                <a href='#Feature'>Feature</a>
                <a href='#products'>FAQ</a>
                <a href='#Footer'>about</a>
                
            </Nav>

                <div className="text">
                    <h1>Sportive & Classic Life</h1>
                    <p>Don't Miss Out! To celebrate the release of Font Awesome Sharp,<br/> get $20 off a new Pro subscription until October 31st!</p>
                    <Link to='/Contact'>
                    <Button variant="primary" size="lg" active>
                        Contact US
                    </Button>
                    </Link>
                </div>
        </div>
    )
}

export default Header;

