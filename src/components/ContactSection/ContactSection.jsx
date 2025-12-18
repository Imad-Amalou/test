import { Link } from "react-router-dom";
import "./ContactSection.css";
import Contact from "../../Assets/contact.png"

export default function ContactCTA() {
  return (
    <section className="contact-section2">
      
      <div className="left-box">
        <h2>
          Vous n’avez pas trouvé <br />
          réponse à votre question ?
        </h2>
        <img
          src={Contact}
          alt="Illustration contact"
        />
      </div>

      <div className="right-box">
        <h2>Contactez-nous</h2>
        <p>
          Une question ? Un problème ? <br />
          Contactez-nous sur l'un de nos canaux :
        </p>
        <button>
          <Link to="/Contact" style={{ textDecoration: "none",color:"black" }}>
            Nous contacter
          </Link>
        </button>
      </div>

    </section>
  );
}
