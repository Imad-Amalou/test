import React, { useState } from "react";
import Header from "../../components/Header/Header";
import SubHeader from "../../components/SubHeader/SubHeader";
import Footer from "../../components/Footer/Footer";
import "./Feedback.css";
import { FaStar, FaPen, FaChartBar } from "react-icons/fa";
export default function Feedback() {
  const [activeTab, setActiveTab] = useState("avis");
  const [avisSubmitted, setAvisSubmitted] = useState(false);
  const [doleanceSubmitted, setDoleanceSubmitted] = useState(false);
  const [sondageSubmitted, setSondageSubmitted] = useState(false);

  // État pour le formulaire d'avis
  const [avisData, setAvisData] = useState({
    nom: "",
    email: "",
    typeVoyage: "",
    note: 0,
    commentaire: "",
    recommander: null
  });

  // État pour le formulaire de doléance
  const [doleanceData, setDoleanceData] = useState({
    nom: "",
    prenom: "",
    telephone: "",
    email: "",
    reference: "",
    typeProbleme: "",
    dateIncident: "",
    description: "",
    solutionSouhaitee: "",
    pieceJointe: null
  });

  // État pour le formulaire de sondage
  const [sondageData, setSondageData] = useState({
    age: "",
    frequence: "",
    prefereReservation: "",
    satisfactionGenerale: "",
    ameliorements: [],
    suggestions: ""
  });

  // Données pour les sondages actifs
  const sondagesActifs = [
    {
      id: 1,
      titre: "Amélioration du service client",
      description: "Aidez-nous à améliorer notre service client pour mieux vous servir",
      dateFin: "30/04/2024",
      participants: 1247,
      questions: 5,
      tempsEstime: "3 minutes"
    },
    {
      id: 2,
      titre: "Nouveaux trajets demandés",
      description: "Quels nouveaux trajets souhaiteriez-vous voir proposés ?",
      dateFin: "15/05/2024",
      participants: 892,
      questions: 4,
      tempsEstime: "2 minutes"
    },
    {
      id: 3,
      titre: "Expérience application mobile",
      description: "Partagez votre expérience avec notre application",
      dateFin: "10/05/2024",
      participants: 563,
      questions: 6,
      tempsEstime: "4 minutes"
    }
  ];

  // Données pour les avis récents
  const avisRecents = [
    {
      id: 1,
      nom: "Karim B.",
      note: 5,
      commentaire: "Service excellent, bus très confortable et à l'heure. Je recommande !",
      date: "15/04/2024",
      voyage: "Alger → Oran"
    },
    {
      id: 2,
      nom: "Samira M.",
      note: 4,
      commentaire: "Bon service mais wifi souvent coupé pendant le trajet.",
      date: "14/04/2024",
      voyage: "Constantine → Annaba"
    },
    {
      id: 3,
      nom: "Mohamed T.",
      note: 5,
      commentaire: "Conducteur très professionnel, voyage très agréable.",
      date: "13/04/2024",
      voyage: "Oran → Alger"
    }
  ];

  const typesVoyage = ["Urbain", "Interurbain", "Longue distance", "International"];
  const typesProbleme = ["Retard", "Annulation", "Problème bagages", "Service client", "Propreté", "Confort", "Autre"];
  const frequences = ["Quotidien", "Hebdomadaire", "Mensuel", "Occasionnel"];
  const methodesReservation = ["Application mobile", "Site web", "Agence", "Téléphone"];

  // Gestion des changements de formulaire
  const handleAvisChange = (e) => {
    const { name, value, type } = e.target;
    if (type === "radio") {
      setAvisData(prev => ({ ...prev, [name]: parseInt(value) }));
    } else {
      setAvisData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleDoleanceChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "pieceJointe") {
      setDoleanceData(prev => ({ ...prev, [name]: files[0] }));
    } else {
      setDoleanceData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSondageChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      const currentValues = [...sondageData.ameliorements];
      if (checked) {
        setSondageData(prev => ({ 
          ...prev, 
          ameliorements: [...currentValues, value] 
        }));
      } else {
        setSondageData(prev => ({ 
          ...prev, 
          ameliorements: currentValues.filter(item => item !== value) 
        }));
      }
    } else {
      setSondageData(prev => ({ ...prev, [name]: value }));
    }
  };

  // Soumission des formulaires
  const handleAvisSubmit = (e) => {
    e.preventDefault();
    console.log("Avis soumis:", avisData);
    setAvisSubmitted(true);
    setTimeout(() => setAvisSubmitted(false), 5000);
    setAvisData({
      nom: "",
      email: "",
      typeVoyage: "",
      note: 0,
      commentaire: "",
      recommander: null
    });
  };

  const handleDoleanceSubmit = (e) => {
    e.preventDefault();
    console.log("Doléance soumise:", doleanceData);
    setDoleanceSubmitted(true);
    setTimeout(() => setDoleanceSubmitted(false), 5000);
    setDoleanceData({
      nom: "",
      prenom: "",
      telephone: "",
      email: "",
      reference: "",
      typeProbleme: "",
      dateIncident: "",
      description: "",
      solutionSouhaitee: "",
      pieceJointe: null
    });
  };

  const handleSondageSubmit = (e) => {
    e.preventDefault();
    console.log("Sondage soumis:", sondageData);
    setSondageSubmitted(true);
    setTimeout(() => setSondageSubmitted(false), 5000);
    setSondageData({
      age: "",
      frequence: "",
      prefereReservation: "",
      satisfactionGenerale: "",
      ameliorements: [],
      suggestions: ""
    });
  };

  const NoteEtoiles = ({ note, onNoteChange, editable = false }) => {
    return (
      <div className="note-etoiles">
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            className={`etoile ${star <= note ? "active" : ""} ${editable ? "editable" : ""}`}
            onClick={() => editable && onNoteChange(star)}
          >
            {star <= note ? "★" : "☆"}
          </span>
        ))}
        <span className="note-text">{note}/5</span>
      </div>
    );
  };

  return (
    <>
      <Header />
      <SubHeader />
      
      <main className="feedback-page">
        {/* Hero Section */}
        <section className="feedback-hero">
          <div className="hero-content">
            <h1>Votre Avis Nous Importe</h1>
            <p>Partagez votre expérience, signalez un problème ou participez à nos sondages pour améliorer nos services</p>
            <div className="hero-stats">
              <div className="stat">
                <span className="stat-number">15,247</span>
                <span className="stat-label">Avis reçus</span>
              </div>
              <div className="stat">
                <span className="stat-number">98%</span>
                <span className="stat-label">Problèmes résolus</span>
              </div>
              <div className="stat">
                <span className="stat-number">4.2</span>
                <span className="stat-label">Note moyenne</span>
              </div>
            </div>
          </div>
        </section>

        {/* Navigation Tabs */}
       <section className="tabs-section">
        <div className="container">
          <div className="feedback-tabs">

            <button
              className={`feedback-tab ${activeTab === "avis" ? "active" : ""}`}
              onClick={() => setActiveTab("avis")}
            >
              <span className="tab-icon icon-avis"><FaStar /></span>
              <span className="tab-text">Donner un avis</span>
            </button>

            <button
              className={`feedback-tab ${activeTab === "doleance" ? "active" : ""}`}
              onClick={() => setActiveTab("doleance")}
            >
              <span className="tab-icon icon-doleance"><FaPen /></span>
              <span className="tab-text">Soumettre une doléance</span>
            </button>

            <button
              className={`feedback-tab ${activeTab === "sondage" ? "active" : ""}`}
              onClick={() => setActiveTab("sondage")}
            >
              <span className="tab-icon icon-sondage"><FaChartBar /></span>
              <span className="tab-text">Participer à un sondage</span>
            </button>

          </div>
        </div>
      </section>


        {/* Section Contenu */}
        <section className="content-section">
          <div className="container">
            {/* Section Avis */}
            {activeTab === "avis" && (
              <div className="tab-content">
                <div className="content-grid">
                  {/* Formulaire Avis */}
                  <div className="form-container">
                    <div className="form-header">
                      <h2>Partagez votre expérience</h2>
                      <p>Votre avis nous aide à améliorer nos services</p>
                    </div>

                    {avisSubmitted ? (
                      <div className="success-message">
                        <div className="success-icon">✓</div>
                        <h3>Merci pour votre avis !</h3>
                        <p>Votre contribution est précieuse pour améliorer nos services.</p>
                      </div>
                    ) : (
                      <form onSubmit={handleAvisSubmit} className="feedback-form">
                        <div className="form-row">
                          <div className="form-group">
                            <label htmlFor="avis-nom">Nom (optionnel)</label>
                            <input
                              type="text"
                              id="avis-nom"
                              name="nom"
                              value={avisData.nom}
                              onChange={handleAvisChange}
                              placeholder="Votre nom"
                            />
                          </div>
                          <div className="form-group">
                            <label htmlFor="avis-email">Email (optionnel)</label>
                            <input
                              type="email"
                              id="avis-email"
                              name="email"
                              value={avisData.email}
                              onChange={handleAvisChange}
                              placeholder="email@exemple.com"
                            />
                          </div>
                        </div>

                        <div className="form-group">
                          <label>Type de voyage</label>
                          <select
                            name="typeVoyage"
                            value={avisData.typeVoyage}
                            onChange={handleAvisChange}
                          >
                            <option value="">Sélectionnez un type de voyage</option>
                            {typesVoyage.map((type, index) => (
                              <option key={index} value={type.toLowerCase()}>{type}</option>
                            ))}
                          </select>
                        </div>

                        <div className="form-group">
                          <label>Note globale</label>
                          <NoteEtoiles 
                            note={avisData.note}
                            onNoteChange={(note) => setAvisData(prev => ({ ...prev, note }))}
                            editable
                          />
                        </div>

                        <div className="form-group">
                          <label>Recommanderiez-vous SOGRAL ?</label>
                          <div className="radio-group">
                            <label className="radio-label">
                              <input
                                type="radio"
                                name="recommander"
                                value="1"
                                checked={avisData.recommander === 1}
                                onChange={handleAvisChange}
                              />
                              <span className="radio-custom"></span>
                              Oui, certainement
                            </label>
                            <label className="radio-label">
                              <input
                                type="radio"
                                name="recommander"
                                value="0"
                                checked={avisData.recommander === 0}
                                onChange={handleAvisChange}
                              />
                              <span className="radio-custom"></span>
                              Peut-être
                            </label>
                            <label className="radio-label">
                              <input
                                type="radio"
                                name="recommander"
                                value="-1"
                                checked={avisData.recommander === -1}
                                onChange={handleAvisChange}
                              />
                              <span className="radio-custom"></span>
                              Probablement pas
                            </label>
                          </div>
                        </div>

                        <div className="form-group">
                          <label htmlFor="avis-commentaire">Commentaire</label>
                          <textarea
                            id="avis-commentaire"
                            name="commentaire"
                            value={avisData.commentaire}
                            onChange={handleAvisChange}
                            placeholder="Décrivez votre expérience en détail..."
                            rows="4"
                            required
                          />
                        </div>

                        <button type="submit" className="submit-btn">
                          Envoyer mon avis
                        </button>
                      </form>
                    )}
                  </div>

                  {/* Avis Récents */}
                  <div className="sidebar">
                    <div className="sidebar-card">
                      <h3>Avis récents</h3>
                      <div className="avis-list">
                        {avisRecents.map(avis => (
                          <div key={avis.id} className="avis-item">
                            <div className="avis-header">
                              <span className="avis-nom">{avis.nom}</span>
                              <NoteEtoiles note={avis.note} />
                            </div>
                            <p className="avis-commentaire">{avis.commentaire}</p>
                            <div className="avis-footer">
                              <span className="avis-voyage">{avis.voyage}</span>
                              <span className="avis-date">{avis.date}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="sidebar-card">
                      <h3>Pourquoi donner votre avis ?</h3>
                      <ul className="benefits-list">
                        <li>✓ Aidez-nous à améliorer nos services</li>
                        <li>✓ Partagez votre expérience avec d'autres voyageurs</li>
                        <li>✓ Vos suggestions sont prises en compte</li>
                        <li>✓ Contribuez à rendre les voyages meilleurs</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Section Doléance */}
            {activeTab === "doleance" && (
              <div className="tab-content">
                <div className="content-grid">
                  {/* Formulaire Doléance */}
                  <div className="form-container wide">
                    <div className="form-header">
                      <h2>Signalez un problème</h2>
                      <p>Nous traitons chaque doléance avec la plus grande attention</p>
                    </div>

                    {doleanceSubmitted ? (
                      <div className="success-message">
                        <div className="success-icon">✓</div>
                        <h3>Doléance enregistrée</h3>
                        <p>Nous traiterons votre demande dans les plus brefs délais.</p>
                        <p className="reference">Référence: DOLE-{Date.now().toString().slice(-6)}</p>
                      </div>
                    ) : (
                      <form onSubmit={handleDoleanceSubmit} className="feedback-form">
                        <div className="form-section">
                          <h3>Informations personnelles</h3>
                          <div className="form-row">
                            <div className="form-group">
                              <label htmlFor="doleance-nom">Nom *</label>
                              <input
                                type="text"
                                id="doleance-nom"
                                name="nom"
                                value={doleanceData.nom}
                                onChange={handleDoleanceChange}
                                placeholder="Votre nom"
                                required
                              />
                            </div>
                            <div className="form-group">
                              <label htmlFor="doleance-prenom">Prénom *</label>
                              <input
                                type="text"
                                id="doleance-prenom"
                                name="prenom"
                                value={doleanceData.prenom}
                                onChange={handleDoleanceChange}
                                placeholder="Votre prénom"
                                required
                              />
                            </div>
                          </div>

                          <div className="form-row">
                            <div className="form-group">
                              <label htmlFor="doleance-telephone">Téléphone *</label>
                              <input
                                type="tel"
                                id="doleance-telephone"
                                name="telephone"
                                value={doleanceData.telephone}
                                onChange={handleDoleanceChange}
                                placeholder="05 XX XX XX XX"
                                required
                              />
                            </div>
                            <div className="form-group">
                              <label htmlFor="doleance-email">Email *</label>
                              <input
                                type="email"
                                id="doleance-email"
                                name="email"
                                value={doleanceData.email}
                                onChange={handleDoleanceChange}
                                placeholder="email@exemple.com"
                                required
                              />
                            </div>
                          </div>
                        </div>

                        <div className="form-section">
                          <h3>Détails du problème</h3>
                          <div className="form-row">
                            <div className="form-group">
                              <label htmlFor="doleance-reference">Référence voyage (optionnel)</label>
                              <input
                                type="text"
                                id="doleance-reference"
                                name="reference"
                                value={doleanceData.reference}
                                onChange={handleDoleanceChange}
                                placeholder="Ex: SOG-2024-XXXX"
                              />
                            </div>
                            <div className="form-group">
                              <label htmlFor="doleance-type">Type de problème *</label>
                              <select
                                id="doleance-type"
                                name="typeProbleme"
                                value={doleanceData.typeProbleme}
                                onChange={handleDoleanceChange}
                                required
                              >
                                <option value="">Sélectionnez</option>
                                {typesProbleme.map((type, index) => (
                                  <option key={index} value={type.toLowerCase()}>{type}</option>
                                ))}
                              </select>
                            </div>
                          </div>

                          <div className="form-group">
                            <label htmlFor="doleance-date">Date de l'incident *</label>
                            <input
                              type="date"
                              id="doleance-date"
                              name="dateIncident"
                              value={doleanceData.dateIncident}
                              onChange={handleDoleanceChange}
                              required
                            />
                          </div>

                          <div className="form-group">
                            <label htmlFor="doleance-description">Description détaillée *</label>
                            <textarea
                              id="doleance-description"
                              name="description"
                              value={doleanceData.description}
                              onChange={handleDoleanceChange}
                              placeholder="Décrivez le problème en détail..."
                              rows="4"
                              required
                            />
                          </div>

                          <div className="form-group">
                            <label htmlFor="doleance-solution">Solution souhaitée</label>
                            <textarea
                              id="doleance-solution"
                              name="solutionSouhaitee"
                              value={doleanceData.solutionSouhaitee}
                              onChange={handleDoleanceChange}
                              placeholder="Que souhaiteriez-vous que nous fassions ?"
                              rows="3"
                            />
                          </div>

                          <div className="form-group">
                            <label htmlFor="doleance-fichier">Pièce jointe (optionnel)</label>
                            <input
                              type="file"
                              id="doleance-fichier"
                              name="pieceJointe"
                              onChange={handleDoleanceChange}
                              accept=".jpg,.jpeg,.png,.pdf,.doc,.docx"
                            />
                            <p className="file-info">Formats acceptés: JPG, PNG, PDF, DOC (max 5MB)</p>
                          </div>
                        </div>

                        <div className="form-consent">
                          <label className="checkbox-label">
                            <input type="checkbox" required />
                            <span className="checkmark"></span>
                            J'autorise SOGRAL à utiliser mes informations pour traiter ma demande *
                          </label>
                        </div>

                        <button type="submit" className="submit-btn">
                          Soumettre ma doléance
                        </button>
                      </form>
                    )}
                  </div>

                  {/* Infos Doléance */}
                  <div className="sidebar">
                    <div className="sidebar-card">
                      <h3>Engagements SOGRAL</h3>
                      <div className="commitments-list">
                        <div className="commitment-item">
                          <div className="commitment-icon">⏱️</div>
                          <div className="commitment-content">
                            <h4>Réponse rapide</h4>
                            <p>Nous vous répondons dans un délai maximum de 48h</p>
                          </div>
                        </div>
                        <div className="commitment-item">
                          <div className="commitment-icon">🔒</div>
                          <div className="commitment-content">
                            <h4>Confidentialité</h4>
                            <p>Vos informations personnelles sont protégées</p>
                          </div>
                        </div>
                        <div className="commitment-item">
                          <div className="commitment-icon">✅</div>
                          <div className="commitment-content">
                            <h4>Suivi personnalisé</h4>
                            <p>Chaque doléance fait l'objet d'un suivi individuel</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="sidebar-card emergency">
                      <h3>🚨 Urgence immédiate</h3>
                      <p>Pour les problèmes urgents nécessitant une intervention immédiate :</p>
                      <div className="emergency-contact">
                        <p className="emergency-phone">0770 12 34 56</p>
                        <p className="emergency-hours">24h/24 - 7j/7</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Section Sondage */}
            {activeTab === "sondage" && (
              <div className="tab-content">
                <div className="content-grid">
                  {/* Sondages Actifs */}
                  <div className="sondages-container">
                    <div className="form-header">
                      <h2>Sondages actifs</h2>
                      <p>Participez à l'amélioration de nos services</p>
                    </div>

                    <div className="sondages-grid">
                      {sondagesActifs.map(sondage => (
                        <div key={sondage.id} className="sondage-card">
                          <div className="sondage-header">
                            <h3>{sondage.titre}</h3>
                            <div className="sondage-badge">
                              {sondage.participants} participants
                            </div>
                          </div>
                          <p className="sondage-description">{sondage.description}</p>
                          <div className="sondage-details">
                            <div className="detail-item">
                              <span className="detail-label">Date limite</span>
                              <span className="detail-value">{sondage.dateFin}</span>
                            </div>
                            <div className="detail-item">
                              <span className="detail-label">Temps estimé</span>
                              <span className="detail-value">{sondage.tempsEstime}</span>
                            </div>
                            <div className="detail-item">
                              <span className="detail-label">Questions</span>
                              <span className="detail-value">{sondage.questions}</span>
                            </div>
                          </div>
                          <button 
                            className="participer-btn"
                            onClick={() => {
                              setSondageData(prev => ({ ...prev, sondageId: sondage.id }));
                              document.getElementById("sondage-form").scrollIntoView({ behavior: "smooth" });
                            }}
                          >
                            Participer maintenant
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Formulaire Sondage */}
                  <div className="form-container" id="sondage-form">
                    <div className="form-header">
                      <h2>Questionnaire</h2>
                      <p>Vos réponses resteront anonymes</p>
                    </div>

                    {sondageSubmitted ? (
                      <div className="success-message">
                        <div className="success-icon">📊</div>
                        <h3>Merci pour votre participation !</h3>
                        <p>Vos réponses nous aident à prendre de meilleures décisions.</p>
                      </div>
                    ) : (
                      <form onSubmit={handleSondageSubmit} className="feedback-form">
                        <div className="form-section">
                          <h3>Profil voyageur</h3>
                          <div className="form-group">
                            <label htmlFor="sondage-age">Tranche d'âge</label>
                            <select
                              id="sondage-age"
                              name="age"
                              value={sondageData.age}
                              onChange={handleSondageChange}
                            >
                              <option value="">Sélectionnez</option>
                              <option value="18-25">18-25 ans</option>
                              <option value="26-35">26-35 ans</option>
                              <option value="36-50">36-50 ans</option>
                              <option value="51-65">51-65 ans</option>
                              <option value="65+">65 ans et plus</option>
                            </select>
                          </div>

                          <div className="form-group">
                            <label>Fréquence d'utilisation</label>
                            <div className="radio-group vertical">
                              {frequences.map((freq, index) => (
                                <label key={index} className="radio-label">
                                  <input
                                    type="radio"
                                    name="frequence"
                                    value={freq.toLowerCase()}
                                    checked={sondageData.frequence === freq.toLowerCase()}
                                    onChange={handleSondageChange}
                                  />
                                  <span className="radio-custom"></span>
                                  {freq}
                                </label>
                              ))}
                            </div>
                          </div>
                        </div>

                        <div className="form-section">
                          <h3>Préférences et satisfaction</h3>
                          <div className="form-group">
                            <label>Méthode de réservation préférée</label>
                            <div className="radio-group vertical">
                              {methodesReservation.map((methode, index) => (
                                <label key={index} className="radio-label">
                                  <input
                                    type="radio"
                                    name="prefereReservation"
                                    value={methode.toLowerCase()}
                                    checked={sondageData.prefereReservation === methode.toLowerCase()}
                                    onChange={handleSondageChange}
                                  />
                                  <span className="radio-custom"></span>
                                  {methode}
                                </label>
                              ))}
                            </div>
                          </div>

                          <div className="form-group">
                            <label>Satisfaction générale</label>
                            <div className="satisfaction-scale">
                              {["Très insatisfait", "Insatisfait", "Neutre", "Satisfait", "Très satisfait"].map((label, index) => (
                                <label key={index} className="scale-label">
                                  <input
                                    type="radio"
                                    name="satisfactionGenerale"
                                    value={index + 1}
                                    checked={parseInt(sondageData.satisfactionGenerale) === index + 1}
                                    onChange={handleSondageChange}
                                  />
                                  <span className="scale-custom">{index + 1}</span>
                                  <span className="scale-text">{label}</span>
                                </label>
                              ))}
                            </div>
                          </div>

                          <div className="form-group">
                            <label>Quels aspects devrions-nous améliorer ?</label>
                            <div className="checkbox-group">
                              {["Ponctualité", "Confort", "Prix", "Service client", "Application mobile", "Information voyageurs"].map((item, index) => (
                                <label key={index} className="checkbox-label">
                                  <input
                                    type="checkbox"
                                    value={item.toLowerCase()}
                                    checked={sondageData.ameliorements.includes(item.toLowerCase())}
                                    onChange={handleSondageChange}
                                  />
                                  <span className="checkmark"></span>
                                  {item}
                                </label>
                              ))}
                            </div>
                          </div>
                        </div>

                        <div className="form-group">
                          <label htmlFor="sondage-suggestions">Suggestions supplémentaires</label>
                          <textarea
                            id="sondage-suggestions"
                            name="suggestions"
                            value={sondageData.suggestions}
                            onChange={handleSondageChange}
                            placeholder="Avez-vous d'autres suggestions ou commentaires ?"
                            rows="3"
                          />
                        </div>

                        <button type="submit" className="submit-btn">
                          Soumettre mes réponses
                        </button>
                      </form>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Section Statistiques */}
        <section className="stats-section">
          <div className="container">
            <h2 className="section-title">Votre impact</h2>
            <p className="section-subtitle">Grâce à vos retours, nous améliorons nos services chaque jour</p>
            
            <div className="stats-grid">
              <div className="stat-card">
                <div className="stat-icon">📈</div>
                <div className="stat-content">
                  <h3>85% des suggestions</h3>
                  <p>Sont étudiées et mises en œuvre</p>
                </div>
              </div>
              <div className="stat-card">
                <div className="stat-icon">⏱️</div>
                <div className="stat-content">
                  <h3>48h max</h3>
                  <p>Délai moyen de traitement des doléances</p>
                </div>
              </div>
              <div className="stat-card">
                <div className="stat-icon">✅</div>
                <div className="stat-content">
                  <h3>95% résolus</h3>
                  <p>Des problèmes signalés sont résolus</p>
                </div>
              </div>
              <div className="stat-card">
                <div className="stat-icon">👥</div>
                <div className="stat-content">
                  <h3>50,000+</h3>
                  <p>Voyageurs participent chaque mois</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
}