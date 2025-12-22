import React, { useState, useRef, useEffect } from "react";
import "./Header.css";
import { FaSearch } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { i18n } = useTranslation();

  const [lang, setLang] = useState(i18n.language || "fr");
  const [openLang, setOpenLang] = useState(false);
  const languageRef = useRef(null);

  // Fermer le menu si clic à l'extérieur
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (languageRef.current && !languageRef.current.contains(event.target)) {
        setOpenLang(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  // 🔁 Changement de langue GLOBAL
  const handleLangClick = (value) => {
    setLang(value);
    i18n.changeLanguage(value);   // ✅ ICI la magie
    setOpenLang(false);
  };

  return (
    <header>
      <div className="left-buttons">
        {/* futur */}
      </div>

      <div className="right-controls">
        <div className="search-container2">
          <input type="text" placeholder="Rechercher..." />
          <span className="search-icon2">
            <FaSearch />
          </span>
        </div>

        <div className="language-select" ref={languageRef}>
          <div className="selected" onClick={() => setOpenLang(!openLang)}>
            <img
              src={
                lang === "fr"
                  ? "https://flagcdn.com/w20/fr.png"
                  : lang === "ar"
                  ? "https://flagcdn.com/w20/dz.png"
                  : "https://flagcdn.com/w20/gb.png"
              }
              alt={lang.toUpperCase()}
            />
            <span>{lang.toUpperCase()}</span>
          </div>

          {openLang && (
            <div className="options">
              <div className="option" onClick={() => handleLangClick("fr")}>
                <img src="https://flagcdn.com/w20/fr.png" alt="FR" /> FR
              </div>
              <div className="option" onClick={() => handleLangClick("ar")}>
                <img src="https://flagcdn.com/w20/dz.png" alt="AR" /> AR
              </div>
              <div className="option" onClick={() => handleLangClick("en")}>
                <img src="https://flagcdn.com/w20/gb.png" alt="EN" /> EN
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
