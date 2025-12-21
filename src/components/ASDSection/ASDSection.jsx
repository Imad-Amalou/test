import "./ASDSection.css";
import { Link } from "react-router-dom";
import avis from "../../Assets/01.png";
import dol from "../../Assets/02.png";
import sondage from "../../Assets/03.png";




const ASDSection = () => {
  return (
    <section className="ASD">
      <div className="text">
        <h2>Partagez, participez, signalez — votre voix compte</h2>
        <p>
          Chez SOGRAL, nous améliorons quotidiennement la qualité du service grâce
          à vos retours. Donnez votre avis, répondez à nos sondages rapides ou
          signalez une doléance : chaque contribution nous aide à rendre vos
          trajets plus sûrs et plus fluides.
        </p>
      </div>

      <div className="care">
        <div className="deuxcare">
          <div className="careuni" role="article">
            <img
              src={avis}
              alt="Icône Avis"
              width="50"
            />
            <h3>Avis</h3>
            <Link to="/Feedback"className="small-link">  Donner un avis
            </Link>
           
          </div>

          <div className="careuni" role="article">
            <img
              src={dol}
              alt="Icône Sondages"
              width="50"
            />
            <h3>Sondages</h3>
            
            <Link to="/Feedback"className="small-link">  Participer à un sondage
            </Link>
          </div>
        </div>

       
        <div className="uncare">
          <div className="careuni" role="article">
            <img
              src={sondage}
              alt="Icône Doléances"
              width="50"
            />
            <h3>Doléances</h3>
          
            <Link to="/Feedback"className="small-link">   Soumettre une doléance
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ASDSection;
