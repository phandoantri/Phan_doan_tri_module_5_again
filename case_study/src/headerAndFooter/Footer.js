import React from 'react';
import "../css/Footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section">
                    <h3>Địa chỉ</h3>
                    <p>123 Đường ABC, Phường XYZ</p>
                    <p>Đà Nẵng, Việt Nam</p>
                </div>
                <div className="footer-section">
                    <h3>Liên hệ</h3>
                    <p>Email: info@furama.com</p>
                    <p>Điện thoại: 123-456-789</p>
                </div>
            </div>
            <p className="footer-bottom">Bản quyền © 2023 Furama Resort. Tất cả các quyền được bảo lưu.</p>
        </footer>
    );
};

export default Footer;