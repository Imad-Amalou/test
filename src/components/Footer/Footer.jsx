import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="site-footer">

      {/* Premier étage : 4 colonnes */}
      <div className="footer-top">
        <div className="footer-column">
          <h4>À propos de Sogral</h4>
          <p>Découvrez nos services de transport et nos offres pour faciliter vos déplacements en Algérie.</p>
        </div>

        <div className="footer-column">
          <h4>Nos services</h4>
          <ul>
            <li><a href="#">Réservation en ligne</a></li>
            <li><a href="#">Consulter les trajets</a></li>
            <li><a href="#">Paiement sécurisé</a></li>
            <li><a href="#">Service client</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Support</h4>
          <ul>
            <li><a href="#">FAQ</a></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><a href="#">Assistance</a></li>
            <li><Link to="/sitemap">Plan du site</Link></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Newsletter</h4>
          <p>Inscrivez-vous pour recevoir les dernières nouvelles et offres de Sogral.</p>
          <input type="email" placeholder="Votre email" />
          <button>S’inscrire</button>
        </div>
      </div>

      {/* Deuxième étage : liens rapides + réseaux sociaux */}
      <div className="footer-middle">
        <div className="footer-links">
          <Link to="/">Accueil</Link>
          <a href="#">Itinéraires</a>
          <Link to="/Services">Services</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="footer-social">
          <a href="#" target="_blank" aria-label="Facebook">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="30" fill="#333">
              <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.464.099 2.796.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.31h3.587l-.467 3.622h-3.12V24h6.116C23.407 24 24 23.407 24 22.675V1.325C24 .593 23.407 0 22.675 0z"/>
            </svg>
          </a>
          <a href="#" target="_blank" aria-label="Twitter">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="30" fill="#333">
              <path d="M24 4.557a9.83 9.83 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724 9.864 9.864 0 0 1-3.127 1.195 4.916 4.916 0 0 0-8.38 4.482A13.944 13.944 0 0 1 1.671 3.149a4.916 4.916 0 0 0 1.523 6.573 4.897 4.897 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 0 1-2.224.084 4.919 4.919 0 0 0 4.59 3.417A9.867 9.867 0 0 1 0 21.539a13.94 13.94 0 0 0 7.548 2.212c9.056 0 14.009-7.514 14.009-14.009 0-.213-.005-.425-.014-.636A10.012 10.012 0 0 0 24 4.557z"/>
            </svg>
          </a>
          <a href="#" target="_blank" aria-label="Instagram">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="30" fill="#333">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.344 3.608 1.32.975.975 1.258 2.242 1.32 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.345 2.633-1.32 3.608-.975.975-2.242 1.258-3.608 1.32-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.345-3.608-1.32-.975-.975-1.258-2.242-1.32-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.062-1.366.345-2.633 1.32-3.608C4.528 2.577 5.795 2.294 7.161 2.232 8.427 2.175 8.807 2.163 12 2.163m0-2.163C8.741 0 8.332.012 7.052.07 5.771.128 4.6.422 3.678 1.344 2.756 2.266 2.462 3.437 2.404 4.718.012 8.332 0 8.741 0 12s.012 3.668.07 4.948c.058 1.281.352 2.452 1.274 3.374.922.922 2.093 1.216 3.374 1.274 1.28.058 1.689.07 4.948.07s3.668-.012 4.948-.07c1.281-.058 2.452-.352 3.374-1.274.922-.922 1.216-2.093 1.274-3.374.058-1.28.07-1.689.07-4.948s-.012-3.668-.07-4.948c-.058-1.281-.352-2.452-1.274-3.374-.922-.922-2.093-1.216-3.374-1.274C15.668.012 15.259 0 12 0z"/>
              <circle cx="12" cy="12" r="3.5"/>
            </svg>
          </a>
          <a href="#" target="_blank" aria-label="LinkedIn">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="30" fill="#333">
              <path d="M22.23 0H1.77C.79 0 0 .774 0 1.728v20.543C0 23.226.79 24 1.77 24h20.46C23.21 24 24 23.226 24 22.271V1.728C24 .774 23.21 0 22.23 0zM7.12 20.452H3.56V9h3.56v11.452zM5.34 7.58a2.06 2.06 0 1 1 0-4.119 2.06 2.06 0 0 1 0 4.119zm15.112 12.872h-3.56v-5.632c0-1.34-.024-3.067-1.867-3.067-1.868 0-2.154 1.459-2.154 2.968v5.732H9.397V9h3.415v1.561h.048c.475-.9 1.636-1.848 3.367-1.848 3.598 0 4.265 2.368 4.265 5.448v6.791z"/>
            </svg>
          </a>
        </div>
      </div>

      {/* Troisième étage : logo */}
      <div className="footer-bottom">
        <img src="images/logo.png" alt="Sogral Logo" />
        <p>&copy; 2025 Sogral. Tous droits réservés.</p>
      </div>

    </footer>
    
  );
};

export default Footer;
