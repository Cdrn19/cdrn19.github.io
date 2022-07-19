import React from "react";
import "@styles/footer.css";
import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { IoLogoTwitter } from "react-icons/io";

const Footer = () => {
    const copyright = new Date();
    const currentYear = copyright.getFullYear();

    return (
        <footer id="footer">
            <a href="#" className="footer__logo">
                CARLOS REVETTI
            </a>
            <ul className="permalinks">
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#about">About</a>
                </li>
                <li>
                    <a href="#experience">Experience</a>
                </li>
                <li>
                    <a href="#services">Services</a>
                </li>
                <li>
                    <a href="#portfolio">Portfolio</a>
                </li>
                <li>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
            <div className="footer__socials">
                <a href="https://facebook.com/">
                    <FaFacebookF />
                </a>
                <a href="https://instagram.com/">
                    <FiInstagram />
                </a>
                <a href="https://twitter.com/">
                    <IoLogoTwitter />
                </a>
            </div>
            <div className="footer__copyright">
                <small>Copyright &copy; {currentYear} <b>Carlos Revetti</b>. All rights reserved.</small>
            </div>
        </footer>
    )
};

export default Footer;