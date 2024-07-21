import React from 'react';
import './Footer.css';
import { FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiNaver } from 'react-icons/si';

export default function Footer() {
    return (
        <footer>
            <p>© 2024 안요한. 모든 권리를 보유.</p>
            <div className="footer-links">
                <a href="https://www.instagram.com/uncroos" target="_blank" rel="noopener noreferrer">
                    <FaInstagram /> 
                </a>
                <a href="https://github.com/uncroos" target="_blank" rel="noopener noreferrer">
                    <FaGithub /> 
                </a>
                <a href="https://www.linkedin.com/in/%EC%9A%94%ED%95%9C-%EC%95%88-b64a53315/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin /> 
                </a>
                <a href="https://blog.naver.com/uncroos" target="_blank" rel="noopener noreferrer">
                    <SiNaver />
                </a>
            </div>
        </footer>
    );
}
