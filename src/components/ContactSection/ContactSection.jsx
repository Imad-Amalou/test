import { Link } from "react-router-dom";
import "./ContactSection.css";
import Contact from "../../Assets/contact.png";
import { useTranslation } from "react-i18next";

export default function ContactCTA() {
const { i18n, t } = useTranslation();

  return (
    <section className="contact-section2">
      
     <div className={`left-box`}>
      <h2 className={`${i18n.language === "ar" ? "left-box-ar" : ""}`}>
        {t("contactCTA.left.title.line1")} <br />
        {t("contactCTA.left.title.line2")}
      </h2>
      <img 
        className={`${i18n.language === "ar" ? "left-box-ar" : ""}`}
        src={Contact}
        alt={t("contactCTA.left.imageAlt")}
      />
</div>

      <div className="right-box">
        <h2>{t("contactCTA.right.title")}</h2>

        <p>
          {t("contactCTA.right.text.line1")} <br />
          {t("contactCTA.right.text.line2")}
        </p>

        <Link to="/Contact" className="contact-btn">
          {t("contactCTA.right.button")}
        </Link>
      </div>

    </section>
  );
}
