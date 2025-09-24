import "./plans.css";
import "../styles.css";
import { useTranslation } from "react-i18next";

export default function Plans() {

  const { t } = useTranslation();

  return (
    <section className="plans-background">

      <h1>{t("landing.plansTitle")}</h1>
        <p>{t("landing.plansSubtitle")}</p>

      <div className="plans-section">
        <div className="individual-plan">
            <h3>{t("landing.plansIndividual")}</h3>
            <p>{t("landing.planIndDescription")}
            </p>

            <ul className="plans-list">
              <li>{t("landing.planIndListOne")}</li>
              <li>{t("landing.planIndListTwo")}</li>
              <li>{t("landing.planIndListThree")}</li>
            </ul>

          <a className="plan-btn">{t("landing.planIndBtn")}</a>

        </div>
          
        <div className="organization-plan">
            <h3>{t("landing.plansOrganization")}</h3>
            <p>{t("landing.plansOrgDescription")}
            </p>

            <ul className="plans-list">
              <li>{t("landing.planOrgListOne")}</li>
              <li>{t("landing.planOrgListTwo")}</li>
              <li>{t("landing.planOrgListThree")}</li>
              <li>{t("landing.planOrgListFour")}</li>
            </ul>

          <a className="plan-btn">{t("landing.planOrgBtn")}</a>


        </div>
      </div>
    </section>
  );
}
