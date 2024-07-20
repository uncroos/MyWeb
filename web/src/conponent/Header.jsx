import React, { useState } from 'react';
import './Header.css';

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header>
            <div className="main-title">
                <h1>안요한</h1>
                <p>서울로봇고등학교 첨단로봇시스템과</p>
                <p>머신러닝 개발자</p>
            </div>
            <div className="menu-bar" id="menuBar" onClick={toggleMenu}>
                <div className="menu-icon">&#9776;</div>
                <div className={`menu-content ${menuOpen ? 'open' : ''}`} id="menuContent">
                    <a href="index.html">Home</a>
                    <a href="menu.html">AboutMe</a>
                    <a href="https://www.instagram.com/uncroos" target="_blank" rel="noopener noreferrer">Instagram</a>
                    <a href="https://github.com/uncroos" target="_blank" rel="noopener noreferrer">GitHub</a>
                    <a href="https://www.linkedin.com/in/%EC%9A%94%ED%95%9C-%EC%95%88-b64a53315/?trk=opento_sprofile_topcard" target="_blank" rel="noopener noreferrer">Linkedin</a>
                    <a href="https://blog.naver.com/uncroos" target="_blank" rel="noopener noreferrer">Naver blog</a>
                </div>
            </div>
        </header>
    );
}
