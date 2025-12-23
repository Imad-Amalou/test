import React, { useState } from "react";
import Header from "../../components/Header/Header";
import SubHeader from "../../components/SubHeader/SubHeader";
import Footer from "../../components/Footer/Footer";
import "./AgenceSogral.css";
import { FaPhone, FaEnvelope,FaPhoneAlt, FaMapMarkerAlt, FaCommentDots, FaExclamationTriangle ,FaSearch,FaMapMarkedAlt,FaClipboardList,FaTicketAlt,FaMobileAlt,FaSuitcase,FaCouch,FaUtensils,FaParking } from "react-icons/fa";
import local from "../../Assets/localspecifique.jpg";

export default function AgenceSogral() {
  const [activeView, setActiveView] = useState("carte");
  const [selectedRegion, setSelectedRegion] = useState("toutes");
  const [selectedAgency, setSelectedAgency] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  // Données des régions et agences
  const regions = [
    { id: "toutes", name: "Toutes les régions", count: 45 },
    { id: "alger", name: "Alger", count: 12 },
    { id: "oran", name: "Oran", count: 8 },
    { id: "constantine", name: "Constantine", count: 6 },
    { id: "annaba", name: "Annaba", count: 5 },
    { id: "bejaia", name: "Béjaïa", count: 4 },
    { id: "setif", name: "Sétif", count: 4 },
    { id: "blida", name: "Blida", count: 3 },
    { id: "tizi", name: "Tizi Ouzou", count: 3 }
  ];

  const agences = [
    {
      id: 1,
      nom: "Agence Alger Centre",
      ville: "Alger",
      region: "alger",
      adresse: "123 Rue des Transports, Alger Centre",
      telephone: "023 45 67 89",
      fax: "023 45 67 90",
      email: "algercentre@sogral.dz",
      horaires: "Lun-Ven: 7h-19h, Sam: 8h-17h, Dim: 9h-13h",
      services: ["Réservation", "Vente billets", "Informations", "Bagages"],
      photos: [local, local],
      description: "Notre agence principale au cœur d'Alger, offrant tous nos services.",
      longitude: 3.0586,
      latitude: 36.7538,
      statut: "ouverte"
    },
    {
      id: 2,
      nom: "Agence Oran Centre",
      ville: "Oran",
      region: "oran",
      adresse: "45 Avenue de l'Indépendance",
      telephone: "041 23 45 67",
      fax: "041 23 45 68",
      email: "orancentre@sogral.dz",
      horaires: "Lun-Ven: 7h-20h, Sam: 8h-18h, Dim: 9h-14h",
      services: ["Réservation", "Vente billets", "Bagages", "WiFi"],
      photos: [local],
      description: "Agence moderne au centre-ville d'Oran avec espace d'attente climatisé.",
      longitude: -0.6417,
      latitude: 35.6971,
      statut: "ouverte"
    },
    {
      id: 3,
      nom: "Gare Routière de Constantine",
      ville: "Constantine",
      region: "constantine",
      adresse: "78 Boulevard de la République",
      telephone: "031 67 89 01",
      fax: "031 67 89 02",
      email: "constantine@sogral.dz",
      horaires: "Lun-Dim: 6h-22h",
      services: ["Réservation", "Vente billets", "Bagages", "Restaurant", "Parking"],
      photos: [local],
      description: "Gare routière principale de Constantine avec tous les services.",
      longitude: 6.6149,
      latitude: 36.3650,
      statut: "ouverte"
    },
    {
      id: 4,
      nom: "Agence Annaba Port",
      ville: "Annaba",
      region: "annaba",
      adresse: "12 Rue du Port",
      telephone: "038 90 12 34",
      fax: "038 90 12 35",
      email: "annaba@sogral.dz",
      horaires: "Lun-Ven: 7h-19h, Sam: 8h-17h",
      services: ["Réservation", "Vente billets", "Informations"],
      photos: [local],
      description: "Agence située près du port d'Annaba, idéale pour les voyageurs.",
      longitude: 7.7667,
      latitude: 36.9000,
      statut: "ouverte"
    },
    {
      id: 5,
      nom: "Agence Béjaïa Centre",
      ville: "Béjaïa",
      region: "bejaia",
      adresse: "34 Avenue du 1er Novembre",
      telephone: "034 56 78 90",
      fax: "034 56 78 91",
      email: "bejaia@sogral.dz",
      horaires: "Lun-Ven: 7h-18h, Sam: 8h-16h",
      services: ["Réservation", "Vente billets", "Bagages"],
      photos: [local],
      description: "Agence au centre-ville de Béjaïa, service personnalisé.",
      longitude: 5.0689,
      latitude: 36.7509,
      statut: "ouverte"
    },
    {
      id: 6,
      nom: "Agence Sétif Gare",
      ville: "Sétif",
      region: "setif",
      adresse: "56 Boulevard de l'ALN",
      telephone: "036 12 34 56",
      fax: "036 12 34 57",
      email: "setif@sogral.dz",
      horaires: "Lun-Ven: 7h-19h, Sam: 8h-17h, Dim: 9h-13h",
      services: ["Réservation", "Vente billets", "Informations", "WiFi"],
      photos: [local],
      description: "À proximité de la gare de Sétif, accès facile aux transports.",
      longitude: 5.4136,
      latitude: 36.1911,
      statut: "ouverte"
    },
    {
      id: 7,
      nom: "Agence Blida Centre",
      ville: "Blida",
      region: "blida",
      adresse: "23 Rue de la République",
      telephone: "025 78 90 12",
      fax: "025 78 90 13",
      email: "blida@sogral.dz",
      horaires: "Lun-Ven: 7h-18h, Sam: 8h-16h",
      services: ["Réservation", "Vente billets", "Bagages"],
      photos: [local],
      description: "Agence au cœur de Blida, service rapide et efficace.",
      longitude: 2.8333,
      latitude: 36.4667,
      statut: "ouverte"
    },
    {
      id: 8,
      nom: "Agence Tizi Ouzou",
      ville: "Tizi Ouzou",
      region: "tizi",
      adresse: "89 Rue Abane Ramdane",
      telephone: "026 34 56 78",
      fax: "026 34 56 79",
      email: "tiziouzou@sogral.dz",
      horaires: "Lun-Ven: 7h-18h, Sam: 8h-16h",
      services: ["Réservation", "Vente billets", "Informations"],
      photos: [local],
      description: "Agence principale de Tizi Ouzou, accueil chaleureux.",
      longitude: 4.0500,
      latitude: 36.7167,
      statut: "ouverte"
    }
  ];

  // Filtrer les agences
  const filteredAgencies = agences.filter(agence => {
    if (selectedRegion !== "toutes" && agence.region !== selectedRegion) return false;
    if (searchQuery && !agence.nom.toLowerCase().includes(searchQuery.toLowerCase()) && 
        !agence.ville.toLowerCase().includes(searchQuery.toLowerCase())) return false;
    return true;
  });

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleRegionSelect = (regionId) => {
    setSelectedRegion(regionId);
  };

  const openAgencyModal = (agency) => {
    setSelectedAgency(agency);
  };

  const closeModal = () => {
    setSelectedAgency(null);
  };

  const AgenceCard = ({ agence }) => (
    <div className="agence-card">
      <div className="agence-image">
        <img src={agence.photos[0] || {local}} alt={agence.nom} />
        <div className={`agence-status ${agence.statut}`}>
          {agence.statut === "ouverte" ? "🟢 Ouverte" : "🔴 Fermée"}
        </div>
      </div>
      
      <div className="agence-content">
        <h3>{agence.nom}</h3>
        <p className="agence-ville">{agence.ville}</p>
        <p className="agence-address">{agence.adresse}</p>
        
        <div className="agence-contacts">
          <div className="contact-item">
            <span className="contact-icon"><FaPhone /></span>
            <span className="contact-info">{agence.telephone}</span>
          </div>
          <div className="contact-item">
            <span className="contact-icon"><FaEnvelope /></span>
            <span className="contact-info">{agence.email}</span>
          </div>
        </div>
        
        <div className="agence-services">
          <span className="services-label">Services :</span>
          <div className="services-tags">
            {agence.services.slice(0, 3).map((service, index) => (
              <span key={index} className="service-tag">{service}</span>
            ))}
            {agence.services.length > 3 && (
              <span className="service-tag">+{agence.services.length - 3}</span>
            )}
          </div>
        </div>
        
        <div className="agence-actions">
          <button 
            className="details-btn"
            onClick={() => openAgencyModal(agence)}
          >
            Voir détails
          </button>
          <button className="itineraire-btn">
            Itinéraire
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <Header />
      <SubHeader />
      
      <main className="agences-page">
        {/* Hero Section */}
        <section className="agences-hero">
          <div className="hero-content">
            <h1>Nos Agences SOGRAL</h1>
            <p>Retrouvez toutes nos agences à travers l'Algérie</p>
            <div className="hero-stats">
              <div className="stat">
                <span className="stat-number">{agences.length}</span>
                <span className="stat-label">Agences</span>
              </div>
              <div className="stat">
                <span className="stat-number">{regions.length - 1}</span>
                <span className="stat-label">Wilayas</span>
              </div>
              <div className="stat">
                <span className="stat-number">24/7</span>
                <span className="stat-label">Support</span>
              </div>
            </div>
          </div>
        </section>

        {/* Section Contrôles */}
        <section className="controls-section">
          <div className="container">
            <div className="search-container">
              <div className="search-input">
                <span className="search-icon"><FaSearch /></span>
                <input
                  type="text"
                  placeholder="Rechercher une agence par nom ou ville..."
                  value={searchQuery}
                  onChange={handleSearch}
                />
              </div>
              
              <div className="view-toggle">
                <button 
                  className={`toggle-btn ${activeView === "carte" ? "active" : ""}`}
                  onClick={() => setActiveView("carte")}
                >
                  <span className="toggle-icon"style={{color : "#95C11F"}}><FaMapMarkedAlt /></span> Vue carte
                </button>
                <button 
                  className={`toggle-btn ${activeView === "liste" ? "active" : ""}`}
                  onClick={() => setActiveView("liste")}
                >
                  <span className="toggle-icon"style={{color : "#95C11F"}}><FaClipboardList /></span> Vue liste
                </button>
              </div>
            </div>
            
            <div className="regions-filter">
              <h3>Filtrer par région :</h3>
              <div className="regions-grid">
                {regions.map(region => (
                  <button
                    key={region.id}
                    className={`region-btn ${selectedRegion === region.id ? "active" : ""}`}
                    onClick={() => handleRegionSelect(region.id)}
                  >
                    <span className="region-name">{region.name}</span>
                    <span className="region-count">{region.count}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section Contenu */}
        <section className="content-section">
          <div className="container">
            {activeView === "carte" ? (
              <div className="carte-view">
                <div className="carte-header">
                  <h2>Carte interactive des agences</h2>
                  <p>Cliquez sur les marqueurs pour voir les détails des agences</p>
                </div>
                
                <div className="carte-container">
                  <div className="carte-placeholder">
                    <div className="carte-overlay">
                      <h3>Carte SOGRAL Algérie</h3>
                      <p>Visualisez l'emplacement de toutes nos agences</p>
                      <button className="carte-action-btn">
                        Ouvrir Google Maps
                      </button>
                    </div>
                    
                    <div className="carte-legende">
                      <div className="legende-item">
                        <span className="legende-marker ouvert"></span>
                        <span>Agence ouverte</span>
                      </div>
                      <div className="legende-item">
                        <span className="legende-marker ferme"></span>
                        <span>Agence fermée</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="carte-sidebar">
                    <h3>Agences à proximité</h3>
                    <div className="agences-list-mini">
                      {filteredAgencies.slice(0, 3).map(agence => (
                        <div key={agence.id} className="mini-agence-card">
                          <h4>{agence.nom}</h4>
                          <p>{agence.adresse}</p>
                          <button 
                            className="voir-btn"
                            onClick={() => openAgencyModal(agence)}
                          >
                            Voir
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="liste-view">
                <div className="liste-header">
                  <h2>
                    {filteredAgencies.length} agence{filteredAgencies.length > 1 ? "s" : ""} 
                    {selectedRegion !== "toutes" && ` en ${regions.find(r => r.id === selectedRegion)?.name}`}
                  </h2>
                  <div className="tri-options">
                    <span>Trier par :</span>
                    <select>
                      <option>Ville (A-Z)</option>
                      <option>Ville (Z-A)</option>
                      <option>Services disponibles</option>
                    </select>
                  </div>
                </div>
                
                <div className="agences-grid">
                  {filteredAgencies.map(agence => (
                    <AgenceCard key={agence.id} agence={agence} />
                  ))}
                </div>
                
                {filteredAgencies.length === 0 && (
                  <div className="no-results">
                    <h3>Aucune agence trouvée</h3>
                    <p>Essayez de modifier vos critères de recherche</p>
                  </div>
                )}
              </div>
            )}
          </div>
        </section>

        {/* Section Services */}
        <section className="services-section">
          <div className="container">
            <h2 className="section-title4">Services disponibles dans nos agences</h2>
            <p className="section-subtitle">Profitez de tous nos services pour faciliter vos voyages</p>
            
           <div className="services-grid">
              <div className="service-card">
                <div className="service-icon"><FaTicketAlt /></div>
                <h3>Vente de billets</h3>
                <p>Achetez vos billets en agence avec nos conseillers</p>
              </div>

              <div className="service-card">
                <div className="service-icon"><FaMobileAlt /></div>
                <h3>Réservation en ligne</h3>
                <p>Accès internet gratuit pour vos réservations</p>
              </div>

              <div className="service-card">
                <div className="service-icon"><FaSuitcase /></div>
                <h3>Service bagages</h3>
                <p>Consigne et enregistrement des bagages</p>
              </div>

              <div className="service-card">
                <div className="service-icon"><FaCouch /></div>
                <h3>Salle d'attente</h3>
                <p>Espaces climatisés avec sièges confortables</p>
              </div>

              <div className="service-card">
                <div className="service-icon"><FaUtensils /></div>
                <h3>Restauration</h3>
                <p>Cafétéria et distributeurs automatiques</p>
              </div>

              <div className="service-card">
                <div className="service-icon"><FaParking /></div>
                <h3>Parking sécurisé</h3>
                <p>Stationnement surveillé pour vos véhicules</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section Horaires */}
        <section className="horaires-section">
          <div className="container">
            <div className="horaires-content">
              <div className="horaires-text">
                <h2>Horaires d'ouverture</h2>
                <p>La majorité de nos agences sont ouvertes 7j/7 pour vous servir</p>
                
                <div className="horaires-table">
                  <div className="horaire-row">
                    <span className="jour">Lundi - Vendredi</span>
                    <span className="heures">7h00 - 19h00</span>
                  </div>
                  <div className="horaire-row">
                    <span className="jour">Samedi</span>
                    <span className="heures">8h00 - 17h00</span>
                  </div>
                  <div className="horaire-row">
                    <span className="jour">Dimanche</span>
                    <span className="heures">9h00 - 13h00</span>
                  </div>
                  <div className="horaire-row highlight">
                    <span className="jour">Agences principales</span>
                    <span className="heures">24h/24</span>
                  </div>
                </div>
                
                <div className="urgence-info">
                  <div className="urgence-icon"><FaExclamationTriangle  /></div>
                  <div>
                    <h4>Service d'urgence</h4>
                    <p className="urgence-phone">0770 12 34 56 - 24h/24</p>
                  </div>
                </div>
              </div>
              
              <div className="horaires-image">
                <div className="image-placeholder">
                  <div className="image-overlay">
                    <h3>Visioconférence</h3>
                    <p>Contactez-nous en visio depuis chez vous</p>
                    <button className="visio-btn">
                      Prendre rendez-vous
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section Contact */}
        <section className="contact-section">
          <div className="container">
            <h2 className="section-title5">Contactez nos agences</h2>
            
            <div className="contact-grid">
              <div className="contact-card">
                <div className="contact-icon"><FaPhoneAlt /></div>
                <h3>Par téléphone</h3>
                <p className="contact-detail">025 34 56 78</p>
                <p className="contact-sub">Lun-Ven: 8h-17h</p>
              </div>
              
              <div className="contact-card">
                <div className="contact-icon"><FaEnvelope /></div>
                <h3>Par email</h3>
                <p className="contact-detail">agences@sogral.dz</p>
                <p className="contact-sub">Réponse sous 24h</p>
              </div>
              
              <div className="contact-card">
                <div className="contact-icon"><FaMapMarkerAlt /></div>
                <h3>Visitez-nous</h3>
                <p className="contact-detail">123 Rue des Transports</p>
                <p className="contact-sub">Alger Centre</p>
              </div>
              
              <div className="contact-card">
                <div className="contact-icon"><FaCommentDots /></div>
                <h3>Chat en direct</h3>
                <p className="contact-detail">Disponible sur le site</p>
                <p className="contact-sub">9h-18h</p>
              </div>
            </div>
          </div>
        </section>

        {/* Modal Détails Agence */}
        {selectedAgency && (
          <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="modal-close" onClick={closeModal}>×</button>
              
              <div className="modal-header">
                <h3>{selectedAgency.nom}</h3>
                <div className={`modal-status ${selectedAgency.statut}`}>
                  {selectedAgency.statut === "ouverte" ? "🟢 Ouverte" : "🔴 Fermée"}
                </div>
              </div>
              
              <div className="modal-body">
                <div className="modal-gallery">
                  <img src={selectedAgency.photos[0] || "/images/default-agence.jpg"} alt={selectedAgency.nom} />
                </div>
                
                <div className="modal-details">
                  <div className="detail-section">
                    <h4>📍 Adresse</h4>
                    <p>{selectedAgency.adresse}</p>
                    <p className="ville">{selectedAgency.ville}</p>
                  </div>
                  
                  <div className="detail-section">
                    <h4>📞 Contact</h4>
                    <div className="contact-details">
                      <div className="contact-line">
                        <span className="label">Téléphone :</span>
                        <span className="value">{selectedAgency.telephone}</span>
                      </div>
                      <div className="contact-line">
                        <span className="label">Fax :</span>
                        <span className="value">{selectedAgency.fax}</span>
                      </div>
                      <div className="contact-line">
                        <span className="label">Email :</span>
                        <span className="value">{selectedAgency.email}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="detail-section">
                    <h4>🕒 Horaires</h4>
                    <div className="horaires-details">
                      {selectedAgency.horaires.split(', ').map((horaire, index) => (
                        <div key={index} className="horaire-line">{horaire}</div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="detail-section">
                    <h4>✅ Services disponibles</h4>
                    <div className="services-grid-modal">
                      {selectedAgency.services.map((service, index) => (
                        <div key={index} className="service-item-modal">
                          <span className="service-icon">✓</span>
                          <span>{service}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="detail-section">
                    <h4>📝 Description</h4>
                    <p className="description">{selectedAgency.description}</p>
                  </div>
                  
                  <div className="modal-actions">
                    <button className="modal-btn itineraire">
                      Voir l'itinéraire
                    </button>
                    <button className="modal-btn appeler">
                      Appeler maintenant
                    </button>
                    <button className="modal-btn email">
                      Envoyer un email
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