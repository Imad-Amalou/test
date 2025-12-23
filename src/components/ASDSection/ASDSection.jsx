import "./ASDSection.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import avis from "../../Assets/01.png";
import dol from "../../Assets/02.png";
import sondage from "../../Assets/03.png";

const ASDSection = () => {
  const { t } = useTranslation();

  return (
    <section className={`ASD`}>
      <div className="text ">
        <h2>{t("asd.title")}</h2>
        <p>{t("asd.description")}</p>
      </div>

      <div className="care">
        <div className="deuxcare">

          <div className="careuni" role="article">
            <img src={avis} alt={t("asd.avis.title")} width="50" />
            <h3>{t("asd.avis.title")}</h3>
            <Link to="/Feedback" className="small-link">
              {t("asd.avis.action")}
            </Link>
          </div>

          <div className="careuni" role="article">
            <img src={dol} alt={t("asd.sondage.title")} width="50" />
            <h3>{t("asd.sondage.title")}</h3>
            <Link to="/Feedback" className="small-link">
              {t("asd.sondage.action")}
            </Link>
          </div>

        </div>

        <div className="uncare">
          <div className="careuni" role="article">
            <img src={sondage} alt={t("asd.doleance.title")} width="50" />
            <h3>{t("asd.doleance.title")}</h3>
            <Link to="/Feedback" className="small-link">
              {t("asd.doleance.action")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ASDSection;
