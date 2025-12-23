import React, { useState, useEffect } from 'react';
import './actualite.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import SubHeader from '../../components/SubHeader/SubHeader';
import { 
  FaFilter, FaCalendarAlt, FaClock, FaArrowRight, 
  FaNewspaper, FaSearch,
  FaLightbulb,
  FaHandshake,
  FaLeaf,
  FaChartBar,
  FaBolt, FaChartLine, FaAward
} from 'react-icons/fa';
import { MdAttachMoney } from "react-icons/md";
const Actualite = () => {
  const [filter, setFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [newsData, setNewsData] = useState([]);

  // Données d'exemple pour les actualités
  const initialNewsData = [
    {
      id: 1,
      title: "Sogral lance son nouveau programme d'économie d'énergie",
      excerpt: "Découvrez notre nouveau programme visant à aider les ménages à réduire leur consommation énergétique de 20% en moyenne.",
      content: "Sogral lance un programme innovant d'accompagnement à l'économie d'énergie. Ce programme comprend des diagnostics personnalisés, des recommandations adaptées et des aides financières pour les travaux d'isolation.",
      date: "15 mars 2024",
      category: "innovation",
      readTime: "3 min",
      image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      featured: true
    },
    {
      id: 2,
      title: "Transition énergétique : Sogral investit 50 millions d'euros",
      excerpt: "Un investissement majeur pour accélérer la transition vers les énergies renouvelables dans nos territoires.",
      content: "Sogral annonce un investissement de 50 millions d'euros pour développer les infrastructures d'énergies renouvelables. Cet investissement permettra de financer des projets de parcs solaires et éoliens.",
      date: "10 mars 2024",
      category: "investissement",
      readTime: "4 min",
      image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      featured: true
    },
    {
      id: 3,
      title: "Nouveau partenariat avec les villes intelligentes",
      excerpt: "Sogral s'associe avec plusieurs municipalités pour développer des solutions énergétiques intelligentes.",
      content: "Ce partenariat vise à intégrer des solutions énergétiques innovantes dans le développement urbain. Les villes concernées bénéficieront de systèmes de gestion intelligente de l'énergie.",
      date: "5 mars 2024",
      category: "partenariat",
      readTime: "2 min",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      featured: false
    },
    {
      id: 4,
      title: "Rapport RSE 2023 : Nos engagements pour l'environnement",
      excerpt: "Découvrez notre rapport RSE complet et nos objectifs pour réduire notre empreinte carbone.",
      content: "Le rapport RSE 2023 de Sogral présente nos réalisations et nos engagements pour l'année à venir. Nous avons réduit nos émissions de CO2 de 15% par rapport à l'année précédente.",
      date: "28 février 2024",
      category: "rse",
      readTime: "5 min",
      image: "https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      featured: false
    },
    {
      id: 5,
      title: "Nouveaux tarifs régulés : Ce qui change pour vous",
      excerpt: "Explications détaillées des nouveaux tarifs régulés de l'électricité et du gaz qui entrent en vigueur.",
      content: "Les nouveaux tarifs régulés apportent des changements importants pour les consommateurs. Notre équipe vous explique en détail ce qui change et comment cela affecte votre facture.",
      date: "22 février 2024",
      category: "tarifs",
      readTime: "3 min",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      featured: false
    },
    {
      id: 6,
      title: "Innovation : Batteries de stockage pour les particuliers",
      excerpt: "Sogral lance une nouvelle gamme de batteries domestiques pour l'autoconsommation.",
      content: "Ces batteries innovantes permettent de stocker l'énergie solaire produite pendant la journée pour l'utiliser le soir. Une solution idéale pour maximiser l'autoconsommation.",
      date: "18 février 2024",
      category: "innovation",
      readTime: "4 min",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      featured: false
    },
    {
      id: 7,
      title: "Sogral reçoit le prix de l'entreprise responsable",
      excerpt: "Reconnaissance nationale pour nos engagements en matière de développement durable.",
      content: "Ce prix récompense nos efforts en matière de responsabilité sociale et environnementale. C'est une reconnaissance importante de notre engagement quotidien.",
      date: "12 février 2024",
      category: "rse",
      readTime: "2 min",
      image: "https://images.unsplash.com/photo-1551836026-d5c2c5af78e4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      featured: false
    },
    {
      id: 8,
      title: "Nouvelle application mobile : Suivez votre consommation",
      excerpt: "Téléchargez notre nouvelle application pour suivre en temps réel votre consommation d'énergie.",
      content: "L'application Sogral Energy vous permet de suivre votre consommation heure par heure, de recevoir des alertes et de comparer vos données avec des foyers similaires.",
      date: "5 février 2024",
      category: "innovation",
      readTime: "3 min",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      featured: false
    }
  ];

 const filters = [
  { id: "all", label: "Toutes les actualités", icon: <FaNewspaper /> },
  { id: "innovation", label: "Innovation", icon: <FaLightbulb /> },
  { id: "investissement", label: "Investissement", icon: <MdAttachMoney /> },
  { id: "partenariat", label: "Partenariat", icon: <FaHandshake /> },
  { id: "rse", label: "RSE & Environnement", icon: <FaLeaf /> },
  { id: "tarifs", label: "Tarifs & Réglementation", icon: <FaChartBar /> }
];
  useEffect(() => {
    setNewsData(initialNewsData);
  }, []);

  const filteredNews = newsData.filter(news => {
    const matchesFilter = filter === 'all' || news.category === filter;
    const matchesSearch = !searchQuery || 
      news.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      news.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      news.content.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesFilter && matchesSearch;
  });

  const featuredNews = newsData.filter(news => news.featured);

  const getCategoryLabel = (category) => {
    const label = filters.find(f => f.id === category);
    return label ? label.label : category;
  };


  const getCategoryColor = (category) => {
    const colors = {
      innovation: 'var(--secondary-green)',
      investissement: 'var(--warning)',
      partenariat: 'var(--primary-green)',
      rse: 'var(--success)',
      tarifs: 'var(--text-light)'
    };
    return colors[category] || 'var(--primary-green)';
  };

  const getCategoryIcon = (category) => {
    const icons = {
      innovation: <FaBolt />,
      investissement: <FaChartLine />,
      partenariat: <FaHandshake />,
      rse: <FaLeaf />,
      tarifs: <FaAward />
    };
    return icons[category] || <FaNewspaper />;
  };

  const handleSearch = (e) => {
    e.preventDefault();
  };

  const stats = [
    { label: 'Actualités publiées', value: '48' },
    { label: 'Projets innovants', value: '12' },
    { label: 'Partenariats actifs', value: '23' },
    { label: 'Réduction CO2', value: '15%' }
  ];

  return (
    <>
    <Header />
    <SubHeader />
    <div className="actualite-page">
      <section className="hero-section2">
        <div className="hero-content">
          <h1>Actualités Sogral</h1>
          <p>Restez informé des dernières nouvelles, innovations et engagements de Sogral pour l'énergie de demain</p>
   
          <form className="search-bar" onSubmit={handleSearch}>
            <div className="search-input-container">
              <FaSearch className="search-icon" />
              <input
                type="text"
                placeholder="Rechercher une actualité, un sujet..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input"
              />
              <button type="submit" className="search-button">
                Rechercher
              </button>
            </div>
          </form>
        </div>
        <div className="hero-overlay"></div>
      </section>

      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label2">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="featured-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              <span className="title-icon">🌟</span>
              À la une
            </h2>
            <div className="section-subtitle">Les actualités les plus importantes du moment</div>
          </div>
          
          <div className="featured-grid">
            {featuredNews.map(news => (
              <div key={news.id} className="news-card featured">
              
                
                <div className="news-image">
                  <img src={news.image} alt={news.title} />
                  <div className="news-category" style={{ backgroundColor: getCategoryColor(news.category) }}>
                    {getCategoryIcon(news.category)}
                    <span>{getCategoryLabel(news.category)}</span>
                  </div>
                </div>
                
                <div className="news-content">
                  <div className="news-meta">
                    <span className="meta-item">
                      <FaCalendarAlt />
                      {news.date}
                    </span>
                    <span className="meta-item">
                      <FaClock />
                      {news.readTime} de lecture
                    </span>
                  </div>
                  
                  <h3 className="news-title">{news.title}</h3>
                  
                  <p className="news-excerpt">{news.excerpt}</p>
                  
                  <div className="news-footer">
                    <a href="#" className="read-more">
                      Lire l'article
                      <FaArrowRight />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="all-news-section">
        <div className="container">
          <div className="section-header">
            <div>
              <h2 className="section-title">Toutes nos actualités</h2>
              <div className="section-subtitle">Découvrez toutes nos publications</div>
            </div>
            
            <div className="filter-container">
              <div className="filter-header">
                <FaFilter className="filter-icon" />
                <span>Filtrer par catégorie</span>
              </div>
              <div className="filter-options">
                {filters.map(filterItem => (
                  <button
                    key={filterItem.id}
                    className={`filter-btn ${filter === filterItem.id ? 'active' : ''}`}
                    onClick={() => setFilter(filterItem.id)}
                  >
                    <span className="filter-emoji">{filterItem.icon}</span>
                    {filterItem.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          {searchQuery && (
            <div className="search-results-info">
              <p>
                {filteredNews.length} résultat{filteredNews.length !== 1 ? 's' : ''} trouvé{filteredNews.length !== 1 ? 's' : ''} 
                {filter !== 'all' ? ` dans la catégorie ${getCategoryLabel(filter)}` : ''}
                {searchQuery ? ` pour "${searchQuery}"` : ''}
              </p>
            </div>
          )}
          
          <div className="news-grid">
            {filteredNews.map(news => (
              <div key={news.id} className="news-card">
                <div className="news-image">
                  <img src={news.image} alt={news.title} />
                  <div className="news-category" style={{ backgroundColor: getCategoryColor(news.category) }}>
                    {getCategoryIcon(news.category)}
                    <span>{getCategoryLabel(news.category)}</span>
                  </div>
                </div>
                
                <div className="news-content">
                  <div className="news-meta">
                    <span className="meta-item">
                      <FaCalendarAlt />
                      {news.date}
                    </span>
                    <span className="meta-item">
                      <FaClock />
                      {news.readTime}
                    </span>
                  </div>
                  
                  <h3 className="news-title">{news.title}</h3>
                  
                  <p className="news-excerpt">{news.excerpt}</p>
                  
                  <div className="news-footer">
                    <a href="#" className="read-more">
                      Lire l'article
                      <FaArrowRight />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredNews.length === 0 && (
            <div className="no-results">
              <div className="no-results-icon">
                <FaNewspaper />
              </div>
              <h3>Aucune actualité trouvée</h3>
              <p>
                {searchQuery 
                  ? `Aucun résultat pour "${searchQuery}" dans la catégorie ${getCategoryLabel(filter)}`
                  : `Aucune actualité dans la catégorie ${getCategoryLabel(filter)}`}
              </p>
              <div className="no-results-actions">
                <button onClick={() => setFilter('all')} className="btn btn-primary">
                  Voir toutes les actualités
                </button>
                <button onClick={() => setSearchQuery('')} className="btn btn-secondary">
                  Effacer la recherche
                </button>
              </div>
            </div>
          )}

          {filteredNews.length > 0 && (
            <div className="pagination">
              <button className="pagination-btn disabled">
                &laquo; Précédent
              </button>
              <div className="pagination-pages">
                <button className="pagination-page active">1</button>
                <button className="pagination-page">2</button>
                <button className="pagination-page">3</button>
                <span className="pagination-dots">...</span>
                <button className="pagination-page">5</button>
              </div>
              <button className="pagination-btn">
                Suivant &raquo;
              </button>
            </div>
          )}
        </div>
      </section>

      <section className="newsletter-section">
        <div className="container">
          <div className="newsletter-card">
            <div className="newsletter-content">
              <h3>Restez informé</h3>
              <p>Recevez chaque mois nos actualités et conseils pour mieux maîtriser votre consommation d'énergie</p>
              <form className="newsletter-form">
                <input
                  type="email"
                  placeholder="Votre adresse email"
                  className="newsletter-input"
                />
                <button type="submit" className="btn btn-primary">
                  S'abonner
                </button>
              </form>
              <p className="newsletter-note">
                En vous abonnant, vous acceptez de recevoir nos communications. Vous pouvez vous désabonner à tout moment.
              </p>
            </div>
            <div className="newsletter-icon">
              <FaNewspaper />
            </div>
          </div>
        </div>
      </section>
    </div>
    <Footer />
    </>
  );
};

export default Actualite;