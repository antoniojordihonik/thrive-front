import "../styles.css";
import "./mentors.css";
import { useTranslation } from "react-i18next";

export default function Mentors() {

  const { t } = useTranslation();

  return (
    <section className="mentors-background">

      <div>
        <h1 className="mentors-title">{t("landing.mentorTitle")}</h1>
        <h3 className="mentors-subtitle">{t("landing.mentorSubtitle")}</h3>
      </div>
      <div className="mentor-section">
          <div className="mentor-left">
            <img src="/mentor1.jpg" alt={t("landing.peteName")} />
          </div>
          <div className="mentor-right">
            <div className="mentor-container">
            <h3 className="mentor-name">{t("landing.peteName")}</h3>
            <p className="mentor-text">
              {t("landing.mentorOneText")}
              <br />
              <br />
              {t("landing.mentorTwoText")}
            </p>
            </div>
          </div>
      </div>


    </section>
  );
}