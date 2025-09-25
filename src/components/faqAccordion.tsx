import React, { useState } from "react";
import "./faqAccordion.css";

interface FaqItem {
  question: string;
  answer: string;
}


const faqData: FaqItem[] = [
  {
    question: "What is ThriveAlive?",
    answer: "ThriveAlive is a platform for self-discovery and personal growth.",
  },
  {
    question: "How does the self-discovery process work?",
    answer: "You progress through guided modules and exercises at your own pace.",
  },
  {
    question: "Is my data private and secure?",
    answer: "Yes, your data is encrypted and never shared without your consent.",
  },
  {
    question: "Can ThriveAlive help with career transitions?",
    answer: "Absolutely! Our modules are designed to support career changes.",
  },
  {
    question: "What kind of insights will I receive?",
    answer: "You’ll get personalized feedback and actionable insights.",
  },
];

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="faq-background">
    <div className="faq-container">
    <div className="faq-accordion">
      <h1>Frequently Asked Questions</h1>
      {faqData.map((item, idx) => (
        <div className="faq-item" key={idx}>

        <button className="faq-question" onClick={() => toggle(idx)}>
        {item.question}
        <span className={`faq-arrow ${openIndex === idx ? "open" : ""}`}>
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path d="M6 9l6 6 6-6" stroke="#252525" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        </span>
        </button>

          <div className={`faq-answer${openIndex === idx ? " open" : ""}`}>
            {openIndex === idx && <p>{item.answer}</p>}
          </div>
        </div>
    
      ))}
    </div>
      <div className="more-questions">
        <h1 className="more-questions-title">
          Have Questions?
        </h1>
        <p className="more-questions-text">
          From troubleshooting issues to learning how to use our features.
          <br />Shoot us an email.
        </p>
        <a href="emailus" className="more-questions-btn">Email Us</a>

      </div>
    </div>



    </div>
  );
}