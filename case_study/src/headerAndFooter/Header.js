import React, {useEffect} from 'react';
import "../css/Header.css"

export function Header  ()  {
    useEffect(() => {
        const header = document.querySelector('.header');

        const handleScroll = () => {
            if (window.pageYOffset > 0) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <header className="header">
            <nav className="navbar">
                <img src="https://furamavietnam.com/wp-content/uploads/2018/08/logo@2x.png" style={{width:'80px',height:"80px"}}  alt="Furama Resort" className="logo" />
                <div className="center-section">
                    <ul className="nav-links">
                        <li>
                            <a href="/service">Home</a>
                        </li>
                        <li>
                            <a href="/customer">Customer</a>
                        </li>
                        <li>
                            <a href="/contact">Contact</a>
                        </li>
                        <li>
                            <a href="./service.html"></a>
                        </li>
                        <li>
                            <a href="/contact">Liên hệ</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};
