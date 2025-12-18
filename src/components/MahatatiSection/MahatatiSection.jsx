import "./MahatatiSection.css";

const MahatatiSection = () => {
  return (
    <section className="background-section">
      <div className="content-overlay">
        <div className="hero-flex">
          {/* TEXTE */}
          <div className="hero-text">
            <h2>Découvrez l’application Mahatati</h2>

            <p>
              Mahatati vous permet de consulter facilement les trajets, de
              réserver vos billets et de payer en ligne en toute sécurité.
            </p>

            <p>
              Profitez d’un service simple et rapide pour organiser vos
              déplacements avec Sogral, directement depuis votre smartphone.
            </p>

            <a
              href="https://www.mahatati.dz"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>Accéder à Mahatati</button>
            </a>
          </div>

          {/* IMAGE */}
          <div className="hero-image">
            <a href="https://www.mahatati.dz" target="_blank" rel="noreferrer">
              <img
                src="/images/unnamed.png"
                alt="Application Mahatati"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MahatatiSection;
