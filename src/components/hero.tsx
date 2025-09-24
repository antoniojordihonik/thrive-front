import "../styles.css";
import "./hero.css";
import { useTranslation } from "react-i18next";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section className="hero">
      <div className="hero-content">
      <h1 className="title">
        {t("landing.heroTitle")}{" "}
        <span className="highlight">{t("landing.heroTitleHigh")}</span>{" "}
        <span className="title">
          {t("landing.heroSecondTitle")}
          </span>
      </h1>
      <p>{t("landing.heroText")}</p>
      <a className="journey-btn">
        {t("landing.heroBtn")}
      </a>
    </div>
    </section>
  );
}