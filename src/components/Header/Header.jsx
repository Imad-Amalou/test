import React, { useState, useRef, useEffect } from "react";
import "./Header.css";
import { FaSearch, FaFlag, FaFlagUsa } from "react-icons/fa";
import { MdLanguage } from "react-icons/md";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t, i18n } = useTranslation();

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

  // 🔹 changement de langue GLOBAL
  const handleLangClick = (value) => {
    setLang(value);
    setOpenLang(false);

    i18n.changeLanguage(value);

    document.documentElement.lang = value;
    document.documentElement.dir = value === "ar" ? "rtl" : "ltr";
  };

  const renderSelectedIcon = () => {
    if (lang === "fr") return <FaFlag />;
    if (lang === "ar") return <MdLanguage />;
    return <FaFlagUsa />;
  };

  return (
    <header>
      <div className="left-buttons">
        {/* Boutons futurs */}
      </div>

      <div className="right-controls">
        <div className="search-container2">
          <input
            type="text"
            placeholder={t("search")}
          />
          <span className="search-icon2">
            <FaSearch />
          </span>
        </div>

        <div className="language-select" ref={languageRef}>
          <div
            className="selected"
            onClick={() => setOpenLang(!openLang)}
            role="button"
          >
            {renderSelectedIcon()}
            <span>{lang.toUpperCase()}</span>
          </div>

          {openLang && (
            <div className="options">
              <div className="option" onClick={() => handleLangClick("fr")}>
                <FaFlag /> FR
              </div>
              <div className="option" onClick={() => handleLangClick("ar")}>
                <MdLanguage /> AR
              </div>
              <div className="option" onClick={() => handleLangClick("en")}>
                <FaFlagUsa /> EN
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
