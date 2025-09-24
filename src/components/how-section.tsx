import "../styles.css";
import "./how-section.css";
import { useTranslation } from "react-i18next";
import How1 from "/how-1.svg";
import How2 from "/how-2.svg";
import How3 from "/how-3.svg";

export default function HowSection() {
  const { t } = useTranslation();

  return (
    <section className="how-background">
      <div className="how-section">
        <h1>{t("landing.howTitle")}</h1>
        <div className="how-cards">
          <div className="how-card">
            <div className="how-icon">
              <img src={How1} alt="Reflect on What Matters Most" />
            </div>
            <h3>{t("landing.howCardsOne")}</h3>
            <p>{t("landing.howTextOne")}</p>
          </div>
          <div className="how-card">
            <div className="how-icon">
              <img src={How2} alt="Gain Personalized Insights" />
            </div>
            <h3 className="how-card-title">{t("landing.howCardsTwo")}</h3>
            <p className="how-card-description">{t("landing.howTextTwo")}</p>
          </div>
          <div className="how-card">
            <div className="how-icon">
              <img src={How3} alt="Align Wealth With Purpose" />
            </div>
            <h3 className="how-card-title">{t("landing.howCardsThree")}</h3>
            <p className="how-card-description">{t("landing.howTextThree")}</p>
          </div>
        </div>
        <a className="how-button">
          {t("landing.howBtn")}
        </a>
      </div>
    </section>
  );
}
