import React, { useState } from "react";
import Header from "../../components/Header/Header";
import SubHeader from "../../components/SubHeader/SubHeader";
import Footer from "../../components/Footer/Footer";
import contactImg from "../../Assets/histoir.jpg";
import emp1 from "../../Assets/emp1.jpeg";
import emp2 from "../../Assets/emp2.jpeg";
import emp3 from "../../Assets/emp3.jpeg";

import "./APropos.css";

export default function APropos() {
  const [activeMission, setActiveMission] = useState(0);

  const missions = [
    {
      id: 1,
      titre: "Connecter l'Algérie",
      description: "Relier toutes les régions du pays grâce à un réseau de transport moderne et efficace.",
      icon: "🌍"
    },
    {
      id: 2,
      titre: "Innovation technologique",
      description: "Développer des solutions digitales avancées pour simplifier les déplacements.",
      icon: "🚀"
    },
    {
      id: 3,
      titre: "Service client d'excellence",
      description: "Offrir une expérience voyageur exceptionnelle à chaque étape du parcours.",
      icon: "⭐"
    },
    {
      id: 4,
      titre: "Développement durable",
      description: "Promouvoir une mobilité responsable et respectueuse de l'environnement.",
      icon: "🌱"
    }
  ];

  const valeurs = [
    {
      titre: "Sécurité",
      description: "La sécurité de nos voyageurs et employés est notre priorité absolue.",
      color: "#00592D"
    },
    {
      titre: "Fiabilité",
      description: "Nous tenons nos engagements et respectons nos horaires.",
      color: "#95C11F"
    },
    {
      titre: "Innovation",
      description: "Nous repoussons constamment les limites pour améliorer nos services.",
      color: "#6FA11F"
    },
    {
      titre: "Service client",
      description: "Chaque voyageur mérite une attention personnalisée et de qualité.",
      color: "#008F4A"
    }
  ];

  const chiffresCles = [
    { nombre: "45", label: "Agences à travers le pays", suffix: "+" },
    { nombre: "500", label: "Véhicules modernes", suffix: "+" },
    { nombre: "2.5", label: "Millions de voyageurs", suffix: "M+" },
    { nombre: "98", label: "Taux de satisfaction", suffix: "%" },
    { nombre: "15", label: "Années d'expérience", suffix: "+" },
    { nombre: "1200", label: "Employés dévoués", suffix: "+" }
  ];

  const historique = [
    {
      annee: "2008",
      evenement: "Fondation de SOGRAL",
      description: "Création de la Société de Gestion et de Réalisation des Lignes de Transport"
    },
    {
      annee: "2012",
      evenement: "Première flotte moderne",
      description: "Acquisition de 50 nouveaux bus climatisés"
    },
    {
      annee: "2015",
      evenement: "Digitalisation",
      description: "Lancement de la plateforme de réservation en ligne"
    },
    {
      annee: "2018",
      evenement: "Expansion nationale",
      description: "Ouverture de 20 nouvelles agences dans 10 wilayas"
    },
    {
      annee: "2021",
      evenement: "Application mobile",
      description: "Lancement de l'application SOGRAL pour smartphones"
    },
    {
      annee: "2023",
      evenement: "Innovation écologique",
      description: "Introduction des premiers bus hybrides dans la flotte"
    }
  ];

  const certifications = [
    { nom: "ISO 9001", domaine: "Qualité de service" },
    { nom: "ISO 14001", domaine: "Management environnemental" },
    { nom: "OHSAS 18001", domaine: "Sécurité et santé au travail" },
    { nom: "Certification AFNOR", domaine: "Service client excellence" }
  ];

  const equipeDirigeante = [
    {
      nom: "Ahmed BENSALEM",
      poste: "PDG & Fondateur",
      experience: "25 ans dans le transport",
      photo: emp1,
      citation: "Notre mission est de connecter les Algériens avec excellence et innovation."
    },
    {
      nom: "Fatima ZOHRA",
      poste: "Directrice Générale",
      experience: "18 ans en management",
      photo: emp2,
      citation: "Chaque voyage est une histoire que nous rendons inoubliable."
    },
    {
      nom: "Karim LAKHDAR",
      poste: "Directeur des Opérations",
      experience: "15 ans en logistique",
      photo: emp3,
      citation: "L'efficacité opérationnelle est la clé de notre succès."
    }
  ];

  return (
    <>
      <Header />
      <SubHeader />
      
      <main className="apropos-page">
        {/* Hero Section */}
        <section className="apropos-hero">
          <div className="hero-content">
            <h1>À Propos de SOGRAL</h1>
            <p>Leader du transport en Algérie depuis 2008</p>
            <div className="hero-subtitle">
              <p>Nous connectons les Algériens à travers un réseau moderne, fiable et innovant de transport.</p>
            </div>
          </div>
        </section>

        {/* Section Notre Histoire */}
        <section className="histoire-section">
          <div className="container">
            <div className="histoire-content">
              <div className="histoire-text">
                <h2>Notre Histoire</h2>
                <div className="histoire-intro">
                  <p>
                    Fondée en 2008, <strong>SOGRAL</strong> (Société de Gestion et de Réalisation des Lignes de Transport) 
                    est née d'une vision ambitieuse : révolutionner le transport en Algérie en offrant des services 
                    modernes, fiables et accessibles à tous.
                  </p>
                  <p>
                    Depuis nos débuts modestes avec seulement 10 bus, nous avons grandi pour devenir le leader 
                    national du transport, connectant des millions d'Algériens chaque année à travers un réseau 
                    étendu couvrant tout le territoire national.
                  </p>
                </div>
                
                <div className="timeline">
                  <h3>Notre parcours</h3>
                  <div className="timeline-container">
                    {historique.map((item, index) => (
                      <div key={index} className="timeline-item">
                        <div className="timeline-year">{item.annee}</div>
                        <div className="timeline-content">
                          <h4>{item.evenement}</h4>
                          <p>{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="histoire-image">
                <div className="image-container">
                  <img src={contactImg} alt="Histoire SOGRAL" />
                  <div className="image-overlay">
                    <p>Depuis 2008, au service des Algériens</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section Notre Mission */}
        <section className="mission-section">
          <div className="container">
            <h2 className="section-title">Notre Mission & Vision</h2>
            
            <div className="mission-vision">
              <div className="mission-card">
                <div className="mission-header">
                  <div className="mission-icon">🎯</div>
                  <h3>Notre Mission</h3>
                </div>
                <p>
                  Offrir à chaque Algérien une expérience de transport exceptionnelle, 
                  sécurisée, confortable et accessible, en connectant efficacement 
                  les personnes et les communautés à travers le pays.
                </p>
              </div>
              
              <div className="vision-card">
                <div className="vision-header">
                  <div className="vision-icon">🔭</div>
                  <h3>Notre Vision</h3>
                </div>
                <p>
                  Être le leader incontesté du transport intelligent en Afrique du Nord, 
                  pionnier dans l'innovation durable et référence en matière de service client, 
                  tout en contribuant au développement économique et social de l'Algérie.
                </p>
              </div>
            </div>

            <div className="missions-details">
              <h3>Nos engagements</h3>
              <div className="missions-grid">
                {missions.map((mission, index) => (
                  <div 
                    key={mission.id}
                    className={`mission-detail ${activeMission === index ? 'active' : ''}`}
                    onClick={() => setActiveMission(index)}
                    onMouseEnter={() => setActiveMission(index)}
                  >
                    <div className="detail-icon">{mission.icon}</div>
                    <h4>{mission.titre}</h4>
                    <p>{mission.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section Nos Valeurs */}
        <section className="valeurs-section">
          <div className="container">
            <h2 className="section-title">Nos Valeurs</h2>
            <p className="section-subtitle">Les principes qui guident chacune de nos actions</p>
            
            <div className="valeurs-grid">
              {valeurs.map((valeur, index) => (
                <div key={index} className="valeur-card" style={{ borderTopColor: valeur.color }}>
                  <div className="valeur-content">
                    <h3>{valeur.titre}</h3>
                    <p>{valeur.description}</p>
                  </div>
                  <div className="valeur-number">0{index + 1}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section Chiffres Clés */}
        <section className="chiffres-section">
          <div className="container">
            <h2 className="section-title">SOGRAL en chiffres</h2>
            
            <div className="chiffres-grid">
              {chiffresCles.map((chiffre, index) => (
                <div key={index} className="chiffre-card">
                  <div className="chiffre-number">
                    <span className="nombre">{chiffre.nombre}</span>
                    <span className="suffix">{chiffre.suffix}</span>
                  </div>
                  <p className="chiffre-label">{chiffre.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section Équipe Dirigeante */}
        <section className="equipe-section">
          <div className="container">
            <h2 className="section-title">Notre Équipe Dirigeante</h2>
            <p className="section-subtitle">Des leaders expérimentés au service de votre mobilité</p>
            
            <div className="equipe-grid">
              {equipeDirigeante.map((membre, index) => (
                <div key={index} className="membre-card">
                  <div className="membre-image">
                    <img src={membre.photo || "../../Assets/contact.png"} alt={membre.nom} />
                    <div className="membre-overlay">
                      <p className="membre-citation">"{membre.citation}"</p>
                    </div>
                  </div>
                  <div className="membre-info">
                    <h3>{membre.nom}</h3>
                    <p className="membre-poste">{membre.poste}</p>
                    <p className="membre-experience">{membre.experience}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section Certifications */}
        <section className="certifications-section">
          <div className="container">
            <div className="certifications-content2">
              <div className="certifications-text">
                <h2>Nos Certifications</h2>
                <p>La reconnaissance de notre engagement qualité</p>
                
                <div className="certifications-list">
                  {certifications.map((certification, index) => (
                    <div key={index} className="certification-item">
                      <div className="certification-badge">
                        <span className="badge-text">ISO</span>
                      </div>
                      <div className="certification-details">
                        <h4>{certification.nom}</h4>
                        <p>{certification.domaine}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="certifications-image">
                <div className="quality-badge">
                  <div className="quality-star">⭐</div>
                  <h3>Excellence Certifiée</h3>
                  <p>Depuis 2015</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section Engagement Sociétal */}
        <section className="engagement-section">
          <div className="container">
            <h2 className="section-title">Notre Engagement Sociétal</h2>
            
            <div className="engagement-grid">
              <div className="engagement-card">
                <div className="engagement-icon">🌱</div>
                <h3>Écologie</h3>
                <ul>
                  <li>Flotte de bus hybrides</li>
                  <li>Politique zéro papier</li>
                  <li>Systèmes de récupération d'énergie</li>
                  <li>Tri sélectif dans toutes les agences</li>
                </ul>
              </div>
              
              <div className="engagement-card">
                <div className="engagement-icon">👥</div>
                <h3>Social</h3>
                <ul>
                  <li>Création d'emplois locaux</li>
                  <li>Tarifs sociaux pour étudiants et seniors</li>
                  <li>Accessibilité PMR</li>
                  <li>Formation continue des employés</li>
                </ul>
              </div>
              
              <div className="engagement-card">
                <div className="engagement-icon">🤝</div>
                <h3>Communauté</h3>
                <ul>
                  <li>Partenariats avec les universités</li>
                  <li>Sponsoring d'événements culturels</li>
                  <li>Programme de bénévolat employés</li>
                  <li>Support aux associations locales</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Section CTA */}
        <section className="cta-section">
          <div className="container">
            <div className="cta-content">
              <h2>Rejoignez l'aventure SOGRAL</h2>
              <p>Découvrez nos offres d'emploi et devenez acteur de la mobilité algérienne</p>
              <div className="cta-buttons">
                <a href="/carrieres" className="cta-btn primary">
                  Nos offres d'emploi
                </a>
                <a href="/contact" className="cta-btn secondary">
                  Devenir partenaire
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
}