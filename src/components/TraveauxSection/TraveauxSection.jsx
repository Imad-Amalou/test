import { Link } from "react-router-dom";
import "./TraveauxSection.css";
import logo from "../../Assets/logo1.png"

const TravauxSection = () => {
  return (
    <section className="travaux-section">
      <div className="travaux-content">
        <div className="travaux-left">
          <img
            src={logo}
            alt="Travaux SOGRALE"
            className="travaux-icon"
          />
        </div>

        <div className="travaux-right">
          <h2>Présentation de SOGRALE</h2>

          <p>
            La SOGRALE (Société de Gestion et de Réalisation des Lignes de
            Transport) est une entreprise algérienne spécialisée dans la gestion,
            l’exploitation et le développement des réseaux de transport urbain et
            interurbain.
            <br />
            <br />
            Grâce à une équipe qualifiée et à des solutions modernes,
            l’entreprise œuvre à faciliter les déplacements, optimiser les
            itinéraires et garantir une expérience de transport accessible à
            tous.
          </p>
          <Link to="/APropos" className="travaux-btn"> Voir plus
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TravauxSection;
