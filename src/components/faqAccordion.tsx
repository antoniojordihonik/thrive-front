
import React, { useState } from "react";
import "./faqAccordion.css";
import "../styles.css";
import { useTranslation } from "react-i18next";

interface FaqItem {
  question: string;
  answer: string;
}

export default function FaqAccordion() {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqData: FaqItem[] = [
    { question: t("landing.faqQuestionOne"), answer: t("landing.faqAnswerOne") },
    { question: t("landing.faqQuestionTwo"), answer: t("landing.faqAnswerTwo") },
    { question: t("landing.faqQuestionThree"), answer: t("landing.faqAnswerThree") },
    { question: t("landing.faqQuestionFour"), answer: t("landing.faqAnswerFour") },
    { question: t("landing.faqQuestionFive"), answer: t("landing.faqAnswerFive") },
  ];

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="faq-background">
      <div className="faq-container">
        <div className="faq-accordion">
          <h1>{t("landing.faqTitle")}</h1>

          {faqData.map((item, idx) => (
            <div className="faq-item" key={idx}>
              <button
                className="faq-question"
                onClick={() => toggle(idx)}
                aria-expanded={openIndex === idx}
                aria-controls={`faq-answer-${idx}`}
              >
                <span className="faq-question-text">{item.question}</span>
                <span className={`faq-arrow ${openIndex === idx ? "open" : ""}`} aria-hidden>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                    <path d="M6 9l6 6 6-6" stroke="#252525" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </button>

              <div
                id={`faq-answer-${idx}`}
                className={`faq-answer ${openIndex === idx ? "open" : "closed"}`}
                role="region"
                aria-hidden={openIndex !== idx}
              >
                {item.answer}
              </div>
            </div>
          ))}
        </div>

        <div className="more-questions">
          <h2 className="more-questions-title">{t("landing.faqSubtitle")}</h2>
          <p className="more-questions-text">{t("landing.faqText")}</p>
          <a href="emailus" className="more-questions-btn">{t("landing.faqBtn")}</a>
        </div>
      </div>
    </div>
  );
}
// ...existing code...