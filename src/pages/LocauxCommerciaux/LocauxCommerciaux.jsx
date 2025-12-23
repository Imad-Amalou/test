import React, { useState } from "react";
import Header from "../../components/Header/Header";
import SubHeader from "../../components/SubHeader/SubHeader";
import Footer from "../../components/Footer/Footer";
import "./LocauxCommerciaux.css";
import {
  FaPhoneAlt,FaEnvelopeOpen,FaClock 
} from "react-icons/fa";

export default function LocauxCommerciaux() {
  const [activeView, setActiveView] = useState("liste");
  const [selectedLocal, setSelectedLocal] = useState(null);
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    entreprise: "",
    email: "",
    telephone: "",
    localId: "",
    message: "",
    typeDemande: "location"
  });

 const locaux = [
  {
    id: 1,
    agence: "Alger Centre",
    ville: "Alger",
    adresse: "123 Rue des Transports, Alger Centre",
    surface: "120 m²",
    prix: "150.000 DA/mois",
    etat: "Disponible",
     photos: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Local commercial lumineux, idéal pour agence de voyage ou service client.",
    equipements: ["Climatisation", "Système de sécurité", "Parking", "Internet haut débit"],
    dateDispo: "Immédiate"
  },
  {
    id: 2,
    agence: "Oran",
    ville: "Oran",
    adresse: "45 Avenue de l'Indépendance",
    surface: "85 m²",
    prix: "95.000 DA/mois",
    etat: "Disponible",
     photos: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Espace moderne au cœur du centre-ville d'Oran.",
    equipements: ["Climatisation", "Accès handicapés", "Store électrique"],
    dateDispo: "01/04/2024"
  },
  {
    id: 3,
    agence: "Constantine",
    ville: "Constantine",
    adresse: "78 Boulevard de la République",
    surface: "200 m²",
    prix: "220.000 DA/mois",
    etat: "Loué",
    photos: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
    ],
    description: "Grand local adapté pour centre de réservation.",
    equipements: ["Climatisation", "Salle de réunion", "Parking sécurisé"],
    dateDispo: "01/06/2024"
  }
];


  // Villes disponibles pour filtrage
  const villes = ["Toutes", "Alger", "Oran", "Constantine", "Annaba", "Béjaïa", "Tizi Ouzou"];
  
  // États des locaux
  const etats = ["Tous", "Disponible", "Loué", "En rénovation"];

  // Filtres
  const [filtres, setFiltres] = useState({
    ville: "Toutes",
    etat: "Tous",
    surfaceMin: "",
    surfaceMax: "",
    prixMax: ""
  });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFiltres(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Demande envoyée:", formData);
    alert("Votre demande a été envoyée avec succès !");
    setFormData({
      nom: "",
      prenom: "",
      entreprise: "",
      email: "",
      telephone: "",
      localId: "",
      message: "",
      typeDemande: "location"
    });
  };

  // Filtrer les locaux
  const locauxFiltres = locaux.filter(local => {
    if (filtres.ville !== "Toutes" && local.ville !== filtres.ville) return false;
    if (filtres.etat !== "Tous" && local.etat !== filtres.etat) return false;
    if (filtres.surfaceMin) {
      const surfaceNum = parseInt(local.surface);
      if (surfaceNum < parseInt(filtres.surfaceMin)) return false;
    }
    if (filtres.surfaceMax) {
      const surfaceNum = parseInt(local.surface);
      if (surfaceNum > parseInt(filtres.surfaceMax)) return false;
    }
    if (filtres.prixMax) {
      const prixNum = parseInt(local.prix);
      if (prixNum > parseInt(filtres.prixMax)) return false;
    }
    return true;
  });

  const openModal = (local) => {
    setSelectedLocal(local);
    setFormData(prev => ({ ...prev, localId: local.id }));
  };

  const closeModal = () => {
    setSelectedLocal(null);
  };

  return (
    <>
      <Header />
      <SubHeader />
      
      <main className="locaux-page">
        {/* Hero Section */}
        <section className="locaux-hero">
          <div className="hero-content2">
            <h1>Locaux Commerciaux SOGRAL</h1>
            <p>Découvrez nos espaces commerciaux disponibles à la location dans toutes nos agences</p>
            <div className="hero-stats">
              <div className="stat">
                <span className="stat-number">{locaux.length}</span>
                <span className="stat-label">Locaux disponibles</span>
              </div>
              <div className="stat">
                <span className="stat-number">69</span>
                <span className="stat-label">Villes</span>
              </div>
              <div className="stat">
                <span className="stat-number">95%</span>
                <span className="stat-label">Taux d'occupation</span>
              </div>
            </div>
          </div>
        </section>

        {/* Section Filtres */}
        <section className="filtres-section">
          <div className="container">
            <div className="filtres-header">
              <h2>Trouvez le local idéal</h2>
              <p>Filtrez selon vos critères ou consultez directement notre carte</p>
            </div>
            
            <div className="filtres-grid">
              <div className="filtre-group">
                <label htmlFor="ville">Ville</label>
                <select 
                  id="ville" 
                  name="ville" 
                  value={filtres.ville}
                  onChange={handleFilterChange}
                >
                  {villes.map((ville, index) => (
                    <option key={index} value={ville}>{ville}</option>
                  ))}
                </select>
              </div>
              
              <div className="filtre-group">
                <label htmlFor="etat">État</label>
                <select 
                  id="etat" 
                  name="etat" 
                  value={filtres.etat}
                  onChange={handleFilterChange}
                >
                  {etats.map((etat, index) => (
                    <option key={index} value={etat}>{etat}</option>
                  ))}
                </select>
              </div>
              
              <div className="filtre-group">
                <label htmlFor="surfaceMin">Surface min (m²)</label>
                <input
                  type="number"
                  id="surfaceMin"
                  name="surfaceMin"
                  value={filtres.surfaceMin}
                  onChange={handleFilterChange}
                  placeholder="Min"
                />
              </div>
              
              <div className="filtre-group">
                <label htmlFor="surfaceMax">Surface max (m²)</label>
                <input
                  type="number"
                  id="surfaceMax"
                  name="surfaceMax"
                  value={filtres.surfaceMax}
                  onChange={handleFilterChange}
                  placeholder="Max"
                />
              </div>
              
              <div className="filtre-group">
                <label htmlFor="prixMax">Prix max (DA/mois)</label>
                <input
                  type="number"
                  id="prixMax"
                  name="prixMax"
                  value={filtres.prixMax}
                  onChange={handleFilterChange}
                  placeholder="Budget max"
                />
              </div>
              
              <button 
                className="reset-btn"
                onClick={() => setFiltres({
                  ville: "Toutes",
                  etat: "Tous",
                  surfaceMin: "",
                  surfaceMax: "",
                  prixMax: ""
                })}
              >
                Réinitialiser
              </button>
            </div>
            
            <div className="view-toggle">
              <button 
                className={`toggle-btn ${activeView === "liste" ? "active" : ""}`}
                onClick={() => setActiveView("liste")}
              >
                <span className="toggle-icon">📋</span> Vue liste
              </button>
              <button 
                className={`toggle-btn ${activeView === "carte" ? "active" : ""}`}
                onClick={() => setActiveView("carte")}
              >
                <span className="toggle-icon">🗺️</span> Vue carte
              </button>
            </div>
          </div>
        </section>

        {/* Section Résultats */}
        <section className="resultats-section">
          <div className="container">
            <div className="resultats-header">
              <h3>
                {locauxFiltres.length} local{locauxFiltres.length > 1 ? "ux" : ""} trouvé{locauxFiltres.length > 1 ? "s" : ""}
                {filtres.ville !== "Toutes" && ` à ${filtres.ville}`}
              </h3>
              <div className="tri-options">
                <span>Trier par :</span>
                <select>
                  <option>Prix croissant</option>
                  <option>Prix décroissant</option>
                  <option>Surface croissante</option>
                  <option>Surface décroissante</option>
                </select>
              </div>
            </div>
            
            {activeView === "liste" ? (
              <div className="liste-locaux">
                {locauxFiltres.map(local => (
                  <div key={local.id} className="local-card">
                    <div className="local-image">
                      <img src={local.photos[0] || "/images/default-local.jpg"} alt={local.agence} />
                      <div className={`local-badge ${local.etat.toLowerCase().replace(" ", "-")}`}>
                        {local.etat}
                      </div>
                    </div>
                    
                    <div className="local-content">
                      <h4>{local.agence}</h4>
                      <p className="local-address">{local.adresse}</p>
                      
                      <div className="local-details">
                        <div className="detail-item">
                          <span className="detail-label">Surface</span>
                          <span className="detail-value">{local.surface}</span>
                        </div>
                        <div className="detail-item">
                          <span className="detail-label">Prix</span>
                          <span className="detail-value">{local.prix}</span>
                        </div>
                        <div className="detail-item">
                          <span className="detail-label">Disponibilité</span>
                          <span className="detail-value">{local.dateDispo}</span>
                        </div>
                      </div>
                      
                      <div className="local-equipements">
                        <span className="equipements-label">Équipements :</span>
                        <div className="equipements-list">
                          {local.equipements.slice(0, 3).map((equip, idx) => (
                            <span key={idx} className="equipement-tag">{equip}</span>
                          ))}
                          {local.equipements.length > 3 && (
                            <span className="equipement-tag">+{local.equipements.length - 3}</span>
                          )}
                        </div>
                      </div>
                      
                      <div className="local-actions">
                        <button 
                          className="details-btn"
                          onClick={() => openModal(local)}
                        >
                          Voir détails
                        </button>
                        <button 
                          className="demande-btn"
                          onClick={() => {
                            openModal(local);
                            document.querySelector('.demande-section').scrollIntoView({ behavior: 'smooth' });
                          }}
                        >
                          Demander ce local
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="carte-locaux">
                <div className="carte-placeholder">
                  <div className="carte-overlay">
                    <h3>Carte interactive des locaux</h3>
                    <p>Visualisez l'emplacement de tous nos locaux commerciaux</p>
                    <button className="carte-btn">Ouvrir Google Maps</button>
                  </div>
                  
                  <div className="carte-legende">
                    <div className="legende-item">
                      <span className="legende-color disponible"></span>
                      <span>Disponible</span>
                    </div>
                    <div className="legende-item">
                      <span className="legende-color loue"></span>
                      <span>Loué</span>
                    </div>
                    <div className="legende-item">
                      <span className="legende-color renovation"></span>
                      <span>En rénovation</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Section Demande */}
        <section className="demande-section">
          <div className="container">
            <div className="demande-header">
              <h2>Demande de location (gré à gré)</h2>
              <p>Intéressé par un de nos locaux ? Envoyez-nous votre demande</p>
            </div>
            
            <div className="demande-form-container">
              <form onSubmit={handleSubmit} className="demande-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="nom">Nom *</label>
                    <input
                      type="text"
                      id="nom"
                      name="nom"
                      value={formData.nom}
                      onChange={handleFormChange}
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
                      value={formData.prenom}
                      onChange={handleFormChange}
                      placeholder="Votre prénom"
                      required
                    />
                  </div>
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="entreprise">Entreprise</label>
                    <input
                      type="text"
                      id="entreprise"
                      name="entreprise"
                      value={formData.entreprise}
                      onChange={handleFormChange}
                      placeholder="Nom de votre entreprise"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="telephone">Téléphone *</label>
                    <input
                      type="tel"
                      id="telephone"
                      name="telephone"
                      value={formData.telephone}
                      onChange={handleFormChange}
                      placeholder="05 XX XX XX XX"
                      required
                    />
                  </div>
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleFormChange}
                    placeholder="email@exemple.com"
                    required
                  />
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="localId">Local concerné</label>
                    <select
                      id="localId"
                      name="localId"
                      value={formData.localId}
                      onChange={handleFormChange}
                    >
                      <option value="">Sélectionnez un local</option>
                      {locaux.map(local => (
                        <option key={local.id} value={local.id}>
                          {local.agence} - {local.surface}
                        </option>
                      ))}
                    </select>
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="typeDemande">Type de demande</label>
                    <select
                      id="typeDemande"
                      name="typeDemande"
                      value={formData.typeDemande}
                      onChange={handleFormChange}
                    >
                      <option value="location">Location</option>
                      <option value="information">Demande d'information</option>
                      <option value="visite">Demande de visite</option>
                    </select>
                  </div>
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleFormChange}
                    placeholder="Précisez votre demande, vos besoins spécifiques..."
                    rows="4"
                    required
                  />
                </div>
                
                <div className="form-group checkbox-group">
                  <label className="checkbox-label">
                    <input type="checkbox" required />
                    <span className="checkmark"></span>
                    J'accepte les <a href="#">conditions générales</a> de location
                  </label>
                </div>
                
                <button type="submit" className="submit-btn">
                  Envoyer la demande
                </button>
              </form>
              
              <div className="demande-info">
                <h3>Procédure de location</h3>
                <ol className="procedure-list">
                  <li>
                    <strong>1. Demande</strong>
                    <p>Remplissez le formulaire avec vos coordonnées</p>
                  </li>
                  <li>
                    <strong>2. Étude</strong>
                    <p>Notre équipe étudie votre demande sous 48h</p>
                  </li>
                  <li>
                    <strong>3. Visite</strong>
                    <p>Organisation d'une visite sur place</p>
                  </li>
                  <li>
                    <strong>4. Contrat</strong>
                    <p>Signature du bail et remise des clés</p>
                  </li>
                </ol>
                
                <div className="contact-info">
                  <h4>Service Locaux Commerciaux</h4>
                  <p><span style={{padding : '0px 5px',color : "#95C11F"}}><FaPhoneAlt /></span><strong>025 34 56 78</strong></p>
                  <p><span style={{padding : '0px 5px',color : "#95C11F"}}><FaEnvelopeOpen /> </span><strong>locaux@sogral.dz</strong></p>
                  <p><span style={{padding : '0px 5px',color : "#95C11F"}}><FaClock  /></span><strong>Lun-Ven: 8h-17h</strong></p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Modal Détails */}
        {selectedLocal && (
          <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="modal-close" onClick={closeModal}>×</button>
              
              <div className="modal-header">
                <h3>{selectedLocal.agence}</h3>
                <div className={`modal-badge ${selectedLocal.etat.toLowerCase().replace(" ", "-")}`}>
                  {selectedLocal.etat}
                </div>
              </div>
              
              <div className="modal-body">
                <div className="modal-gallery">
                  <img src={selectedLocal.photos[0] || "/images/default-local.jpg"} alt={selectedLocal.agence} />
                </div>
                
                <div className="modal-details">
                  <p className="modal-address">{selectedLocal.adresse}</p>
                  
                  <div className="modal-stats">
                    <div className="modal-stat">
                      <span className="stat-label">Surface</span>
                      <span className="stat-value">{selectedLocal.surface}</span>
                    </div>
                    <div className="modal-stat">
                      <span className="stat-label">Prix</span>
                      <span className="stat-value">{selectedLocal.prix}</span>
                    </div>
                    <div className="modal-stat">
                      <span className="stat-label">Disponible</span>
                      <span className="stat-value">{selectedLocal.dateDispo}</span>
                    </div>
                    <div className="modal-stat">
                      <span className="stat-label">Ville</span>
                      <span className="stat-value">{selectedLocal.ville}</span>
                    </div>
                  </div>
                  
                  <div className="modal-description">
                    <h4>Description</h4>
                    <p>{selectedLocal.description}</p>
                  </div>
                  
                  <div className="modal-equipements">
                    <h4>Équipements inclus</h4>
                    <div className="equipements-grid">
                      {selectedLocal.equipements.map((equip, index) => (
                        <div key={index} className="equipement-item">
                          <span className="equipement-icon">✓</span>
                          <span>{equip}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="modal-actions">
                    <button className="modal-btn demande" onClick={() => {
                      closeModal();
                      document.querySelector('.demande-section').scrollIntoView({ behavior: 'smooth' });
                    }}>
                      Demander ce local
                    </button>
                    <button className="modal-btn contact" onClick={() => {
                      closeModal();
                      window.location.href = `tel:025345678`;
                    }}>
                      Appeler pour info
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
      
      <Footer />
    </>
  );
}