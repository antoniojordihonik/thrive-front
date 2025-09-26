import React from "react";
import "./footer.css";
import "../styles.css"
import { useTranslation } from "react-i18next";

export default function Footer() {

  const { t } = useTranslation(); 

  return (
    <footer className="footer-background">
      <div className="footer-container">
      <div className="footer-top">
        <div className="footer-experts">
          <a href="/mentors" className="footer-experts-link">
            <span className="footer-meet-experts">{t("landing.footerMeetExperts")}</span>
            <span className="footer-arrow">&#8594;</span>
          </a>
        </div>
      </div>
      <hr className="footer-divider" />
      <div className="footer-main">
        <div className="footer-brand">
          <img src="/thrive-alive-logo.svg" alt="ThriveAlive Logo" className="footer-logo" />
        </div>
        <div className="footer-links">
          <div>
            <a href="#">{t("landing.footerHome")}</a>
            <a href="#">{t("landing.footerAboutUs")}</a>
            <a href="#">{t("landing.footerServices")}</a>
            <a href="#">{t("landing.footerFAQ")}</a>
          </div>
          <div>
            <a href="#">{t("landing.footerTestimonials")}</a>
            <a href="#">{t("landing.footerContactUs")}</a>
            <a href="#">{t("landing.footerJoinTheChange")}</a>
            <a href="#">{t("landing.footerPrivacyPolicy")}</a>
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