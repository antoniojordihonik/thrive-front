import "./different.css";
import "../styles.css";
import { useTranslation } from "react-i18next";
import Diff1 from "/different-section-1.svg";
import Diff2 from "/different-section-2.svg";
import Diff3 from "/different-section-3.svg";
import Diff4 from "/different-section-4.svg";
import Diff5 from "/different-section-5.svg";
import Diff6 from "/different-section-6.svg";

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
          <div className="diff-item">
            <div className="diff-icon">
              <img src={Diff1} alt={t("landing.differentFirstTitle")} />
            </div>
            <div className="diff-text">
              <h3>{t("landing.differentFirstTitle")}</h3>
              <p>{t("landing.differentFirstText")}</p>
            </div>
          </div>

          <div className="diff-item">
            <div className="diff-icon">
              <img src={Diff2} alt={t("landing.differentSecondTitle")} />
            </div>
            <div className="diff-text">
              <h3>{t("landing.differentSecondTitle")}</h3>
              <p>{t("landing.differentSecondText")}</p>
            </div>
          </div>

          <div className="diff-item">
            <div className="diff-icon">
              <img src={Diff3} alt={t("landing.differentThirdTitle")} />
            </div>
            <div className="diff-text">
              <h3>{t("landing.differentThirdTitle")}</h3>
              <p>{t("landing.differentThirdText")}</p>
            </div>
          </div>
        </div>

        <div className="right-rectangle">
          <div className="diff-item">
            <div className="diff-icon">
              <img src={Diff4} alt={t("landing.differentFourthTitle")} />
            </div>
            <div className="diff-text">
              <h3>{t("landing.differentFourthTitle")}</h3>
              <p>{t("landing.differentFourthText")}</p>
            </div>
          </div>

          <div className="diff-item">
            <div className="diff-icon">
              <img src={Diff5} alt={t("landing.differentFifthTitle")} />
            </div>
            <div className="diff-text">
              <h3>{t("landing.differentFifthTitle")}</h3>
              <p>{t("landing.differentFifthText")}</p>
            </div>
          </div>

          <div className="diff-item">
            <div className="diff-icon">
              <img src={Diff6} alt={t("landing.differentSixthTitle")} />
            </div>
            <div className="diff-text">
              <h3>{t("landing.differentSixthTitle")}</h3>
              <p>{t("landing.differentSixthText")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
