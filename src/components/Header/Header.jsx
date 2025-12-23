import React, { useState, useRef, useEffect } from "react";
import "./Header.css";
import { FaSearch } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { MdTranslate } from "react-icons/md";
import { HiOutlineTranslate } from "react-icons/hi";
import { TbLanguage } from "react-icons/tb";
const Header = () => {
  const { i18n, t } = useTranslation();
  const [lang, setLang] = useState(i18n.language || "fr");
  const [openLang, setOpenLang] = useState(false);
  const languageRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (languageRef.current && !languageRef.current.contains(event.target)) {
        setOpenLang(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const handleLangClick = (value) => {
    setLang(value);
    i18n.changeLanguage(value);
    setOpenLang(false);
  };

  const renderLangIcon = (language) => (
    <div className={`lang-icon ${language}`}>
      {language.toUpperCase()}
    </div>
  );

  return (
    <header>
      <div className="left-buttons">
        <Link to="/Connexion" className="connexion-btn">{t("connexion.title")}</Link>
      </div>

      <div className="right-controls">
        <div className="search-container2">
          <input
            type="text"
            placeholder={t("search.placeholder")}
            className={lang === "ar" ? "text-ar" : ""}
          />
          <span className="search-icon2">
            <FaSearch />
          </span>
        </div>

        <div className="language-select" ref={languageRef}>
          <div className="selected" onClick={() => setOpenLang(!openLang)}>
            {renderLangIcon(lang)}
            <span>{lang.toUpperCase()}</span>
          </div>

          {openLang && (
            <div className="options">
              <div className="option" onClick={() => handleLangClick("fr")}>
                 <MdTranslate className="lang-icon" />FR
              </div>
              <div className="option" onClick={() => handleLangClick("ar")}>
                <HiOutlineTranslate className="lang-icon" />AR
              </div>
              <div className="option" onClick={() => handleLangClick("en")}>
                <TbLanguage className="lang-icon" /> EN
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
