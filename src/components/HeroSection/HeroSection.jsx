import "./HeroSection.css";
import bus from "../../Assets/bus.jpg";
import logo from "../../Assets/logo1.png";
import { useTranslation } from "react-i18next";

const HeroSection = () => {
  const { t, i18n } = useTranslation();
  const isAr = i18n.language === "ar";

  return (
    <section className="hero-section">
      <img src={bus} alt={t("hero.alt")} className="hero-bg" />

      {/* Texte en RTL uniquement si arabe */}
      <div className={`hero-card ${isAr ? "text-ar" : ""}`}>
        <img src={logo} alt="Logo" />

        <h2>{t("hero.title")}</h2>
        <p>{t("hero.description")}</p>

        <input type="text" placeholder={t("hero.start")} />
        <input type="text" placeholder={t("hero.end")} />

        <select>
          <option>{t("hero.transport")}</option>
          <option>{t("hero.bus")}</option>
          <option>{t("hero.train")}</option>
          <option>{t("hero.taxi")}</option>
        </select>

        <button className="submit-btn">{t("hero.search")}</button>
      </div>
    </section>
  );
};

export default HeroSection;
