import React from "react";
import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer-background">
      <div className="footer-container">
      <div className="footer-top">
        <div className="footer-experts">
          <a href="/mentors" className="footer-experts-link">
            <span>Meet Your Experts</span>
            <span className="footer-arrow">&#8594;</span>
          </a>
        </div>
      </div>
      <hr className="footer-divider" />
      <div className="footer-main">
        <div className="footer-brand">
          <img src="/logo.svg" alt="ThriveAlive Logo" className="footer-logo" />
          <div className="footer-socials">
            <a href="#"><img src="/icon-instagram.svg" alt="Instagram" /></a>
            <a href="#"><img src="/icon-facebook.svg" alt="Facebook" /></a>
            <a href="#"><img src="/icon-linkedin.svg" alt="LinkedIn" /></a>
            <a href="#"><img src="/icon-tiktok.svg" alt="TikTok" /></a>
          </div>
        </div>
        <div className="footer-links">
          <div>
            <a href="#">HOME</a>
            <a href="#">ABOUT US</a>
            <a href="#">SERVICES</a>
            <a href="#">FAQ</a>
          </div>
          <div>
            <a href="#">TESTIMONIALS</a>
            <a href="#">CONTACT US</a>
            <a href="#">JOIN THE CHANGE</a>
            <a href="#">PRIVACY POLICY</a>
          </div>
        </div>
      </div>
      <hr className="footer-divider" />
      <div className="footer-bottom">
        <span>© ThriveAlive.Ai 2025</span>
      </div>
      </div>
    </footer>
  );
}