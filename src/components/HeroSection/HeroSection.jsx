import "./HeroSection.css";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <img src="images/bus1.jpg" alt="Image d'accueil" className="hero-bg" />

      <div className="hero-card">
        <img src="/images/logo1.png" alt="Logo" />

        <h2>Recherchez votre itinéraire</h2>
        <p>
          Entrez votre point de départ et votre destination pour trouver le
          meilleur itinéraire :
        </p>

        <input type="text" placeholder="Point de départ" />
        <input type="text" placeholder="Destination" />

        <select>
          <option>Moyen de transport</option>
          <option>Bus</option>
          <option>Train</option>
          <option>Taxi</option>
        </select>

        <button className="submit-btn">Chercher</button>
      </div>
    </section>
  );
};

export default HeroSection;
