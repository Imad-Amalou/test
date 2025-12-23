import React, { useState } from "react";
import Header from "../../components/Header/Header";
import SubHeader from "../../components/SubHeader/SubHeader";
import Footer from "../../components/Footer/Footer";
import "./EspaceVoyageur.css";
import google from "../../Assets/google Play.png";
import apple from "../../Assets/app Store.svg";
import {
  FaTicketAlt,
  FaMobileAlt,
  FaMoneyBillWave,
  FaStar,
  FaSyncAlt,
  FaUsers
} from "react-icons/fa";


export default function EspaceVoyageur() {
  const [activeTab, setActiveTab] = useState("recherche");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [searchData, setSearchData] = useState({
    depart: "",
    destination: "",
    date: "",
    voyageurs: 1,
    classe: "standard"
  });
  const [loginData, setLoginData] = useState({
    email: "",
    password: ""
  });
  const [registerData, setRegisterData] = useState({
    nom: "",
    prenom: "",
    email: "",
    telephone: "",
    password: "",
    confirmPassword: ""
  });

  const voyagesDisponibles = [
    {
      id: 1,
      depart: "Alger",
      destination: "Oran",
      date: "15/04/2024",
      heure: "08:00",
      duree: "5h30",
      prix: "2.500 DA",
      places: 12,
      type: "Confort+",
      compagnie: "SOGRAL Premium"
    },
    {
      id: 2,
      depart: "Alger",
      destination: "Constantine",
      date: "15/04/2024",
      heure: "10:30",
      duree: "6h15",
      prix: "3.200 DA",
      places: 8,
      type: "Standard",
      compagnie: "SOGRAL Express"
    },
    {
      id: 3,
      depart: "Oran",
      destination: "Annaba",
      date: "16/04/2024",
      heure: "07:45",
      duree: "7h00",
      prix: "4.500 DA",
      places: 5,
      type: "Confort+",
      compagnie: "SOGRAL Premium"
    },
    {
      id: 4,
      depart: "Constantine",
      destination: "Béjaïa",
      date: "16/04/2024",
      heure: "14:00",
      duree: "4h30",
      prix: "2.800 DA",
      places: 15,
      type: "Économique",
      compagnie: "SOGRAL Basic"
    }
  ];

  const villes = ["Alger", "Oran", "Constantine", "Annaba", "Béjaïa", "Tizi Ouzou", "Sétif", "Blida"];
  const classes = ["Économique", "Standard", "Confort+"];

  const avantages = [
  {
    icon: <FaTicketAlt />,
    title: "Réservation facile",
    description: "Réservez vos billets en quelques clics"
  },
  {
    icon: <FaMobileAlt />,
    title: "E-billet mobile",
    description: "Votre billet directement sur smartphone"
  },
  {
    icon: <FaMoneyBillWave />,
    title: "Meilleurs prix",
    description: "Tarifs exclusifs pour les membres"
  },
  {
    icon: <FaStar />,
    title: "Programme fidélité",
    description: "Gagnez des points à chaque voyage"
  },
  {
    icon: <FaSyncAlt />,
    title: "Modification gratuite",
    description: "Changez vos dates sans frais"
  },
  {
    icon: <FaUsers />,
    title: "Réservation groupe",
    description: "Tarifs spéciaux pour les groupes"
  }
];


  const handleSearchChange = (e) => {
    const { name, value } = e.target;
    setSearchData(prev => ({ ...prev, [name]: value }));
  };

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginData(prev => ({ ...prev, [name]: value }));
  };

  const handleRegisterChange = (e) => {
    const { name, value } = e.target;
    setRegisterData(prev => ({ ...prev, [name]: value }));
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log("Recherche:", searchData);
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    console.log("Connexion:", loginData);
    setIsLoggedIn(true);
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    console.log("Inscription:", registerData);
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setLoginData({ email: "", password: "" });
  };

  const VoyageCard = ({ voyage }) => (
    <div className="voyage-card">
      <div className="voyage-header">
        <h4>{voyage.depart} → {voyage.destination}</h4>
        <span className={`voyage-type ${voyage.type.toLowerCase()}`}>{voyage.type}</span>
      </div>
      
      <div className="voyage-details">
        <div className="detail-item">
          <span className="detail-label">Date</span>
          <span className="detail-value">{voyage.date}</span>
        </div>
        <div className="detail-item">
          <span className="detail-label">Heure</span>
          <span className="detail-value">{voyage.heure}</span>
        </div>
        <div className="detail-item">
          <span className="detail-label">Durée</span>
          <span className="detail-value">{voyage.duree}</span>
        </div>
        <div className="detail-item">
          <span className="detail-label">Places</span>
          <span className={`detail-value ${voyage.places < 10 ? "low" : ""}`}>
            {voyage.places} restantes
          </span>
        </div>
      </div>
      
      <div className="voyage-footer">
        <div className="voyage-price">
          <span className="price">{voyage.prix}</span>
          <span className="per-person">/personne</span>
        </div>
        <button className="reserver-btn">
          Réserver
        </button>
      </div>
    </div>
  );

  return (
    <>
      <Header />
      <SubHeader />
      
      <main className="espace-voyageur">
        {/* Hero Section */}
        <section className="voyageur-hero">
          <div className="hero-content">
            <h1>Espace Voyageur</h1>
            <p>Voyagez en toute simplicité avec SOGRAL</p>
            <div className="hero-stats">
              <div className="stat">
                <span className="stat-number">50+</span>
                <span className="stat-label">Destinations</span>
              </div>
              <div className="stat">
                <span className="stat-number">100+</span>
                <span className="stat-label">Départs quotidiens</span>
              </div>
              <div className="stat">
                <span className="stat-number">98%</span>
                <span className="stat-label">Ponctualité</span>
              </div>
            </div>
          </div>
        </section>

        {/* Section Auth */}
        <section className="auth-section">
          <div className="container">
            {!isLoggedIn ? (
              <div className="auth-forms-container">
                <div className="auth-tabs">
                  <button 
                    className={`auth-tab ${activeTab === "connexion" ? "active" : ""}`}
                    onClick={() => setActiveTab("connexion")}
                  >
                    Connexion
                  </button>
                  <button 
                    className={`auth-tab ${activeTab === "inscription" ? "active" : ""}`}
                    onClick={() => setActiveTab("inscription")}
                  >
                    Nouveau compte
                  </button>
                  <button 
                    className={`auth-tab ${activeTab === "recherche" ? "active" : ""}`}
                    onClick={() => setActiveTab("recherche")}
                  >
                    Rechercher un voyage
                  </button>
                </div>

                <div className="auth-content">
                  {/* Connexion */}
                  {activeTab === "connexion" && (
                    <div className="auth-form-container">
                      <h3>Connexion à votre espace</h3>
                      <form onSubmit={handleLoginSubmit} className="auth-form">
                        <div className="form-group">
                          <label htmlFor="login-email">Email</label>
                          <input
                            type="email"
                            id="login-email"
                            name="email"
                            value={loginData.email}
                            onChange={handleLoginChange}
                            placeholder="votre@email.com"
                            required
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="login-password">Mot de passe</label>
                          <input
                            type="password"
                            id="login-password"
                            name="password"
                            value={loginData.password}
                            onChange={handleLoginChange}
                            placeholder="Votre mot de passe"
                            required
                          />
                        </div>
                        <div className="form-options">
                          <label className="checkbox-label">
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                            Se souvenir de moi
                          </label>
                          <a href="#" className="forgot-password">Mot de passe oublié ?</a>
                        </div>
                        <button type="submit" className="auth-submit-btn">
                          Se connecter
                        </button>
                      </form>
                    </div>
                  )}

                  {/* Inscription */}
                  {activeTab === "inscription" && (
                    <div className="auth-form-container">
                      <h3>Créer votre compte voyageur</h3>
                      <form onSubmit={handleRegisterSubmit} className="auth-form">
                        <div className="form-row">
                          <div className="form-group">
                            <label htmlFor="register-nom">Nom</label>
                            <input
                              type="text"
                              id="register-nom"
                              name="nom"
                              value={registerData.nom}
                              onChange={handleRegisterChange}
                              placeholder="Votre nom"
                              required
                            />
                          </div>
                          <div className="form-group">
                            <label htmlFor="register-prenom">Prénom</label>
                            <input
                              type="text"
                              id="register-prenom"
                              name="prenom"
                              value={registerData.prenom}
                              onChange={handleRegisterChange}
                              placeholder="Votre prénom"
                              required
                            />
                          </div>
                        </div>
                        <div className="form-group">
                          <label htmlFor="register-email">Email</label>
                          <input
                            type="email"
                            id="register-email"
                            name="email"
                            value={registerData.email}
                            onChange={handleRegisterChange}
                            placeholder="votre@email.com"
                            required
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="register-telephone">Téléphone</label>
                          <input
                            type="tel"
                            id="register-telephone"
                            name="telephone"
                            value={registerData.telephone}
                            onChange={handleRegisterChange}
                            placeholder="05 XX XX XX XX"
                            required
                          />
                        </div>
                        <div className="form-row">
                          <div className="form-group">
                            <label htmlFor="register-password">Mot de passe</label>
                            <input
                              type="password"
                              id="register-password"
                              name="password"
                              value={registerData.password}
                              onChange={handleRegisterChange}
                              placeholder="Créez un mot de passe"
                              required
                            />
                          </div>
                          <div className="form-group">
                            <label htmlFor="register-confirm">Confirmer</label>
                            <input
                              type="password"
                              id="register-confirm"
                              name="confirmPassword"
                              value={registerData.confirmPassword}
                              onChange={handleRegisterChange}
                              placeholder="Retapez votre mot de passe"
                              required
                            />
                          </div>
                        </div>
                        <button type="submit" className="auth-submit-btn">
                          Créer mon compte
                        </button>
                      </form>
                    </div>
                  )}

                  {/* Recherche */}
                  {activeTab === "recherche" && (
                    <div className="search-form-container">
                      <h3>Rechercher un voyage</h3>
                      <form onSubmit={handleSearchSubmit} className="search-form">
                        <div className="search-row">
                          <div className="form-group">
                            <label htmlFor="depart">Départ</label>
                            <select
                              id="depart"
                              name="depart"
                              value={searchData.depart}
                              onChange={handleSearchChange}
                              required
                            >
                              <option value="">Choisir une ville</option>
                              {villes.map((ville, index) => (
                                <option key={index} value={ville}>{ville}</option>
                              ))}
                            </select>
                          </div>
                          <div className="form-group">
                            <label htmlFor="destination">Destination</label>
                            <select
                              id="destination"
                              name="destination"
                              value={searchData.destination}
                              onChange={handleSearchChange}
                              required
                            >
                              <option value="">Choisir une ville</option>
                              {villes.map((ville, index) => (
                                <option key={index} value={ville}>{ville}</option>
                              ))}
                            </select>
                          </div>
                        </div>
                        <div className="search-row">
                          <div className="form-group">
                            <label htmlFor="date">Date de voyage</label>
                            <input
                              type="date"
                              id="date"
                              name="date"
                              value={searchData.date}
                              onChange={handleSearchChange}
                              required
                            />
                          </div>
                          <div className="form-group">
                            <label htmlFor="voyageurs">Voyageurs</label>
                            <select
                              id="voyageurs"
                              name="voyageurs"
                              value={searchData.voyageurs}
                              onChange={handleSearchChange}
                            >
                              {[1, 2, 3, 4, 5, 6].map(num => (
                                <option key={num} value={num}>{num} voyageur{num > 1 ? "s" : ""}</option>
                              ))}
                            </select>
                          </div>
                        </div>
                        <div className="form-group">
                          <label htmlFor="classe">Classe</label>
                          <select
                            id="classe"
                            name="classe"
                            value={searchData.classe}
                            onChange={handleSearchChange}
                          >
                            {classes.map((classe, index) => (
                              <option key={index} value={classe.toLowerCase()}>{classe}</option>
                            ))}
                          </select>
                        </div>
                        <button type="submit" className="search-submit-btn">
                          Rechercher des voyages
                        </button>
                      </form>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <div className="user-dashboard">
                <div className="dashboard-header">
                  <div className="user-info">
                    <div className="user-avatar">👤</div>
                    <div>
                      <h3>Bienvenue, Mohamed</h3>
                      <p>Membre SOGRAL Voyageur</p>
                    </div>
                  </div>
                  <button className="logout-btn" onClick={handleLogout}>
                    Déconnexion
                  </button>
                </div>
                
                <div className="dashboard-tabs">
                  <button className="dashboard-tab active">Mes réservations</button>
                  <button className="dashboard-tab">Mes voyages</button>
                  <button className="dashboard-tab">Mes points fidélité</button>
                  <button className="dashboard-tab">Mes informations</button>
                </div>
                
                <div className="dashboard-content">
                  <div className="reservations-list">
                    <h4>Vos prochains voyages</h4>
                    <div className="reservation-card">
                      <div className="reservation-info">
                        <div className="route">
                          <span className="city">Alger</span>
                          <span className="arrow">→</span>
                          <span className="city">Oran</span>
                        </div>
                        <div className="date-time">15/04/2024 • 08:00</div>
                        <div className="reference">Réf: SOG-2024-4587</div>
                      </div>
                      <div className="reservation-status confirmed">
                        Confirmé
                      </div>
                      <button className="voir-billet">
                        Voir mon billet
                      </button>
                    </div>
                  </div>
                  
                  <div className="dashboard-sidebar">
                    <div className="sidebar-card">
                      <h4>Vos points fidélité</h4>
                      <div className="points-display">
                        <span className="points-number">1,250</span>
                        <span className="points-label">points</span>
                      </div>
                      <p>Échangez vos points contre des réductions !</p>
                      <button className="points-btn">
                        Utiliser mes points
                      </button>
                    </div>
                    
                    <div className="sidebar-card">
                      <h4>Promotions en cours</h4>
                      <ul className="promotions-list">
                        <li>-20% sur Alger-Constantine</li>
                        <li>Week-end famille : 1 enfant gratuit</li>
                        <li>Cumulable avec points fidélité</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Section Avantages */}
        <section className="avantages-section">
          <div className="container">
            <h2 className="section-title">Les avantages voyageur SOGRAL</h2>
            <p className="section-subtitle">Profitez d'offres exclusives et de services premium</p>
            
            <div className="avantages-grid">
              {avantages.map((avantage, index) => (
                <div key={index} className="avantage-card">
                  <div className="avantage-icon">{avantage.icon}</div>
                  <h3>{avantage.title}</h3>
                  <p>{avantage.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section Voyages Disponibles */}
        <section className="voyages-section">
          <div className="container">
            <div className="section-header">
              <h2>Voyages disponibles</h2>
              <div className="section-controls">
                <select className="filter-select">
                  <option>Toutes les destinations</option>
                  <option>Alger → Oran</option>
                  <option>Alger → Constantine</option>
                  <option>Oran → Annaba</option>
                </select>
                <select className="sort-select">
                  <option>Prix croissant</option>
                  <option>Prix décroissant</option>
                  <option>Heure de départ</option>
                </select>
              </div>
            </div>
            
            <div className="voyages-grid">
              {voyagesDisponibles.map(voyage => (
                <VoyageCard key={voyage.id} voyage={voyage} />
              ))}
            </div>
            
            <div className="voir-plus">
              <button className="voir-plus-btn">
                Voir plus de voyages
              </button>
            </div>
          </div>
        </section>

        {/* Section Application */}
        <section className="app-section">
          <div className="container">
            <div className="app-content">
              <div className="app-text">
                <h2>L'application SOGRAL Voyageur</h2>
                <p>Téléchargez notre application et voyagez encore plus facilement</p>
                <ul className="app-features">
                  <li> Réservation en 2 minutes</li>
                  <li> E-billets sur mobile</li>
                  <li> Notifications en temps réel</li>
                  <li> Suivi de votre bus</li>
                  <li> Gestion des modifications</li>
                </ul>
                <div className="app-buttons">
  <button className="app-store-btn">
    <span className="store-icon">
      <img src={apple} alt="App Store" />
    </span>

  </button>

  <button className="play-store-btn">
    <span className="store-icon">
      <img src={google} alt="Google Play" />
    </span>

  </button>
</div>

              </div>
              <div className="app-image">
                <div className="phone-mockup">
                  <div className="phone-screen">
                    <div className="screen-content">
                      <div className="app-header">
                        <span className="app-logo">SOGRAL</span>
                        <span className="app-menu">☰</span>
                      </div>
                      <div className="app-search">
                        <input type="text" placeholder="Rechercher un voyage..." />
                      </div>
                      <div className="app-voyage">
                        <div className="app-route">
                          <span>Alger</span>
                          <span className="app-arrow">→</span>
                          <span>Oran</span>
                        </div>
                        <div className="app-date">15 avril • 08:00</div>
                        <button className="app-reserver">Réserver</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section FAQ */}
        <section className="faq-section">
          <div className="container">
            <h2 className="section-title">Questions fréquentes</h2>
            
            <div className="faq-grid">
              <div className="faq-item">
                <h3>Comment modifier ma réservation ?</h3>
                <p>Connectez-vous à votre espace voyageur, allez dans "Mes réservations" et cliquez sur "Modifier". Les modifications sont gratuites jusqu'à 24h avant le départ.</p>
              </div>
              
              <div className="faq-item">
                <h3>Puis-je annuler et me faire rembourser ?</h3>
                <p>Oui, l'annulation avec remboursement est possible jusqu'à 48h avant le départ. Après ce délai, des frais d'annulation peuvent s'appliquer.</p>
              </div>
              
              <div className="faq-item">
                <h3>Comment utiliser mes points fidélité ?</h3>
                <p>Lors de la réservation, cochez "Utiliser mes points". 100 points = 100 DA de réduction. Les points sont cumulables avec certaines promotions.</p>
              </div>
              
              <div className="faq-item">
                <h3>Où trouver mon e-billet ?</h3>
                <p>Votre e-billet est disponible dans votre espace voyageur et vous est envoyé par email. Vous pouvez aussi le retrouver dans l'application mobile.</p>
              </div>
            </div>
            
            <div className="contact-support">
              <p>Besoin d'aide ? Notre service client est à votre écoute</p>

              <div className="contact-options">
                <a href="tel:+21325456789" className="contact-option">
                  <span className="option-icon">
                    <i className="fa-solid fa-phone"></i>
                  </span>
                  <span className="option-text">025 45 67 89</span>
                </a>

                <a href="mailto:voyageurs@sogral.dz" className="contact-option">
                  <span className="option-icon">
                    <i className="fa-solid fa-envelope"></i>
                  </span>
                  <span className="option-text">voyageurs@sogral.dz</span>
                </a>

                <a href="#" className="contact-option">
                  <span className="option-icon">
                    <i className="fa-solid fa-comments"></i>
                  </span>
                  <span className="option-text">Chat en ligne</span>
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