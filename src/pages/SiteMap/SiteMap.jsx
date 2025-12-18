import React from 'react';
import { Link } from 'react-router-dom';
import './SiteMap.css';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import SubHeader from '../../components/SubHeader/SubHeader';

const Sitemap = () => {
  return (
    <>
    <Header />
    <SubHeader />
    <div className="sitemap-page">
      <div className="container">
        <h1>Plan du Site</h1>
        <p className="subtitle">Toutes les pages de notre site organisées pour vous</p>
        
        <div className="sitemap-sections">
          
          {/* Section principale */}
          <section className="sitemap-section">
            <h2>Pages principales</h2>
            <ul>
              <li><Link to="/">Accueil</Link></li>
              <li><Link to="/Services">Services</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/trajets">Trajets & Itinéraires</Link></li>
              <li><Link to="/reservation">Réservation</Link></li>
              <li><Link to="/tarifs">Tarifs</Link></li>
            </ul>
          </section>
          
          {/* Section services */}
          <section className="sitemap-section">
            <h2>Nos Services</h2>
            <ul>
              <li><Link to="/services/transport-routier">Transport Routier</Link></li>
              <li><Link to="/services/logistique">Logistique</Link></li>
              <li><Link to="/services/transport-exceptionnel">Transport Exceptionnel</Link></li>
              <li><Link to="/services/transport-frigorifique">Transport Frigorifique</Link></li>
              <li><Link to="/services/messagerie">Messagerie Express</Link></li>
            </ul>
          </section>
          
          {/* Section client */}
          <section className="sitemap-section">
            <h2>Espace Client</h2>
            <ul>
              <li><Link to="/mon-compte">Mon Compte</Link></li>
              <li><Link to="/mes-reservations">Mes Réservations</Link></li>
              <li><Link to="/paiement">Paiement en ligne</Link></li>
              <li><Link to="/suivi-colis">Suivi de Colis</Link></li>
              <li><Link to="/devis">Demander un Devis</Link></li>
            </ul>
          </section>
          
          {/* Section informations */}
          <section className="sitemap-section">
            <h2>Informations</h2>
            <ul>
              <li><Link to="/APropos">À propos de Sogral</Link></li>
              <li><Link to="/histoire">Notre Histoire</Link></li>
              <li><Link to="/flotte">Notre Flotte</Link></li>
              <li><Link to="/certifications">Certifications</Link></li>
              <li><Link to="/carrieres">Carrières</Link></li>
            </ul>
          </section>
          
          {/* Section support */}
          <section className="sitemap-section">
            <h2>Support & Aide</h2>
            <ul>
              <li><Link to="/faq">FAQ</Link></li>
              <li><Link to="/assistance">Assistance</Link></li>
              <li><Link to="/conditions-generales">Conditions Générales</Link></li>
              <li><Link to="/Confid">Politique de Confidentialité</Link></li>
              <li><Link to="/cookies">Politique des Cookies</Link></li>
              <li><Link to="/mentions-legales">Mentions Légales</Link></li>
            </ul>
          </section>
          
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default Sitemap;