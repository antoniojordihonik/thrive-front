import { useState } from "react";
import "./navbar.css";
import "../styles.css"
import { useTranslation } from "react-i18next";
import thriveLogo from '/thrive-alive-logo.svg';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <section className="navbar-background">
    <header className="navbar">
      <div className="navbar-container">
        <img src={thriveLogo} alt="Thrive Alive" className="logo" />

        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#service">About</a>
          <a href="#service">Mentors</a>
          <a href="#service">Testimonials</a>
          <a href="#service">FAQ</a>
          <a href="#contact">{t("landing.navbarContact")}</a>
        </nav>

        <button className="login-btn">Login</button>

        <button
          className="hamburger"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        {isOpen && (
          <div className="mobile-menu">
            <a href="#home" onClick={() => setIsOpen(false)}>Home</a>
            <a href="#service" onClick={() => setIsOpen(false)}>Service</a>
            <a href="#contact" onClick={() => setIsOpen(false)}>Contact Us</a>
            <a href="">Login</a>
            <a href="#login" className="login-btn" onClick={() => setIsOpen(false)}>Login</a>
          </div>
        )}
      </div>
    </header>
    </section>
  );
}
