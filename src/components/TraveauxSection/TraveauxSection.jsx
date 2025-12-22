import { Link } from "react-router-dom";
import "./TraveauxSection.css";
import logo from "../../Assets/logo1.png";
import { useTranslation } from "react-i18next";

const TravauxSection = () => {
  const { t } = useTranslation();

  return (
    <section className="travaux-section">
      <div className="travaux-content">
        <div className="travaux-left">
          <img
            src={logo}
            alt={t("travaux.title")}
            className="travaux-icon"
          />
        </div>

        <div className="travaux-right">
          <h2>{t("travaux.title")}</h2>

          {/* \n\n dans JSON → lignes séparées */}
          <p style={{ whiteSpace: "pre-line" }}>
            {t("travaux.description")}
          </p>

          <Link to="/APropos" className="travaux-btn">
            {t("travaux.more")}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TravauxSection;
