import React, { useState } from "react";
import Header from "../../components/Header/Header";
import SubHeader from "../../components/SubHeader/SubHeader";
import Footer from "../../components/Footer/Footer";
import "./Contact.css";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock,FaExclamationTriangle,FaCheck} from "react-icons/fa";


export default function Contact() {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
    telephone: "",
    sujet: "",
    message: "",
    type: "particulier"
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.nom.trim()) newErrors.nom = "Le nom est requis";
    if (!formData.prenom.trim()) newErrors.prenom = "Le prénom est requis";
    if (!formData.email.trim()) newErrors.email = "L'email est requis";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email invalide";
    if (!formData.telephone.trim()) newErrors.telephone = "Le téléphone est requis";
    if (!formData.sujet.trim()) newErrors.sujet = "Le sujet est requis";
    if (!formData.message.trim()) newErrors.message = "Le message est requis";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      console.log("Données du formulaire:", formData);
      setIsSubmitted(true);
      setFormData({
        nom: "",
        prenom: "",
        email: "",
        telephone: "",
        sujet: "",
        message: "",
        type: "particulier"
      });
      setTimeout(() => setIsSubmitted(false), 5000);
    } else {
      setErrors(validationErrors);
    }
  };

const contactMethods = [
  {
    icon: <FaPhoneAlt />,
    title: "Téléphone",
    details: "025 34 56 78",
    subtitle: "Lun-Ven: 8h-17h",
    color: "#95C11F"
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    details: "contact@sogral.dz",
    subtitle: "Réponse sous 48h",
    color: "#00592D"
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Adresse",
    details: "123 Rue des Transports",
    subtitle: "Alger Centre, Algérie",
    color: "#6FA11F"
  },
  {
    icon: <FaClock />,
    title: "Horaires",
    details: "Lundi - Vendredi",
    subtitle: "8h00 - 17h00",
    color: "#008F4A"
  }
];


  const faqs = [
    { question: "Quels sont les délais de réponse ?", answer: "Nous nous engageons à répondre à toutes vos demandes dans un délai maximum de 48 heures ouvrables." },
    { question: "Comment contacter le service client ?", answer: "Vous pouvez appeler notre service client au 025 34 56 78 ou envoyer un email à client@sogral.dz" },
    { question: "Où se trouvent vos agences ?", answer: "Nous avons des agences dans toutes les principales villes d'Algérie. Consultez notre page 'Agences' pour plus de détails." },
    { question: "Comment signaler un problème de transport ?", answer: "Utilisez notre formulaire de doléances en ligne ou contactez-nous directement par téléphone." }
  ];

  // Liste des agences avec lien Google Maps
  const agencies = [
    { name: "Alger Centre Kharouba", address: "123 Rue des Transports", phone: "023 45 67 89", mapLink: "https://www.google.com/maps/search/?api=1&query=123+Rue+des+Transports+Alger" },
    { name: "Oran", address: "45 Avenue de l'Indépendance", phone: "041 23 45 67", mapLink: "https://www.google.com/maps/search/?api=1&query=45+Avenue+de+l'Indépendance+Oran" },
    { name: "Constantine", address: "78 Boulevard de la République", phone: "031 67 89 01", mapLink: "https://www.google.com/maps/search/?api=1&query=78+Boulevard+de+la+République+Constantine" },
    { name: "Annaba", address: "12 Rue du Port", phone: "038 90 12 34", mapLink: "https://www.google.com/maps/search/?api=1&query=12+Rue+du+Port+Annaba" }
  ];

  return (
    <>
      <Header />
      <SubHeader />
      
      <main className="contact-page">
        <section className="contact-hero">
          <div className="hero-overlay">
            <h1>Contactez SOGRAL</h1>
            <p>Une question, une suggestion ou besoin d'assistance ? Notre équipe est à votre écoute.</p>
          </div>
        </section>

        <section className="contact-methods-section">
          <div className="container">
            <h2 className="section-title3">Nos canaux de communication</h2>
            <p className="section-subtitle">Choisissez le moyen qui vous convient le mieux</p>
            <div className="methods-grid">
              {contactMethods.map((method, index) => (
                <div key={index} className="method-card" style={{ borderTopColor: method.color }}>
                  <div className="method-icon" style={{ backgroundColor: method.color }}>{method.icon}</div>
                  <h3>{method.title}</h3>
                  <p className="method-details">{method.details}</p>
                  <p className="method-subtitle">{method.subtitle}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="contact-form-section">
          <div className="container">
            <div className="form-info-grid">
              <div className="form-container">
                <div className="form-header">
                  <h2>Envoyez-nous un message</h2>
                  <p>Remplissez le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais</p>
                </div>
                {isSubmitted ? (
                  <div className="success-message">
                    <div className="success-icon2"><FaCheck /></div>
                    <h3>Message envoyé avec succès !</h3>
                    <p>Nous vous répondrons dans les plus brefs délais. Merci de votre confiance.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="contact-form">
                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="nom">Nom *</label>
                        <input type="text" id="nom" name="nom" value={formData.nom} onChange={handleChange} className={errors.nom ? "error" : ""} placeholder="Votre nom" />
                        {errors.nom && <span className="error-message">{errors.nom}</span>}
                      </div>
                      <div className="form-group">
                        <label htmlFor="prenom">Prénom *</label>
                        <input type="text" id="prenom" name="prenom" value={formData.prenom} onChange={handleChange} className={errors.prenom ? "error" : ""} placeholder="Votre prénom" />
                        {errors.prenom && <span className="error-message">{errors.prenom}</span>}
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="email">Email *</label>
                        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className={errors.email ? "error" : ""} placeholder="exemple@email.com" />
                        {errors.email && <span className="error-message">{errors.email}</span>}
                      </div>
                      <div className="form-group">
                        <label htmlFor="telephone">Téléphone *</label>
                        <input type="tel" id="telephone" name="telephone" value={formData.telephone} onChange={handleChange} className={errors.telephone ? "error" : ""} placeholder="05 XX XX XX XX" />
                        {errors.telephone && <span className="error-message">{errors.telephone}</span>}
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="sujet">Sujet *</label>
                      <select id="sujet" name="sujet" value={formData.sujet} onChange={handleChange} className={errors.sujet ? "error" : ""}>
                        <option value="">Sélectionnez un sujet</option>
                        <option value="information">Demande d'information</option>
                        <option value="reservation">Problème de réservation</option>
                        <option value="reclamation">Réclamation</option>
                        <option value="partenariat">Demande de partenariat</option>
                        <option value="autre">Autre</option>
                      </select>
                      {errors.sujet && <span className="error-message">{errors.sujet}</span>}
                    </div>
                    <div className="form-group">
                      <label htmlFor="message">Message *</label>
                      <textarea id="message" name="message" value={formData.message} onChange={handleChange} className={errors.message ? "error" : ""} placeholder="Décrivez votre demande en détail..." rows="5" />
                      {errors.message && <span className="error-message">{errors.message}</span>}
                    </div>
                    <button type="submit" className="submit-btn">Envoyer le message</button>
                  </form>
                )}
              </div>

              <div className="info-container">
                <div className="info-card">
                  <h3>Besoin d'une réponse rapide ?</h3>
                  <div className="emergency-contact">
                    <div className="emergency-icon"><FaExclamationTriangle /></div>
                    <div className="emergency-content">
                      <h4>Urgence transport</h4>
                      <p className="emergency-phone">0770 777 777</p>
                      <p className="emergency-hours">24h/24 - 7j/7</p>
                    </div>
                  </div>
                  <div className="info-divider"></div>
                  <h4>FAQ - Questions fréquentes</h4>
                  <div className="faq-list">
                    {faqs.map((faq, index) => (
                      <div key={index} className="faq-item">
                        <h5>{faq.question}</h5>
                        <p>{faq.answer}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Carte Google Maps */}
        <section className="agencies-map-section">
          <div className="container">
            <h2 className="section-title3">Trouvez une agence près de chez vous</h2>
            <div className="map-container">
              <div className="map-placeholder">
             <iframe
                title="Carte SOGRAL"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3202.123456789!2d3.057654!3d36.743210!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fddabcdef12345%3A0xabcdef123456789!2sGare%20Kharouba%20Hussein%20Dey%2C%20Alger!5e0!3m2!1sfr!2sdz!4v1700000000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />


              </div>

              <div className="agencies-list">
                <h3>Agences principales</h3>
                <ul>
                  {agencies.map((agency, index) => (
                    <li key={index}>
                      <strong>{agency.name}</strong>
                      <p>{agency.address}</p>
                      <p>📞 {agency.phone}</p>
                      <a href={agency.mapLink} target="_blank" rel="noopener noreferrer" className="map-link">Voir sur Google Maps</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
