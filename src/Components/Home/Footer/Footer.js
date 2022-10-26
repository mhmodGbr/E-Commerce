import React from "react";
import { Link } from "react-router-dom";
import './Footer.css'


const Footer = () => {
    return(
        <div className="Footer" id="Footer">
            <div className="Links">
                <Link to='/Contact'>Contact</Link>
                <Link to='/'>Forum</Link>
                <Link to='/'>affiliate</Link>
                <Link to='/'>FAQ</Link>
            </div>

            <div className="social-icons">
                <div>
                    <a href="#"><i class="fa-brands fa-facebook"></i></a>
                    <a href="#"><i class="fa-brands fa-instagram"></i></a>
                    <a href="#"><i class="fa-brands fa-linkedin"></i></a>
                    <a href="#"><i class="fa-solid fa-phone"></i></a>
                    <a href="#"><i class="fa-brands fa-whatsapp"></i></a>
                </div>
            </div>
        </div>
    )
}

export default Footer;