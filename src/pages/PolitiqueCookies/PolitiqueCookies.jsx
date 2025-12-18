import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './PolitiqueCookies.css';
import Header from '../../components/Header/Header';
import SubHeader from '../../components/SubHeader/SubHeader';
import Footer from '../../components/Footer/Footer';

const PolitiqueCookies = () => {
  const [activeSection, setActiveSection] = useState('definition');

  const cookiesTypes = [
    {
      type: 'Cookies nécessaires',
      description: 'Essentiels au fonctionnement du site',
      examples: ['Authentification', 'Session utilisateur', 'Sécurité'],
      mandatory: true,
      duration: 'Session ou selon durée légale'
    },
    {
      type: 'Cookies de préférences',
      description: 'Mémorisent vos choix et paramètres',
      examples: ['Langue préférée', 'Paramètres d\'affichage', 'Mode sombre'],
      mandatory: false,
      duration: '1 an maximum'
    },
    {
      type: 'Cookies statistiques',
      description: 'Nous aident à améliorer le site',
      examples: ['Analytics', 'Mesure d\'audience', 'Pages visitées'],
      mandatory: false,
      duration: '13 mois maximum'
    },
    {
      type: 'Cookies de marketing',
      description: 'Personnalisent les publicités',
      examples: ['Ciblage publicitaire', 'Réseaux sociaux', 'Partage'],
      mandatory: false,
      duration: '13 mois maximum'
    }
  ];

  const tableCookies = [
    {
      nom: 'session_id',
      finalite: 'Maintenir la session utilisateur',
      durée: 'Session',
      type: 'Nécessaire',
      responsable: 'Sogral'
    },
    {
      nom: 'user_lang',
      finalite: 'Mémoriser la langue sélectionnée',
      durée: '1 an',
      type: 'Préférence',
      responsable: 'Sogral'
    },
    {
      nom: '_ga',
      finalite: 'Analytics - Suivi statistique',
      durée: '2 ans',
      type: 'Statistique',
      responsable: 'Google'
    },
    {
      nom: '_fbp',
      finalite: 'Publicité Facebook',
      durée: '3 mois',
      type: 'Marketing',
      responsable: 'Facebook'
    },
    {
      nom: 'cookie_consent',
      finalite: 'Enregistrer les préférences cookies',
      durée: '6 mois',
      type: 'Nécessaire',
      responsable: 'Sogral'
    }
  ];

  const handleManageCookies = () => {
    // Fonction pour ouvrir le gestionnaire de cookies
    alert('Ouvrir le panneau de gestion des cookies');
  };

  const handleAcceptAll = () => {
    // Fonction pour accepter tous les cookies
    alert('Tous les cookies ont été acceptés');
  };

  const handleRejectAll = () => {
    // Fonction pour refuser tous les cookies non nécessaires
    alert('Cookies non nécessaires refusés');
  };

  return (
    <>
    <Header />
    <SubHeader />
    
    <div className="politique-cookies-page">
      <div className="container">
        {/* Header */}
        <div className="cookies-header">
          <h1 className="page-title">Politique des Cookies</h1>
          <p className="page-subtitle">
            Informations sur l'utilisation des cookies sur le site Sogral
          </p>
          <div className="breadcrumb">
            <Link to="/">Accueil</Link>
            <span> / </span>
            <span>Politique des Cookies</span>
          </div>
        </div>

        <div className="cookies-content">
          {/* Navigation rapide */}
          <div className="quick-nav">
            <h3>Navigation rapide :</h3>
            <div className="nav-buttons">
              <button 
                className={`nav-btn ${activeSection === 'definition' ? 'active' : ''}`}
                onClick={() => setActiveSection('definition')}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z" 
                        fill="currentColor"/>
                </svg>
                Définition
              </button>
              <button 
                className={`nav-btn ${activeSection === 'types' ? 'active' : ''}`}
                onClick={() => setActiveSection('types')}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M14 6l-3.75 5 2.85 3.8-1.6 1.2C9.81 13.75 7 10 7 10l-6 8h22L14 6z" 
                        fill="currentColor"/>
                </svg>
                Types de cookies
              </button>
              <button 
                className={`nav-btn ${activeSection === 'gestion' ? 'active' : ''}`}
                onClick={() => setActiveSection('gestion')}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z" 
                        fill="currentColor"/>
                </svg>
                Gestion
              </button>
              <button 
                className={`nav-btn ${activeSection === 'table' ? 'active' : ''}`}
                onClick={() => setActiveSection('table')}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" 
                        fill="currentColor"/>
                </svg>
                Liste des cookies
              </button>
            </div>
          </div>

          {/* Section Définition */}
          <section id="definition" className={`cookies-section ${activeSection === 'definition' ? 'active' : ''}`}>
            <div className="section-header">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="section-icon">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z" 
                      fill="currentColor"/>
              </svg>
              <div>
                <h2>Qu'est-ce qu'un cookie ?</h2>
                <p className="section-subtitle">Comprendre les cookies et leur utilité</p>
              </div>
            </div>
            
            <div className="section-content">
              <div className="definition-card">
                <div className="definition-icon">🍪</div>
                <div className="definition-text">
                  <h3>Définition technique</h3>
                  <p>
                    Un <strong>cookie</strong> est un petit fichier texte stocké sur votre appareil (ordinateur, tablette, smartphone) 
                    lorsque vous visitez un site web. Il contient des informations sur votre navigation et permet au site de 
                    mémoriser vos préférences et vos actions.
                  </p>
                </div>
              </div>

              <div className="info-grid">
                <div className="info-item">
                  <div className="info-icon">📱</div>
                  <h4>Stockage local</h4>
                  <p>Les cookies sont stockés dans votre navigateur et ne sont accessibles que par le site qui les a créés.</p>
                </div>
                <div className="info-item">
                  <div className="info-icon">⏱️</div>
                  <h4>Durée de vie limitée</h4>
                  <p>Chaque cookie a une date d'expiration définie, de quelques minutes à plusieurs années.</p>
                </div>
                <div className="info-item">
                  <div className="info-icon">🔒</div>
                  <h4>Sécurité</h4>
                  <p>Les cookies ne peuvent pas contenir de virus ni exécuter de code malveillant.</p>
                </div>
              </div>

              <div className="legal-notice">
                <h4>Cadre légal</h4>
                <p>
                  Conformément à la loi n°18-07 du 10 juin 2018 relative à la protection des personnes physiques 
                  dans le traitement des données à caractère personnel et aux directives européennes, 
                  nous vous informons de l'utilisation des cookies sur notre site.
                </p>
              </div>
            </div>
          </section>

          {/* Section Types de cookies */}
          <section id="types" className={`cookies-section ${activeSection === 'types' ? 'active' : ''}`}>
            <div className="section-header">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="section-icon">
                <path d="M14 6l-3.75 5 2.85 3.8-1.6 1.2C9.81 13.75 7 10 7 10l-6 8h22L14 6z" 
                      fill="currentColor"/>
              </svg>
              <div>
                <h2>Types de cookies utilisés</h2>
                <p className="section-subtitle">Classification selon leur finalité</p>
              </div>
            </div>

            <div className="cookies-types-grid">
              {cookiesTypes.map((cookie, index) => (
                <div key={index} className={`cookie-type-card ${cookie.mandatory ? 'mandatory' : 'optional'}`}>
                  <div className="cookie-type-header">
                    <h3>{cookie.type}</h3>
                    <span className={`cookie-badge ${cookie.mandatory ? 'badge-necessary' : 'badge-optional'}`}>
                      {cookie.mandatory ? 'Nécessaire' : 'Optionnel'}
                    </span>
                  </div>
                  <p className="cookie-description">{cookie.description}</p>
                  
                  <div className="cookie-examples">
                    <h4>Exemples :</h4>
                    <div className="examples-tags">
                      {cookie.examples.map((example, idx) => (
                        <span key={idx} className="example-tag">{example}</span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="cookie-duration">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" 
                            fill="currentColor"/>
                    </svg>
                    <span>Durée : {cookie.duration}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="consent-info">
              <h4>Consentement</h4>
              <p>
                Les <strong>cookies nécessaires</strong> ne requièrent pas votre consentement car ils sont essentiels 
                au fonctionnement du site. Pour les autres types de cookies, nous recueillons votre consentement 
                explicite lors de votre première visite.
              </p>
            </div>
          </section>

          {/* Section Gestion des cookies */}
          <section id="gestion" className={`cookies-section ${activeSection === 'gestion' ? 'active' : ''}`}>
            <div className="section-header">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="section-icon">
                <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z" 
                      fill="currentColor"/>
              </svg>
              <div>
                <h2>Gérer vos préférences</h2>
                <p className="section-subtitle">Contrôlez quels cookies sont acceptés</p>
              </div>
            </div>

            <div className="management-cards">
              <div className="management-card">
                <div className="management-icon">🎛️</div>
                <h3>Gestion fine</h3>
                <p>Choisissez précisément quels types de cookies accepter</p>
                <button className="manage-btn" onClick={handleManageCookies}>
                  Personnaliser
                </button>
              </div>
              
              <div className="management-card">
                <div className="management-icon">✅</div>
                <h3>Tout accepter</h3>
                <p>Autorise tous les cookies pour une expérience optimale</p>
                <button className="accept-btn" onClick={handleAcceptAll}>
                  Accepter tout
                </button>
              </div>
              
              <div className="management-card">
                <div className="management-icon">❌</div>
                <h3>Tout refuser</h3>
                <p>Ne conserve que les cookies strictement nécessaires</p>
                <button className="reject-btn" onClick={handleRejectAll}>
                  Refuser tout
                </button>
              </div>
            </div>

            <div className="browser-instructions">
              <h4>Configuration via votre navigateur</h4>
              <p>
                Vous pouvez également gérer les cookies directement dans les paramètres de votre navigateur :
              </p>
              <div className="browser-links">
                <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer">
                  Chrome
                </a>
                <a href="https://support.mozilla.org/fr/kb/cookies-informations-sites-enregistrent" target="_blank" rel="noopener noreferrer">
                  Firefox
                </a>
                <a href="https://support.microsoft.com/fr-fr/microsoft-edge/supprimer-les-cookies-dans-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer">
                  Edge
                </a>
                <a href="https://support.apple.com/fr-fr/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer">
                  Safari
                </a>
              </div>
            </div>
          </section>

          {/* Section Table des cookies */}
          <section id="table" className={`cookies-section ${activeSection === 'table' ? 'active' : ''}`}>
            <div className="section-header">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="section-icon">
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" 
                      fill="currentColor"/>
              </svg>
              <div>
                <h2>Liste détaillée des cookies</h2>
                <p className="section-subtitle">Informations techniques sur chaque cookie</p>
              </div>
            </div>

            <div className="table-container">
              <table className="cookies-table">
                <thead>
                  <tr>
                    <th>Nom du cookie</th>
                    <th>Finalité</th>
                    <th>Durée</th>
                    <th>Type</th>
                    <th>Responsable</th>
                  </tr>
                </thead>
                <tbody>
                  {tableCookies.map((cookie, index) => (
                    <tr key={index}>
                      <td>
                        <span className="cookie-name">{cookie.nom}</span>
                      </td>
                      <td>{cookie.finalite}</td>
                      <td>
                        <span className={`duration-badge ${cookie.durée === 'Session' ? 'session' : ''}`}>
                          {cookie.durée}
                        </span>
                      </td>
                      <td>
                        <span className={`type-badge ${cookie.type.toLowerCase()}`}>
                          {cookie.type}
                        </span>
                      </td>
                      <td>
                        <span className="responsible">{cookie.responsable}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="legend">
              <h4>Légende :</h4>
              <div className="legend-items">
                <div className="legend-item">
                  <span className="legend-color necessary"></span>
                  <span>Cookies nécessaires</span>
                </div>
                <div className="legend-item">
                  <span className="legend-color preference"></span>
                  <span>Cookies de préférences</span>
                </div>
                <div className="legend-item">
                  <span className="legend-color statistic"></span>
                  <span>Cookies statistiques</span>
                </div>
                <div className="legend-item">
                  <span className="legend-color marketing"></span>
                  <span>Cookies marketing</span>
                </div>
              </div>
            </div>
          </section>

          {/* Section Contact */}
          <div className="contact-section">
            <div className="contact-content">
              <h3>Questions sur les cookies ?</h3>
              <p>
                Pour toute question concernant notre politique des cookies ou pour exercer vos droits, 
                contactez notre Délégué à la Protection des Données :
              </p>
              <div className="contact-info">
                <p><strong>Email :</strong> dpo@sogral.dz</p>
                <p><strong>Téléphone :</strong> +213 (0)21 23 45 69</p>
              </div>
              <div className="related-links">
                <Link to="/mentions-legales" className="related-link">
                  Mentions Légales
                </Link>
                <Link to="/confidentialite" className="related-link">
                  Politique de Confidentialité
                </Link>
                <Link to="/conditions-generales" className="related-link">
                  Conditions Générales
                </Link>
              </div>
            </div>
          </div>

          {/* Date de mise à jour */}
          <div className="update-info">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M21 10.12h-6.78l2.74-2.82c-2.73-2.7-7.15-2.8-9.88-.1-2.73 2.71-2.73 7.08 0 9.79 2.73 2.71 7.15 2.71 9.88 0C18.32 15.65 19 14.08 19 12.1h2c0 1.98-.88 4.55-2.64 6.29-3.51 3.48-9.21 3.48-12.72 0-3.5-3.47-3.53-9.11-.02-12.58 3.51-3.47 9.14-3.47 12.65 0L21 3v7.12z" 
                    fill="currentColor"/>
            </svg>
            <p><strong>Dernière mise à jour :</strong> 15 janvier 2024</p>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default PolitiqueCookies;