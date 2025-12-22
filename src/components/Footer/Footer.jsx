import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./Footer.css";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="site-footer">

      {/* Premier étage : 4 colonnes */}
      <div className="footer-top">
        <div className="footer-column">
          <h4>{t("footer.about.title")}</h4>
          <p>{t("footer.about.description")}</p>
        </div>

        <div className="footer-column">
          <h4>{t("footer.services.title")}</h4>
          <ul>
            {t("footer.services.list", { returnObjects: true }).map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="footer-column">
          <h4>{t("footer.support.title")}</h4>
          <ul>
            {t("footer.support.list", { returnObjects: true }).map((item, index) => (
              <li key={index}>
                {item === "Contact" ? <Link to="/contact">{item}</Link> :
                 item === "Plan du site" ? <Link to="/sitemap">{item}</Link> :
                 <a href="#">{item}</a>}
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-column">
          <h4>{t("footer.newsletter.title")}</h4>
          <p>{t("footer.newsletter.description")}</p>
          <input type="email" placeholder={t("footer.newsletter.placeholder")} />
          <button>{t("footer.newsletter.button")}</button>
        </div>
      </div>

      {/* Deuxième étage : liens rapides + réseaux sociaux */}
      <div className="footer-middle">
        <div className="footer-links">
          <Link to="/">{t("footer.quickLinks.home")}</Link>
          <a href="#">{t("footer.quickLinks.routes")}</a>
          <Link to="/Services">{t("footer.quickLinks.services")}</Link>
          <Link to="/contact">{t("footer.quickLinks.contact")}</Link>
        </div>

        <div className="footer-social">
          {/* Ici tu peux garder tes SVG pour les réseaux */}
        </div>
      </div>

      {/* Troisième étage : logo */}
      <div className="footer-bottom">
        <img src="images/logo.png" alt="Sogral Logo" />
        <p>{t("footer.copyright")}</p>
      </div>

    </footer>
  );
};

export default Footer;
