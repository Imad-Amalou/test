import React from 'react';
import { Link } from 'react-router-dom';
import './Test.css';

const SectionAgences = () => {
  const agences = [
    {
      id: 1,
      ville: 'Alger',
      adresse: '123 Rue Didouche Mourad, Alger Centre',
      telephone: '+213 21 23 45 67',
      email: 'alger@sogral.dz',
      horaires: 'Lun-Sam: 8h-18h, Dim: 9h-13h',
      services: ['Transport routier', 'Messagerie', 'Logistique'],
      image: 'https://images.unsplash.com/photo-1587590227261-87e93d8d06f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 2,
      ville: 'Oran',
      adresse: '456 Avenue de l\'ALN, Oran',
      telephone: '+213 41 34 56 78',
      email: 'oran@sogral.dz',
      horaires: 'Lun-Sam: 8h-18h',
      services: ['Transport frigorifique', 'Distribution', 'Stockage'],
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 3,
      ville: 'Constantine',
      adresse: '789 Boulevard de la République, Constantine',
      telephone: '+213 31 45 67 89',
      email: 'constantine@sogral.dz',
      horaires: 'Lun-Sam: 8h-17h, Dim: 9h-12h',
      services: ['Transport exceptionnel', 'Conteneurs', 'ADN'],
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80'
    }
  ];

  return (
    <section className="section-agences">
      <div className="container">
        {/* En-tête de la section */}
        <div className="section-header">
          <h2 className="section-title">Nos Agences Sogral</h2>
          <p className="section-subtitle">
            Découvrez notre réseau d'agences à travers l'Algérie pour un service de proximité
          </p>
        </div>

        {/* Grille des agences */}
        <div className="agences-grid">
          {agences.map((agence) => (
            <div key={agence.id} className="agence-card">
              {/* Image de l'agence */}
              <div className="agence-image">
                <img src={agence.image} alt={`Agence Sogral ${agence.ville}`} />
                <div className="agence-badge">
                  <span className="badge-text">Agence</span>
                </div>
              </div>

              {/* Contenu de la carte */}
              <div className="agence-content">
                {/* Ville */}
                <div className="agence-ville">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="location-icon">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" 
                          fill="currentColor"/>
                  </svg>
                  <h3>{agence.ville}</h3>
                </div>

                {/* Adresse */}
                <div className="agence-info">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zM12 11.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" 
                          fill="var(--text-light)"/>
                  </svg>
                  <span>{agence.adresse}</span>
                </div>

                {/* Téléphone */}
                <div className="agence-info">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path d="M20 15.5c-1.2 0-2.4-.2-3.6-.6-.3-.1-.7 0-1 .2l-2.2 2.2c-2.8-1.4-5.1-3.8-6.6-6.6l2.2-2.2c.3-.3.4-.7.2-1-.3-1.1-.5-2.3-.5-3.5 0-.6-.4-1-1-1H4c-.6 0-1 .4-1 1 0 9.4 7.6 17 17 17 .6 0 1-.4 1-1v-3.5c0-.6-.4-1-1-1zM19 12h2c0-4.97-4.03-9-9-9v2c3.87 0 7 3.13 7 7zm-4 0h2c0-2.76-2.24-5-5-5v2c1.66 0 3 1.34 3 3z" 
                          fill="var(--text-light)"/>
                  </svg>
                  <a href={`tel:${agence.telephone}`}>{agence.telephone}</a>
                </div>

                {/* Horaires */}
                <div className="agence-info">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" 
                          fill="var(--text-light)"/>
                  </svg>
                  <span>{agence.horaires}</span>
                </div>

                {/* Services proposés */}
                <div className="agence-services">
                  <h4>Services proposés :</h4>
                  <div className="services-tags">
                    {agence.services.map((service, index) => (
                      <span key={index} className="service-tag">
                        {service}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bouton contact */}
                <div className="agence-actions">
                  <a href={`mailto:${agence.email}`} className="contact-btn">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" 
                            fill="currentColor"/>
                    </svg>
                    Contacter
                  </a>
                  <a href={`https://maps.google.com/?q=${agence.adresse}`} 
                     target="_blank" 
                     rel="noopener noreferrer" 
                     className="map-btn">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" 
                            fill="currentColor"/>
                    </svg>
                    Itinéraire
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bouton vers toutes les agences */}
        <div className="all-agences-cta">
          <Link to="/AgencesSogral" className="view-all-btn">
            Voir toutes nos agences
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z" 
                    fill="currentColor"/>
            </svg>
          </Link>
          <p className="agences-count">
            +15 agences à travers l'Algérie
          </p>
        </div>
      </div>
    </section>
  );
};

export default SectionAgences;