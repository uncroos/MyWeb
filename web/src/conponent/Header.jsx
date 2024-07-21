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
          
        </header>
    );
}
