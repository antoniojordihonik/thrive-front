import "./different.css";
import "../styles.css";
import { useTranslation } from "react-i18next";

export default function Different() {

  const { t } = useTranslation();

  return (
    <section className="diff-background">
      <div className="diff-title">
        <h1>{t("landing.differentTitle")}</h1>
        <h3>{t("landing.differentSub")}</h3>
      </div>
      <div className="diff-section">
        <div className="left-rectangle">
          <h3>{t("landing.differentFirstTitle")}</h3>
          <p>{t("landing.differentFirstText")}</p>
          <h3>{t("landing.differentSecondTitle")}</h3>
          <p>{t("landing.differentSecondText")}</p>
          <h3>{t("landing.differentThirdTitle")}</h3>
          <p>{t("landing.differentThirdText")}</p>
        </div>
        <div className="right-rectangle">
          <h3>{t("landing.differentFourthTitle")}</h3>
          <p>{t("landing.differentFourthText")}</p>
          <h3>{t("landing.differentFifthTitle")}</h3>
          <p>{t("landing.differentFifthText")}</p>
          <h3>{t("landing.differentSixthTitle")}</h3>
          <p>{t("landing.differentSixthText")}</p>
        </div>
      </div>
    </section>
  );
}
