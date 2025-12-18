import React from 'react';
import { Link } from 'react-router-dom';
import './MentionsLegales.css';
import Header from '../../components/Header/Header';
import SubHeader from '../../components/SubHeader/SubHeader';
import Footer from '../../components/Footer/Footer';

const MentionsLegales = () => {
  return (
    <>
    <Header />
    <SubHeader />
    
    <div className="mentions-legales-page">
      <div className="container">
        {/* Header avec navigation */}
        <div className="mentions-header">
          <h1 className="page-title">Mentions Légales</h1>
          <p className="page-subtitle">Informations légales concernant la société Sogral</p>
          <div className="breadcrumb">
            <Link to="/">Accueil</Link>
            <span> / </span>
            <span>Mentions Légales</span>
          </div>
        </div>

        <div className="mentions-content">
          {/* Informations de la société */}
          <section className="mentions-section">
            <div className="section-header">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="section-icon">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" 
                      fill="currentColor"/>
              </svg>
              <h2>Informations sur la société</h2>
            </div>
            <div className="company-info-grid">
              <div className="info-card">
                <h3>Dénomination sociale</h3>
                <p>SOGRAL (Société de Gestion des Réseaux et Activités Logistiques)</p>
              </div>
              <div className="info-card">
                <h3>Forme juridique</h3>
                <p>Société par Actions Simplifiée (SAS)</p>
              </div>
              <div className="info-card">
                <h3>Capital social</h3>
                <p>10.000.000 DZD</p>
              </div>
              <div className="info-card">
                <h3>Numéro d'identification</h3>
                <p>RCS Alger B 12 345 678</p>
              </div>
              <div className="info-card">
                <h3>Numéro fiscal</h3>
                <p>NIF : 0012345678910</p>
              </div>
              <div className="info-card">
                <h3>Numéro statistique</h3>
                <p>NIS : 123456789</p>
              </div>
            </div>
          </section>

          {/* Coordonnées */}
          <section className="mentions-section">
            <div className="section-header">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="section-icon">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" 
                      fill="currentColor"/>
              </svg>
              <h2>Coordonnées</h2>
            </div>
            <div className="contact-info">
              <div className="contact-item">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" 
                        fill="currentColor"/>
                </svg>
                <div>
                  <h4>Siège social</h4>
                  <p>123 Rue Didouche Mourad, Alger Centre</p>
                  <p>16000 Alger, Algérie</p>
                </div>
              </div>
              <div className="contact-item">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M20 15.5c-1.2 0-2.4-.2-3.6-.6-.3-.1-.7 0-1 .2l-2.2 2.2c-2.8-1.4-5.1-3.8-6.6-6.6l2.2-2.2c.3-.3.4-.7.2-1-.3-1.1-.5-2.3-.5-3.5 0-.6-.4-1-1-1H4c-.6 0-1 .4-1 1 0 9.4 7.6 17 17 17 .6 0 1-.4 1-1v-3.5c0-.6-.4-1-1-1z" 
                        fill="currentColor"/>
                </svg>
                <div>
                  <h4>Téléphone</h4>
                  <p>+213 (0)21 23 45 67</p>
                  <p>Service client : +213 (0)21 23 45 68</p>
                </div>
              </div>
              <div className="contact-item">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" 
                        fill="currentColor"/>
                </svg>
                <div>
                  <h4>Email</h4>
                  <p>contact@sogral.dz</p>
                  <p>commercial@sogral.dz</p>
                </div>
              </div>
            </div>
          </section>

          {/* Directeur de publication */}
          <section className="mentions-section">
            <div className="section-header">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="section-icon">
                <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" 
                      fill="currentColor"/>
              </svg>
              <h2>Directeur de publication</h2>
            </div>
            <div className="director-info">
              <p><strong>Nom :</strong> Mohamed KHELIF</p>
              <p><strong>Fonction :</strong> Président-Directeur Général</p>
              <p><strong>Email :</strong> pdg@sogral.dz</p>
            </div>
          </section>

          {/* Hébergement */}
          <section className="mentions-section">
            <div className="section-header">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="section-icon">
                <path d="M22 16v-2l-8.5-5V3.5c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5V9L2 14v2l8.5-2.5V19L8 20.5V22l4-1 4 1v-1.5L13.5 19v-5.5L22 16z" 
                      fill="currentColor"/>
              </svg>
              <h2>Hébergement</h2>
            </div>
            <div className="hosting-info">
              <p>Ce site est hébergé par :</p>
              <div className="hosting-card">
                <h3>Algeria Telecom</h3>
                <p>Siège social : 4 Boulevard Krim Belkacem, Alger</p>
                <p>Téléphone : +213 (0)21 43 21 43</p>
                <p>Site web : <a href="https://www.algerietelecom.dz" target="_blank" rel="noopener noreferrer">www.algerietelecom.dz</a></p>
              </div>
            </div>
          </section>

          {/* Propriété intellectuelle */}
          <section className="mentions-section">
            <div className="section-header">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="section-icon">
                <path d="M14 6l-3.75 5 2.85 3.8-1.6 1.2C9.81 13.75 7 10 7 10l-6 8h22L14 6z" 
                      fill="currentColor"/>
              </svg>
              <h2>Propriété intellectuelle</h2>
            </div>
            <div className="legal-content">
              <p>
                L'ensemble de ce site relève de la législation algérienne et internationale sur le droit d'auteur et la propriété intellectuelle. 
                Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
              </p>
              <p>
                La marque "SOGRAL" et le logo associé sont des marques déposées. Toute reproduction, représentation, modification, publication, 
                transmission, dénaturation, totale ou partielle du site ou de son contenu, par quelque procédé que ce soit, 
                et sur quelque support que ce soit est interdite sans autorisation préalable écrite.
              </p>
            </div>
          </section>

          {/* Protection des données */}
          <section className="mentions-section">
            <div className="section-header">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="section-icon">
                <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z" 
                      fill="currentColor"/>
              </svg>
              <h2>Protection des données personnelles</h2>
            </div>
            <div className="legal-content">
              <p>
                Conformément à la loi n°18-07 du 10 juin 2018 relative à la protection des personnes physiques dans le traitement des données à caractère personnel, 
                vous disposez d'un droit d'accès, de rectification, de suppression et d'opposition aux données personnelles vous concernant.
              </p>
              <p>
                Pour exercer ces droits, vous pouvez nous contacter à l'adresse email : 
                <a href="mailto:privacy@sogral.dz"> privacy@sogral.dz</a>
              </p>
              <div className="data-processing">
                <h4>Finalités du traitement des données :</h4>
                <ul>
                  <li>Gestion des réservations et commandes</li>
                  <li>Suivi de la relation client</li>
                  <li>Envoi d'informations commerciales (avec consentement)</li>
                  <li>Amélioration de nos services</li>
                  <li>Respect des obligations légales</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Cookies */}
          <section className="mentions-section">
            <div className="section-header">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="section-icon">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z" 
                      fill="currentColor"/>
              </svg>
              <h2>Politique relative aux cookies</h2>
            </div>
            <div className="legal-content">
              <p>
                Ce site utilise des cookies pour améliorer l'expérience utilisateur. Les cookies sont de petits fichiers texte stockés sur votre appareil.
              </p>
              <div className="cookies-list">
                <div className="cookie-type">
                  <h4>Cookies nécessaires</h4>
                  <p>Essentiels au fonctionnement du site (session, sécurité)</p>
                </div>
                <div className="cookie-type">
                  <h4>Cookies de préférences</h4>
                  <p>Mémorisent vos choix (langue, paramètres d'affichage)</p>
                </div>
                <div className="cookie-type">
                  <h4>Cookies statistiques</h4>
                  <p>Nous aident à comprendre comment le site est utilisé</p>
                </div>
              </div>
              <p>
                Vous pouvez configurer votre navigateur pour refuser les cookies. Pour en savoir plus, consultez notre 
                <Link to="/politique-cookies"> Politique des Cookies</Link>.
              </p>
            </div>
          </section>

          {/* Responsabilité */}
          <section className="mentions-section">
            <div className="section-header">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="section-icon">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" 
                      fill="currentColor"/>
              </svg>
              <h2>Limitation de responsabilité</h2>
            </div>
            <div className="legal-content">
              <p>
                Sogral s'efforce d'assurer au mieux de ses possibilités, l'exactitude et la mise à jour des informations diffusées sur ce site, 
                dont elle se réserve le droit de modifier, à tout moment et sans préavis, le contenu.
              </p>
              <p>
                Toutefois, Sogral ne peut garantir l'exactitude, la précision, l'exhaustivité ou l'adéquation des informations mises à disposition sur ce site.
              </p>
              <p>
                En conséquence, Sogral décline toute responsabilité :
              </p>
              <ul>
                <li>Pour toute imprécision, inexactitude ou omission portant sur des informations disponibles sur le site</li>
                <li>Pour tous dommages résultant d'une intrusion frauduleuse d'un tiers</li>
                <li>Pour tous dommages directs ou indirects, quelle qu'en soit la cause, l'origine, la nature ou les conséquences</li>
              </ul>
            </div>
          </section>

          {/* Loi applicable */}
          <section className="mentions-section">
            <div className="section-header">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="section-icon">
                <path d="M4 6h18v2H4zm0 6h18v2H4zm0 6h18v2H4z" 
                      fill="currentColor"/>
              </svg>
              <h2>Loi applicable et juridiction</h2>
            </div>
            <div className="legal-content">
              <p>
                Le présent site est régi par le droit algérien. Tout litige relatif à l'utilisation du site sera de la compétence 
                exclusive des tribunaux algériens.
              </p>
              <p>
                En cas de différend, une solution amiable sera recherchée avant toute action judiciaire.
              </p>
            </div>
          </section>

          {/* Mise à jour */}
          <section className="mentions-section update-info">
            <div className="section-header">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="section-icon">
                <path d="M21 10.12h-6.78l2.74-2.82c-2.73-2.7-7.15-2.8-9.88-.1-2.73 2.71-2.73 7.08 0 9.79 2.73 2.71 7.15 2.71 9.88 0C18.32 15.65 19 14.08 19 12.1h2c0 1.98-.88 4.55-2.64 6.29-3.51 3.48-9.21 3.48-12.72 0-3.5-3.47-3.53-9.11-.02-12.58 3.51-3.47 9.14-3.47 12.65 0L21 3v7.12z" 
                      fill="currentColor"/>
              </svg>
              <h2>Mise à jour des mentions légales</h2>
            </div>
            <div className="legal-content">
              <p><strong>Dernière mise à jour :</strong> 15 janvier 2024</p>
              <p>
                Sogral se réserve le droit de modifier les présentes mentions légales à tout moment. 
                Nous vous invitons à consulter régulièrement cette page pour prendre connaissance des éventuelles modifications.
              </p>
            </div>
          </section>

          {/* Contact juridique */}
          <div className="legal-contact">
            <h3>Service juridique Sogral</h3>
            <p>Pour toute question concernant ces mentions légales :</p>
            <a href="mailto:juridique@sogral.dz" className="legal-contact-btn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" 
                      fill="currentColor"/>
              </svg>
              juridique@sogral.dz
            </a>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default MentionsLegales;