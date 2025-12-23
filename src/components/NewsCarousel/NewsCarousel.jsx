import { useEffect, useRef, useState } from "react";
import "./NewsCarousel.css";
import img from "../../Assets/actu1.webp";
import { Link } from "react-router-dom";

const newsData = [
  {
    img: img,
    date: "Publié le 30 Nov 2025",
    title: "Ouverture de la ligne Alger – Tamanrasset",
    desc: "SOGRAL annonce le lancement officiel...",
    link: "#"
  },
  {
    img: img,
    date: "Publié le 22 Nov 2025",
    title: "Modernisation de la gare d’Oran",
    desc: "Après plusieurs mois de travaux...",
    link: "#"
  },
  {
    img: img,
    date: "Publié le 15 Nov 2025",
    title: "Lancement du service de réservation en ligne",
    desc: "Désormais, les voyageurs peuvent...",
    link: "#"
  },
  {
    img: img,
    date: "Publié le 15 Nov 2025",
    title: "Lancement du service de réservation en ligne",
    desc: "Désormais, les voyageurs peuvent...",
    link: "#"
  },
  {
    img: img,
    date: "Publié le 15 Nov 2025",
    title: "Lancement du service de réservation en ligne",
    desc: "Désormais, les voyageurs peuvent...",
    link: "#"
  }
];

// 🔁 DUPLICATION
const extendedNewsData = [...newsData, ...newsData];

export default function NewsCarousel() {
  const trackRef = useRef(null);
  const [index, setIndex] = useState(0);
  const gap = 20;
  const total = newsData.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prev => prev + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track || !track.children.length) return;

    const cardWidth = track.children[0].offsetWidth + gap;

    track.style.transition = "transform 0.5s linear";
    track.style.transform = `translateX(${-index * cardWidth}px)`;

    // 🔄 RESET INVISIBLE
    if (index === total) {
      setTimeout(() => {
        track.style.transition = "none";
        track.style.transform = "translateX(0px)";
        setIndex(0);
      }, 500);
    }
  }, [index, total, gap]);

  return (
    <div className="news-carousel">
      <h2 className="news-title">Actualités</h2>

      <div className="news-carousel-track" ref={trackRef}>
        {extendedNewsData.map((news, i) => (
          <div className="news-card" key={i}>
            <img src={news.img} alt={`Actualité ${i + 1}`} />
            <p className="news-date">{news.date}</p>
            <div className="news-content">
              <h3>{news.title}</h3>
              <p>{news.desc}</p>
              <Link to={"/Actualite"} className="news-btn"  >
                Lire plus
              </Link>
             
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
