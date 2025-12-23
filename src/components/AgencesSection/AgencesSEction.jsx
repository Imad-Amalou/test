import "./AgencesSection.css";
import { Link } from "react-router-dom";
import img from "../../Assets/ag.png";
const agences = [
  {
    title: "Agence de Béjaïa",
    description: "Retrouvez notre équipe dans l’agence principale au centre-ville.",
    img: img
  },
  {
    title: "Agence d’Akbou",
    description: "Nos conseillers vous accueillent pour répondre à toutes vos demandes.",
    img: img 
  },
  {
    title: "Agence de Tazmalt",
    description: "Un service de proximité pour mieux vous accompagner.",
    img: img
  },
];

const AgencesSection = () => {
  return (
    <section className="agences-section">
      <h2 className="agence-title">Nos agences</h2>

      <div className="agences-grid">
        {agences.map((agence, index) => (
          <div key={index} className="agence-card">
            <div className="agence-img">
              <img src={agence.img} alt={agence.title} />
              <button className="agence-btn">›</button>
            </div>
            <h3>{agence.title}</h3>
            <p>{agence.description}</p>
          </div>
        ))}
      </div>

      <div className="agence-more">
        <Link to="/AgencesSogral" className="more-btn">Voir plus d’agences</Link>
      </div>
    </section>
  );
};

export default AgencesSection;
