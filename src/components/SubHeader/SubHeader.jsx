import "./SubHeader.css";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const SubHeader = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [activeLink, setActiveLink] = useState("/"); // lien actif par défaut
  const location = useLocation();

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);

  return (
    <div className="sub-header">
      <div className="logo">
        <img src="/images/logo.png" alt="Logo" />
      </div>

      <button
        className="hamburger"
        onClick={() => setOpenMenu(!openMenu)}
      >
        {openMenu ? "✖" : "☰"}
      </button>

      <nav className={openMenu ? "open" : ""}>
        <ul className="main-menu">
          <li>
            <Link
              to="/"
              className={activeLink === "/" ? "active" : ""}
              onClick={() => setOpenMenu(false)}
            >
              Accueil
            </Link>
          </li>
          <li>
            <Link
              to="/AgencesSogral"
              className={activeLink === "/AgencesSogral" ? "active" : ""}
              onClick={() => setOpenMenu(false)}
            >
              Agences SOGRAL
            </Link>
            <ul className="sub-menu">
              <li><a href="#">Affichage des agences sur Google Maps</a></li>
              <li><a href="#">Photos</a></li>
              <li><a href="#">Vidéos</a></li>
            </ul>
          </li>

          <li>
            <Link
              to="/LocauxCommerciaux"
              className={activeLink === "/LocauxCommerciaux" ? "active" : ""}
              onClick={() => setOpenMenu(false)}
            >
              Locaux commerciaux
            </Link>
            <ul className="sub-menu">
              <li><a href="#">Consultation par agences</a></li>
              <li><a href="#">Demande de location (gré à gré)</a></li>
            </ul>
          </li>

          <li>
            <Link
              to="/EspaceVoyageur"
              className={activeLink === "/EspaceVoyageur" ? "active" : ""}
              onClick={() => setOpenMenu(false)}
            >
              Espace Voyageur
            </Link>
          </li>

          <li>
            <Link
              to="/EspaceTransporteur"
              className={activeLink === "/EspaceTransporteur" ? "active" : ""}
              onClick={() => setOpenMenu(false)}
            >
              Espace Transporteur
            </Link>
          </li>

          <li>
            <Link
              to="/contact"
              className={activeLink === "/contact" ? "active" : ""}
              onClick={() => setOpenMenu(false)}
            >
              Aide & Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default SubHeader;
