import "../styles.css";
import "./modules.css";
import { useTranslation } from "react-i18next";
import Module1 from "/purpose.png";
import Module2 from "/personal-growth.jpg";
import Module3 from "/vision.jpg";
import Module4 from "/values.jpg";


export default function Modules() {
  const { t } = useTranslation();

  return (
    <section className="modules-background">
      <div className="modules-section">
        <h3 className="modules-subtitle">{t("landing.modulesTitle")}</h3>
        <h1 className="modules-title">{t("landing.modulesSubtitle")}</h1>
        <div className="modules-cards">

        <div className="module-card-container">
          <div className="module-card">
            <div className="module-card-frontside">
              <div className="module-picture">
                <img src={Module1} alt="Reflect on What Matters Most" />
              </div>
              <h3>{t("landing.moduleNameOne")}</h3>
              <p>{t("landing.peteName")}</p>
            </div>
            <div className="module-card-backside">
              <h3>{t("landing.moduleNameOne")}</h3>
              <p>by {t("landing.peteName")}</p>
              <p>{t("landing.moduleTextOne")}</p>
            </div>
          </div>
        </div>

        <div className="module-card-container">
          <div className="module-card">
            <div className="module-card-frontside">
              <div className="module-picture">
                <img src={Module2} alt="Reflect on What Matters Most" />
              </div>
              <h3>{t("landing.moduleNameTwo")}</h3>
              <p>{t("landing.peteName")}</p>
            </div>
            <div className="module-card-backside">
              <h3>{t("landing.moduleNameTwo")}</h3>
              <p>by {t("landing.peteName")}</p>
              <p>{t("landing.moduleTextOne")}</p>
            </div>
          </div>
        </div>

        <div className="module-card-container">
          <div className="module-card">
            <div className="module-card-frontside">
              <div className="module-picture">
                <img src={Module3} alt="Reflect on What Matters Most" />
              </div>
              <h3>{t("landing.moduleNameThree")}</h3>
              <p>{t("landing.peteName")}</p>
            </div>
            <div className="module-card-backside">
              <h3>{t("landing.moduleNameThree")}</h3>
              <p>by {t("landing.peteName")}</p>
              <p>{t("landing.moduleTextOne")}</p>
            </div>
          </div>
        </div>

        <div className="module-card-container">
          <div className="module-card">
            <div className="module-card-frontside">
              <div className="module-picture">
                <img src={Module4} alt="Reflect on What Matters Most" />
              </div>
              <h3>{t("landing.moduleNameFour")}</h3>
              <p>{t("landing.peteName")}</p>
            </div>
            <div className="module-card-backside">
              <h3>{t("landing.moduleNameFour")}</h3>
              <p>by {t("landing.peteName")}</p>
              <p>{t("landing.moduleTextOne")}</p>
            </div>
          </div>
        </div>

        </div>        
        <a className="modules-button">
          {t("landing.modulesBtn")}
        </a>
      </div>
    </section>
  );
}
