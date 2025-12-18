import React, { useState, useRef, useEffect } from "react";
import "./Header.css"; // CSS séparé pour le style
import { FaSearch } from "react-icons/fa";

const Header = () => {
  const [activeBtn, setActiveBtn] = useState("particulier");
  const [lang, setLang] = useState("fr");
  const [openLang, setOpenLang] = useState(false);
  const languageRef = useRef(null);

  // Fermer le menu langue quand on clique en dehors
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (languageRef.current && !languageRef.current.contains(event.target)) {
        setOpenLang(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const handleBtnClick = (btn) => {
    setActiveBtn(btn);
  };

  const handleLangClick = (value) => {
    setLang(value);
    setOpenLang(false);
  };

  return (
    <header>
      <div className="left-buttons">
        <button
          id="particulier"
          className={activeBtn === "particulier" ? "active" : ""}
          onClick={() => handleBtnClick("particulier")}
        >
          Particulier
        </button>
        <button
          id="professionnel"
          className={activeBtn === "professionnel" ? "active" : ""}
          onClick={() => handleBtnClick("professionnel")}
        >
          Professionnel
        </button>
      </div>

      <div className="right-controls">
        <div className="search-container2">
          <input type="text" placeholder="Rechercher..." />
          <span className="search-icon2"><FaSearch /></span>
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
