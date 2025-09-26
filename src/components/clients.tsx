import React, { useState } from "react";
import "./clients.css";
import "../styles.css";
import { useTranslation } from "react-i18next";
import Quote from "/quote.svg";

function getTruncatedText(text: string, expanded: boolean, maxLength = 180) {
  if (expanded) return text;
  if (text.length > maxLength) return text.slice(0, maxLength);
  return text;
}

export default function Clients() {
  const { t } = useTranslation();
  const [expandedAll, setExpandedAll] = useState(false);

  const cards = [
    {
      fullComment: t("landing.clientCommentOne"),
      name: t("landing.clientNameOne"),
      role: t("landing.clientRoleOne"),
    },
    {
      fullComment: t("landing.clientCommentTwo"),
      name: t("landing.clientNameTwo"),
      role: t("landing.clientRoleTwo"),
    },
    {
      fullComment: t("landing.clientCommentThree"),
      name: t("landing.clientNameThree"),
      role: t("landing.clientRoleThree"),
    },
  ];

  return (
    <section className="clients-background">
      <div className="clients-title">
        <h3>{t("landing.clientsSub")}</h3>
        <h1>{t("landing.clientsTitle")}</h1>
      </div>

      <div className="clients-section">
        <div className="clients-container">
          {cards.map((card, idx) => (
            <div
              className={`clients-card${expandedAll ? " expanded" : ""}`}
              key={idx}
            >
              <div className="clients-icon">
                <img src={Quote} alt="Quote" />
              </div>
              <div className="clients-text">
                <p className={expandedAll ? "expanded" : "collapsed"}>
                  {getTruncatedText(card.fullComment, expandedAll)}
                </p>
                <h2 className="client-name">{card.name}</h2>
                <p className="client-role">{card.role}</p>
              </div>
            </div>
          ))}
        </div>

        <button
          className="readmore-btn"
          onClick={() => setExpandedAll(!expandedAll)}
        >
          {expandedAll
            ? t("landing.clientsShowLess") || "Show Less"
            : t("landing.clientsReadMore") || "Read More"}
        </button>

        <a href="testimonials" className="clients-btn">
          See All Testimonials
        </a>
      </div>
    </section>
  );
}