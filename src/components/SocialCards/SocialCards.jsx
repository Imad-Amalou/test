import React from "react";
import "./SocialCards.css"; // Assurez-vous que le CSS est importé

const socialLinks = [
  {
    name: "Facebook",
    img: "https://cdn-icons-png.flaticon.com/512/733/733547.png",
    description: "Suivez-nous sur Facebook pour rester informé de nos actualités et nouveautés au quotidien.",
  },
  {
    name: "LinkedIn",
    img: "https://cdn-icons-png.flaticon.com/512/3536/3536505.png",
    description: "Retrouvez nos publications professionnelles et notre communauté sur LinkedIn.",
  },
  {
    name: "Instagram",
    img: "https://cdn-icons-png.flaticon.com/512/2111/2111463.png",
    description: "Découvrez nos photos, stories et moments forts directement sur Instagram.",
  },
  {
    name: "Twitter",
    img: "https://cdn-icons-png.flaticon.com/512/733/733579.png",
    description: "Suivez nos messages rapides et nos annonces instantanées sur Twitter.",
  },
];

const SocialCards = () => {
  return (
    <section>
      <h2 className="section-title2">Nos réseaux sociaux</h2>
      <div className="social-cards">
        {socialLinks.map((link, index) => (
          <div className="card" key={index}>
            <img src={link.img} alt={link.name} />
            <div>
              <h3>{link.name}</h3>
              <p>{link.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SocialCards;
