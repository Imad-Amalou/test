import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./TraveauxSection.css";
import logo from "../../Assets/logo1.png";

const TravauxSection = () => {
  const { t } = useTranslation();

  return (
    <section className="travaux-section">
      <div className="travaux-content">
        <div className="travaux-left">
          <img
            src={logo}
            alt="SOGRALE"
            className="travaux-icon"
          />
        </div>

        <div className="travaux-right">
          <h2>{t("travaux.title")}</h2>

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
