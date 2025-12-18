import React, { useState } from 'react';
import './Services.css';
import Header from "../../components/Header/Header";
import SubHeader from "../../components/SubHeader/SubHeader";
import Footer from "../../components/Footer/Footer";

const Services = () => {
  const [activeTab, setActiveTab] = useState('transport');

  const transportServices = [
    {
      id: 1,
      title: "Transport Routier",
      icon: "🚛",
      description: "Transport national et international de marchandises avec notre flotte moderne et écologique.",
      features: [
        "Messagerie express",
        "Transport TL/PL",
        "Frigorifique",
        "ADR (matières dangereuses)"
      ]
    },
    {
      id: 2,
      title: "Transport Exceptionnel",
      icon: "🏗️",
      description: "Solutions pour charges hors gabarit et convois spéciaux.",
      features: [
        "Convois exceptionnels",
        "Équipements lourds",
        "Machines industrielles",
        "Projets complexes"
      ]
    },
    {
      id: 3,
      title: "Distribution Urbaine",
      icon: "🚚",
      description: "Livraisons en centre-ville avec véhicules adaptés et respectueux de l'environnement.",
      features: [
        "Livraisons last mile",
        "Véhicules électriques",
        "Plages horaires flexibles",
        "Suivi en temps réel"
      ]
    }
  ];

  const logisticServices = [
    {
      id: 4,
      title: "Stockage & Entreposage",
      icon: "📦",
      description: "Solutions d'entreposage sécurisées avec gestion des stocks optimisée.",
      features: [
        "Plateformes logistiques",
        "Stockage longue durée",
        "Cross-docking",
        "Préparation de commandes"
      ]
    },
    {
      id: 5,
      title: "Supply Chain",
      icon: "🔗",
      description: "Gestion complète de votre chaîne d'approvisionnement.",
      features: [
        "Optimisation des flux",
        "Gestion des approvisionnements",
        "Planification des stocks",
        "Reporting personnalisé"
      ]
    },
    {
      id: 6,
      title: "Logistique Inverse",
      icon: "🔄",
      description: "Gestion des retours et de la valorisation des produits.",
      features: [
        "Gestion des retours",
        "Reconditionnement",
        "Recyclage",
        "Valorisation"
      ]
    }
  ];

  const ecoServices = [
    {
      id: 7,
      title: "Transport Écologique",
      icon: "🌿",
      description: "Solutions de transport respectueuses de l'environnement.",
      features: [
        "Véhicules électriques",
        "Biocarburants",
        "Optimisation des trajets",
        "Bilan carbone"
      ]
    },
    {
      id: 8,
      title: "Logistique Durable",
      icon: "♻️",
      description: "Approche responsable de la supply chain.",
      features: [
        "Emballages recyclables",
        "Énergies renouvelables",
        "Gestion des déchets",
        "Certifications vertes"
      ]
    }
  ];

  const certifications = [
    {
      name: "ISO 14001",
      description: "Management environnemental",
      icon: "🌍"
    },
    {
      name: "ISO 9001",
      description: "Management de la qualité",
      icon: "⭐"
    },
    {
      name: "Ecocert",
      description: "Transport durable",
      icon: "🌿"
    },
    {
      name: "GDP",
      description: "Bonnes pratiques de distribution",
      icon: "🏥"
    }
  ];

  return (
     <>
      <Header />
      <SubHeader />
    <div className="services-page">
      {/* Hero Section */}
      <section className="services-hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">Nos Services</h1>
            <p className="hero-subtitle">
              Des solutions de transport et logistique innovantes, durables et sur mesure
            </p>
            <div className="hero-stats">
              <div className="stat-item">
                <div className="stat-number">30+</div>
                <div className="stat-label">Années d'expérience</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">150+</div>
                <div className="stat-label">Véhicules</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">24/7</div>
                <div className="stat-label">Disponibilité</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Tabs */}
      <section className="services-tabs-section">
        <div className="container">
          <div className="tabs-header">
            <h2>Nos Domaines d'Expertise</h2>
            <p className="section-description">
              Découvrez notre gamme complète de services adaptés à tous vos besoins
            </p>
          </div>

          <div className="tabs-navigation">
            <button
              className={`tab-btn ${activeTab === 'transport' ? 'active' : ''}`}
              onClick={() => setActiveTab('transport')}
            >
              <span className="tab-icon">🚛</span>
              Transport
            </button>
            <button
              className={`tab-btn ${activeTab === 'logistique' ? 'active' : ''}`}
              onClick={() => setActiveTab('logistique')}
            >
              <span className="tab-icon">📦</span>
              Logistique
            </button>
            <button
              className={`tab-btn ${activeTab === 'ecologique' ? 'active' : ''}`}
              onClick={() => setActiveTab('ecologique')}
            >
              <span className="tab-icon">🌿</span>
              Solutions Écologiques
            </button>
          </div>

          <div className="tab-content">
            {activeTab === 'transport' && (
              <div className="services-grid">
                {transportServices.map((service) => (
                  <div key={service.id} className="service-card">
                    <div className="service-card-header">
                      <div className="service-icon">{service.icon}</div>
                      <h3>{service.title}</h3>
                    </div>
                    <p className="service-description">{service.description}</p>
                    <ul className="service-features">
                      {service.features.map((feature, index) => (
                        <li key={index}>
                          <span className="feature-check">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <button className="service-more-btn">
                      En savoir plus
                      <span className="arrow">→</span>
                    </button>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'logistique' && (
              <div className="services-grid">
                {logisticServices.map((service) => (
                  <div key={service.id} className="service-card">
                    <div className="service-card-header">
                      <div className="service-icon">{service.icon}</div>
                      <h3>{service.title}</h3>
                    </div>
                    <p className="service-description">{service.description}</p>
                    <ul className="service-features">
                      {service.features.map((feature, index) => (
                        <li key={index}>
                          <span className="feature-check">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <button className="service-more-btn">
                      En savoir plus
                      <span className="arrow">→</span>
                    </button>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'ecologique' && (
              <div className="services-grid">
                {ecoServices.map((service) => (
                  <div key={service.id} className="service-card eco-card">
                    <div className="service-card-header">
                      <div className="service-icon">{service.icon}</div>
                      <h3>{service.title}</h3>
                      <span className="eco-badge">ÉCOLOGIQUE</span>
                    </div>
                    <p className="service-description">{service.description}</p>
                    <ul className="service-features">
                      {service.features.map((feature, index) => (
                        <li key={index}>
                          <span className="feature-check">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <button className="service-more-btn eco-btn">
                      Découvrir nos solutions vertes
                      <span className="arrow">→</span>
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Fleet Section */}
      <section className="fleet-section">
        <div className="container">
          <div className="section-header">
            <h2>Notre Flotte Écologique</h2>
            <p className="section-description">
              Une flotte moderne et diversifiée pour un transport plus responsable
            </p>
          </div>
          
          <div className="fleet-grid">
            <div className="fleet-item">
              <div className="fleet-icon">🚛</div>
              <h3>Poids Lourds</h3>
              <p>19T à 44T, Euro 6 et électriques</p>
            </div>
            <div className="fleet-item">
              <div className="fleet-icon">🚚</div>
              <h3>Véhicules Urbains</h3>
              <p>Utilitaires électriques et GNV</p>
            </div>
            <div className="fleet-item">
              <div className="fleet-icon">❄️</div>
              <h3>Frigorifiques</h3>
              <p>Température contrôlée, basse consommation</p>
            </div>
            <div className="fleet-item">
              <div className="fleet-icon">⚡</div>
              <h3>Spéciaux</h3>
              <p>Équipements adaptés aux besoins spécifiques</p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="certifications-section">
        <div className="container">
          <div className="section-header">
            <h2>Nos Certifications & Engagements</h2>
            <p className="section-description">
              Garantie de qualité, sécurité et respect de l'environnement
            </p>
          </div>
          
          <div className="certifications-grid">
            {certifications.map((cert, index) => (
              <div key={index} className="certification-card">
                <div className="cert-icon">{cert.icon}</div>
                <div className="cert-content">
                  <h3>{cert.name}</h3>
                  <p>{cert.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section2">
        <div className="container">
          <div className="cta-card">
            <div className="cta-content">
              <h2>Un projet de transport ou logistique ?</h2>
              <p>
                Notre équipe d'experts est à votre écoute pour étudier votre besoin 
                et vous proposer la solution la plus adaptée et la plus écologique.
              </p>
            </div>
            <div className="cta-actions">
              <button className="cta-btn primary">
                Demander un devis
              </button>
              <button className="cta-btn secondary">
                Nous contacter
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
    
      <Footer />
    </>
  );
};

export default Services;