import React from "react";
import "./SocialCards.css";
import { useTranslation } from "react-i18next";

const SocialCards = () => {
  const { t } = useTranslation();

  const socialLinks = [
    {
      key: "facebook",
      img: "https://cdn-icons-png.flaticon.com/512/733/733547.png",
    },
    {
      key: "linkedin",
      img: "https://cdn-icons-png.flaticon.com/512/3536/3536505.png",
    },
    {
      key: "instagram",
      img: "https://cdn-icons-png.flaticon.com/512/2111/2111463.png",
    },
    {
      key: "twitter",
      img: "https://cdn-icons-png.flaticon.com/512/733/733579.png",
    },
  ];

  return (
    <section>
      <h2 className="section-title2">{t("social.title")}</h2>

      <div className="social-cards">
        {socialLinks.map((link) => (
          <div className="card" key={link.key}>
            <img
              src={link.img}
              alt={t(`social.${link.key}.name`)}
            />
            <div>
              <h3>{t(`social.${link.key}.name`)}</h3>
              <p>{t(`social.${link.key}.description`)}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SocialCards;
