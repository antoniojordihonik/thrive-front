import "../styles.css";
import "./mentors.css";
import { useTranslation } from "react-i18next";

export default function Mentors() {

  const { t } = useTranslation();

  return (
    <section className="mentors-background">

      <div>
        <h1 className="mentors-title">Meet Your Mentors</h1>
        <h3 className="mentors-subtitle">Discover a diverse group of experienced professionals dedicated to guiding you towards success.<br />Each mentor brings unique expertise and a passion for helping you grow</h3>
      </div>
      <div className="mentor-section">
          <div className="mentor-left">
            <img src="/mentor1.jpg" alt="Pete Canalichio" />
          </div>
          <div className="mentor-right">
            <div className="mentor-container">
            <h3 className="mentor-name">Pete Canalichio</h3>
            <p className="mentor-text">
              {t("landing.mentorOneText")}
              <br />
              <br />
              {t("landing.mentorTwoText")}
            </p>
            </div>
          </div>
      </div>

      <div className="mentor-section">
          <div className="mentor-right">
                       <div className="mentor-container">
            <h3 className="mentor-name">Pete Canalichio</h3>
            <p className="mentor-text">
              {t("landing.mentorOneText")}
              <br />
              <br />
              {t("landing.mentorTwoText")}
            </p>
            </div>
          </div>
          <div className="mentor-left">
              <img src="/mentor1.jpg" alt="Pete Canalichio" />
          </div>
      </div>

    </section>
  );
}
