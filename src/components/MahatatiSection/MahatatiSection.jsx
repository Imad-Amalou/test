import "./MahatatiSection.css";
import mahatati from "../../Assets/unnamed.png";
import { useTranslation } from "react-i18next";
const MahatatiSection = () => {


  const { t } = useTranslation();
  return (
    <section className="background-section">
      <div className="content-overlay">
        <div className="hero-flex">
          <div className="hero-text">
            <h2>{t("mahatati.title")}</h2>
            <p>{t("mahatati.p1")}</p>
            <p>{t("mahatati.p2")}</p>
            <a
              href="https://www.mahatati.dz"
              target="_blank"
              rel="noopener noreferrer"
            >
            <button>{t("mahatati.button")}</button>
            </a>
          </div>
          <div className="hero-image">
            <a href="https://www.mahatati.dz" target="_blank" rel="noreferrer">
              <img
                src={mahatati}
                alt={t("mahatati.imageAlt")}
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MahatatiSection;
