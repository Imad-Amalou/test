import React, { useState } from "react";
import Header from "../../components/Header/Header";
import SubHeader from "../../components/SubHeader/SubHeader";
import Footer from "../../components/Footer/Footer";
import "./EspaceTransporteur.css";
import {
  FaChartLine,
  FaMoneyBillWave,
  FaMobileAlt,
  FaShieldAlt,
  FaBullseye,
  FaUsers,
  FaPhoneAlt
} from "react-icons/fa";

export default function EspaceTransporteur() {
  const [activeTab, setActiveTab] = useState("inscription");
  const [loginData, setLoginData] = useState({
    identifiant: "",
    motdepasse: ""
  });
  const [inscriptionData, setInscriptionData] = useState({
    nom: "",
    prenom: "",
    entreprise: "",
    siret: "",
    email: "",
    telephone: "",
    typeVehicule: "",
    immatriculation: "",
    password: "",
    confirmPassword: "",
    acceptConditions: false
  });

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginData(prev => ({ ...prev, [name]: value }));
  };

  const handleInscriptionChange = (e) => {
    const { name, value, type, checked } = e.target;
    setInscriptionData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    console.log("Connexion:", loginData);
    // Logique de connexion ici
  };

  const handleInscriptionSubmit = (e) => {
    e.preventDefault();
    console.log("Inscription:", inscriptionData);
    // Logique d'inscription ici
  };

 const avantages = [
  {
    icon: <FaChartLine />,
    title: "Gestion simplifiée",
    description: "Suivez toutes vos missions et revenus en temps réel"
  },
  {
    icon: <FaMoneyBillWave />,
    title: "Paiements rapides",
    description: "Recevez vos paiements dans un délai de 72h maximum"
  },
  {
    icon: <FaMobileAlt />,
    title: "Application mobile",
    description: "Gérez vos trajets depuis votre smartphone"
  },
  {
    icon: <FaShieldAlt />,
    title: "Assurance incluse",
    description: "Protection complète pour vous et vos passagers"
  },
  {
    icon: <FaBullseye />,
    title: "Trajets optimisés",
    description: "Suggestions de trajets pour maximiser vos revenus"
  },
  {
    icon: <FaUsers />,
    title: "Support dédié",
    description: "Équipe dédiée aux transporteurs 7j/7"
  }
];


  const documents = [
    { nom: "Permis de conduire", obligatoire: true },
    { nom: "Carte grise", obligatoire: true },
    { nom: "Assurance transport", obligatoire: true },
    { nom: "Attestation de capacité", obligatoire: true },
    { nom: "K-bis (entreprise)", obligatoire: false },
    { nom: "Certificat de contrôle technique", obligatoire: true }
  ];

  const tarifs = [
    { type: "Petit transporteur (1-5 véhicules)", commission: "15%" },
    { type: "Moyen transporteur (6-15 véhicules)", commission: "12%" },
    { type: "Grand transporteur (16+ véhicules)", commission: "10%" },
    { type: "Transporteur premium (contrat annuel)", commission: "8%" }
  ];

  const faq = [
    {
      question: "Comment devenir transporteur partenaire ?",
      answer: "Remplissez le formulaire d'inscription, soumettez vos documents et passez un entretien avec notre équipe."
    },
    {
      question: "Quelle est la commission prélevée ?",
      answer: "La commission varie de 8% à 15% selon votre volume d'activité et le type de contrat."
    },
    {
      question: "Comment sont versés les paiements ?",
      answer: "Les paiements sont effectués par virement bancaire chaque semaine, avec un délai maximum de 72h."
    },
    {
      question: "Puis-je choisir mes trajets ?",
      answer: "Oui, vous avez accès à une plateforme où vous pouvez accepter ou refuser les missions proposées."
    }
  ];

  return (
    <>
      <Header />
      <SubHeader />
      
      <main className="espace-transporteur">
        {/* Hero Section */}
        <section className="transporteur-hero">
          <div className="hero-content">
            <h1>Espace Transporteur</h1>
            <p>Rejoignez le réseau SOGRAL et développez votre activité de transport</p>
            <div className="hero-stats">
              <div className="stat">
                <span className="stat-number">2,500+</span>
                <span className="stat-label">Transporteurs actifs</span>
              </div>
              <div className="stat">
                <span className="stat-number">15M+</span>
                <span className="stat-label">Kilomètres parcourus</span>
              </div>
              <div className="stat">
                <span className="stat-number">98%</span>
                <span className="stat-label">Satisfaction clients</span>
              </div>
            </div>
          </div>
        </section>

        {/* Section Avantages */}
        <section className="avantages-section">
          <div className="container">
            <h2 className="section-title6">Pourquoi devenir transporteur SOGRAL ?</h2>
            <p className="section-subtitle">Profitez de nombreux avantages exclusifs</p>
            
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

        {/* Section Connexion/Inscription */}
        <section className="auth-section">
          <div className="container">
            <div className="auth-tabs">
              <button 
                className={`tab-btn ${activeTab === "connexion" ? "active" : ""}`}
                onClick={() => setActiveTab("connexion")}
              >
                Connexion
              </button>
              <button 
                className={`tab-btn ${activeTab === "inscription" ? "active" : ""}`}
                onClick={() => setActiveTab("inscription")}
              >
                Nouveau transporteur
              </button>
            </div>

            <div className="auth-forms">
              {/* Formulaire de connexion */}
              {activeTab === "connexion" && (
                <div className="form-container">
                  <div className="form-header">
                    <h3>Connexion à votre espace</h3>
                    <p>Accédez à votre dashboard de transporteur</p>
                  </div>
                  
                  <form onSubmit={handleLoginSubmit} className="auth-form">
                    <div className="form-group">
                      <label htmlFor="identifiant">Identifiant ou Email</label>
                      <input
                        type="text"
                        id="identifiant"
                        name="identifiant"
                        value={loginData.identifiant}
                        onChange={handleLoginChange}
                        placeholder="Votre identifiant ou email"
                        required
                      />
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="motdepasse">Mot de passe</label>
                      <input
                        type="password"
                        id="motdepasse"
                        name="motdepasse"
                        value={loginData.motdepasse}
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
                    
                    <div className="form-footer">
                      <p>Pas encore inscrit ? <button type="button" onClick={() => setActiveTab("inscription")} className="switch-form">Créer un compte</button></p>
                    </div>
                  </form>
                </div>
              )}

              {/* Formulaire d'inscription */}
              {activeTab === "inscription" && (
                <div className="form-container">
                  <div className="form-header">
                    <h3>Devenir transporteur partenaire</h3>
                    <p>Remplissez le formulaire pour commencer le processus</p>
                  </div>
                  
                  <form onSubmit={handleInscriptionSubmit} className="auth-form">
                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="nom">Nom *</label>
                        <input
                          type="text"
                          id="nom"
                          name="nom"
                          value={inscriptionData.nom}
                          onChange={handleInscriptionChange}
                          placeholder="Votre nom"
                          required
                        />
                      </div>
                      
                      <div className="form-group">
                        <label htmlFor="prenom">Prénom *</label>
                        <input
                          type="text"
                          id="prenom"
                          name="prenom"
                          value={inscriptionData.prenom}
                          onChange={handleInscriptionChange}
                          placeholder="Votre prénom"
                          required
                        />
                      </div>
                    </div>

                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="entreprise">Nom de l'entreprise</label>
                        <input
                          type="text"
                          id="entreprise"
                          name="entreprise"
                          value={inscriptionData.entreprise}
                          onChange={handleInscriptionChange}
                          placeholder="Nom de votre entreprise"
                        />
                      </div>
                      
                      <div className="form-group">
                        <label htmlFor="siret">SIRET / NIF</label>
                        <input
                          type="text"
                          id="siret"
                          name="siret"
                          value={inscriptionData.siret}
                          onChange={handleInscriptionChange}
                          placeholder="Numéro SIRET ou NIF"
                        />
                      </div>
                    </div>

                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="email">Email *</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={inscriptionData.email}
                          onChange={handleInscriptionChange}
                          placeholder="email@exemple.com"
                          required
                        />
                      </div>
                      
                      <div className="form-group">
                        <label htmlFor="telephone">Téléphone *</label>
                        <input
                          type="tel"
                          id="telephone"
                          name="telephone"
                          value={inscriptionData.telephone}
                          onChange={handleInscriptionChange}
                          placeholder="05 XX XX XX XX"
                          required
                        />
                      </div>
                    </div>

                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="typeVehicule">Type de véhicule *</label>
                        <select
                          id="typeVehicule"
                          name="typeVehicule"
                          value={inscriptionData.typeVehicule}
                          onChange={handleInscriptionChange}
                          required
                        >
                          <option value="">Sélectionnez</option>
                          <option value="bus">Bus</option>
                          <option value="minibus">Minibus</option>
                          <option value="taxi">Taxi</option>
                          <option value="camionnette">Camionnette</option>
                          <option value="autre">Autre</option>
                        </select>
                      </div>
                      
                      <div className="form-group">
                        <label htmlFor="immatriculation">Immatriculation</label>
                        <input
                          type="text"
                          id="immatriculation"
                          name="immatriculation"
                          value={inscriptionData.immatriculation}
                          onChange={handleInscriptionChange}
                          placeholder="Ex: 123456-A-00"
                        />
                      </div>
                    </div>

                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="password">Mot de passe *</label>
                        <input
                          type="password"
                          id="password"
                          name="password"
                          value={inscriptionData.password}
                          onChange={handleInscriptionChange}
                          placeholder="Créez un mot de passe"
                          required
                        />
                      </div>
                      
                      <div className="form-group">
                        <label htmlFor="confirmPassword">Confirmez le mot de passe *</label>
                        <input
                          type="password"
                          id="confirmPassword"
                          name="confirmPassword"
                          value={inscriptionData.confirmPassword}
                          onChange={handleInscriptionChange}
                          placeholder="Retapez votre mot de passe"
                          required
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <label className="checkbox-label">
                        <input
                          type="checkbox"
                          name="acceptConditions"
                          checked={inscriptionData.acceptConditions}
                          onChange={handleInscriptionChange}
                          required
                        />
                        <span className="checkmark"></span>
                        J'accepte les <a href="#">conditions générales</a> et la <a href="#">politique de confidentialité</a> *
                      </label>
                    </div>
                    
                    <button type="submit" className="auth-submit-btn">
                      S'inscrire comme transporteur
                    </button>
                    
                    <div className="form-footer">
                      <p>Déjà inscrit ? <button type="button" onClick={() => setActiveTab("connexion")} className="switch-form">Se connecter</button></p>
                    </div>
                  </form>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Section Documents */}
        <section className="documents-section">
          <div className="container">
            <h2 className="section-title6">Documents requis</h2>
            <p className="section-subtitle">Préparez ces documents pour une inscription rapide</p>
            
            <div className="documents-grid">
              {documents.map((doc, index) => (
                <div key={index} className="document-card">
                  <div className={`doc-badge ${doc.obligatoire ? "obligatoire" : "facultatif"}`}>
                    {doc.obligatoire ? "Obligatoire" : "Facultatif"}
                  </div>
                  <div className="doc-icon">📄</div>
                  <h3>{doc.nom}</h3>
                  <p>{doc.obligatoire ? "Document requis pour la validation" : "Document recommandé"}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section Tarifs */}
        <section className="tarifs-section">
          <div className="container">
            <h2 className="section-title6">Nos offres pour transporteurs</h2>
            <p className="section-subtitle">Choisissez l'offre qui correspond à votre activité</p>
            
            <div className="tarifs-grid">
              {tarifs.map((tarif, index) => (
                <div key={index} className="tarif-card">
                  <div className="tarif-header">
                    <h3>{tarif.type}</h3>
                    <div className="tarif-price">
                      <span className="commission">{tarif.commission}</span>
                      <span className="commission-label">commission</span>
                    </div>
                  </div>
                  <ul className="tarif-features">
                    <li>✓ Accès à toutes les missions</li>
                    <li>✓ Support prioritaire</li>
                    <li>✓ Paiements hebdomadaires</li>
                    <li>✓ Formation gratuite</li>
                    <li>✓ Assurance incluse</li>
                  </ul>
                  <button className="tarif-btn">
                    Choisir cette offre
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section FAQ */}
        <section className="faq-section">
          <div className="container">
            <h2 className="section-title6">Questions fréquentes</h2>
            
            <div className="faq-grid">
              {faq.map((item, index) => (
                <div key={index} className="faq-item">
                  <div className="faq-question">
                    <h3>{item.question}</h3>
                    <span className="faq-toggle">+</span>
                  </div>
                  <div className="faq-answer">
                    <p>{item.answer}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="faq-contact">
              <p>Vous avez d'autres questions ?</p>
              <a href="mailto:transporteurs@sogral.dz" className="contact-btn">
                Contactez notre équipe transporteurs
              </a>
            </div>
          </div>
        </section>

        {/* Section CTA */}
        <section className="cta-section">
          <div className="container">
            <div className="cta-content">
              <h2>Prêt à rejoindre notre réseau ?</h2>
              <p>Plus de 2,500 transporteurs font déjà confiance à SOGRAL</p>
              <div className="cta-buttons">
                <button className="cta-btn-primary" onClick={() => setActiveTab("inscription")}>
                  Devenir transporteur
                </button>
                <a href="tel:+21325456789" className="cta-btn-secondary">
                  <FaPhoneAlt /> Nous appeler
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