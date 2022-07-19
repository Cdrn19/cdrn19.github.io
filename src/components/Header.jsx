import React from "react";
import CTA from "@components/CTA";
import HeaderSocial from "@components/HeaderSocial";
import ME from "@assets/images/me.png"
import '@styles/header.css';

const Header = () => {
    return (
        <header>
            <div className="container header__container">
                <h5>Hello, my name is Carlos Revetti</h5>
                <h1>FULLSTACK DEVELOPER</h1>
                <h5 className="text-light">lover of the world of technology and development</h5>
                <CTA />
                <HeaderSocial />
                <div className="me">
                    <img src={ME} alt="me" />
                </div>
                <a href="#footer" className="scroll__down">
                    Scroll Down
                </a>
            </div>
        </header>    
    )
} 

export default Header;