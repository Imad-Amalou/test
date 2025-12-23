import "./SubHeader.css";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import logo from "../../Assets/logo.png";

const SubHeader = () => {
  const { t, i18n } = useTranslation(); 
  const [openMenu, setOpenMenu] = useState(false);
  const [activeLink, setActiveLink] = useState("/");
  const location = useLocation();

  const isAr = i18n.language === "ar"; 

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);

  return (
    <div className="sub-header">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>

      <button
        className="hamburger"
        onClick={() => setOpenMenu(!openMenu)}
      >
        {openMenu ? "✖" : "☰"}
      </button>

      <nav className={openMenu ? "open" : ""}>
        <ul className={`main-menu ${isAr ? "text-ar" : ""}`}>
          <li>
            <Link
              to="/"
              className={activeLink === "/" ? "active" : ""}
              onClick={() => setOpenMenu(false)}
            >
              {t("menu.home")}
            </Link>
          </li>

          <li>
            <Link
              to="/AgencesSogral"
              className={activeLink === "/AgencesSogral" ? "active" : ""}
              onClick={() => setOpenMenu(false)}
            >
              {t("menu.agences.title")}
            </Link>

            <ul className="sub-menu">
              <li><Link to={"/Actualite"}>{t("menu.agences.map")}</Link></li>
              <li><Link to={"/Actualite"}>{t("menu.agences.actu")}</Link></li>
              <li><Link to={"/Actualite"}>{t("menu.agences.map")}</Link></li>
            </ul>
          </li>

          <li>
            <Link
              to="/LocauxCommerciaux"
              className={activeLink === "/LocauxCommerciaux" ? "active" : ""}
              onClick={() => setOpenMenu(false)}
            >
              {t("menu.locaux")}
            </Link>

            <ul className="sub-menu">
              <li>{t("menu.locaux.consultation")}</li>
              <li>{t("menu.locaux.demande")}</li>
            </ul>
          </li>

          <li>
            <Link
              to="/EspaceVoyageur"
              className={activeLink === "/EspaceVoyageur" ? "active" : ""}
              onClick={() => setOpenMenu(false)}
            >
              {t("menu.voyageur")}
            </Link>
          </li>

          <li>
            <Link
              to="/EspaceTransporteur"
              className={activeLink === "/EspaceTransporteur" ? "active" : ""}
              onClick={() => setOpenMenu(false)}
            >
              {t("menu.transporteur")}
            </Link>
          </li>

          <li>
            <Link
              to="/contact"
              className={activeLink === "/contact" ? "active" : ""}
              onClick={() => setOpenMenu(false)}
            >
              {t("menu.contact")}
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default SubHeader;
