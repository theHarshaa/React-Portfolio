import React from "react";
import "./footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer_container container">
                <h1 className="footer_title">the.harshaa</h1>

                <ul className="footer_list">
                    <li>
                        <a href="#about" className="footer_link">About</a>
                    </li>
                    <li>
                        <a href="#projects" className="footer_link">Projects</a>
                    </li>
                    <li>
                        <a href="#education" className="footer_link">Education</a>
                    </li>
                </ul>

                <div className="footer_social">
                <a href="https://www.linkedin.com/in/harshaa11th/" className="footer_social-link" target="_blank">
            <i class="uil uil-linkedin"></i></a>
            <a href="https://www.facebook.com/harsh.singh.52687506" className="footer_social-link" target="_blank">
            <i class="uil uil-facebook"></i>
            </a>
            <a href="https://www.instagram.com/the.harshaa/" className="footer_social-link" target="_blank">
            <i class="uil uil-instagram-alt"></i>
            </a>
            <a href="https://github.com/harshaa11th" className="footer_social-link" target="_blank">
            <i class="uil uil-github"></i>
            </a>
                </div>

                <span className="footer_copy">&#169; the.harshaa</span>
            </div>
        </footer>
    )
}

export default Footer;