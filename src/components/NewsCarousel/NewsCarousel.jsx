import { useEffect, useRef, useState } from "react";
import "./NewsCarousel.css"; // ton CSS séparé

const newsData = [
  {
    img: "images/actu1.webp",
    date: "Publié le 30 Nov 2025",
    title: "Ouverture de la ligne Alger – Tamanrasset",
    desc: "SOGRAL annonce le lancement officiel...",
    link: "#"
  },
  {
    img: "images/actu2.webp",
    date: "Publié le 22 Nov 2025",
    title: "Modernisation de la gare d’Oran",
    desc: "Après plusieurs mois de travaux...",
    link: "#"
  },
  {
    img: "images/actu3.avif",
    date: "Publié le 15 Nov 2025",
    title: "Lancement du service de réservation en ligne",
    desc: "Désormais, les voyageurs peuvent...",
    link: "#"
  },
  {
    img: "images/actu3.avif",
    date: "Publié le 15 Nov 2025",
    title: "Lancement du service de réservation en ligne",
    desc: "Désormais, les voyageurs peuvent...",
    link: "#"
  },
  {
    img: "images/actu3.avif",
    date: "Publié le 15 Nov 2025",
    title: "Lancement du service de réservation en ligne",
    desc: "Désormais, les voyageurs peuvent...",
    link: "#"
  }
];

export default function NewsCarousel() {
  const trackRef = useRef(null);
  const [index, setIndex] = useState(0);
  const gap = 20; // gap entre les cartes

  useEffect(() => {
    const track = trackRef.current;
    const totalCards = newsData.length;

    const interval = setInterval(() => {
      setIndex(prev => (prev + 1) % totalCards);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    const cardWidth = track.children[0].offsetWidth + gap;
    track.style.transform = `translateX(${-index * cardWidth}px)`;
    track.style.transition = "transform 0.5s linear";
  }, [index, gap]);

  return (
    <div className="news-carousel">
      <h2 className="news-title">Actualités</h2>
      <div className="news-carousel-track" ref={trackRef}>
        {newsData.map((news, i) => (
          <div className="news-card" key={i}>
            <img src={news.img} alt={`Actualité ${i + 1}`} />
            <p className="news-date">{news.date}</p>
            <div className="news-content">
              <h3>{news.title}</h3>
              <p>{news.desc}</p>
              <a href={news.link} className="news-btn">Lire plus</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
