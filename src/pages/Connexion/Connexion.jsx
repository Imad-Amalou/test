import React, { useState } from 'react';
import './Connexion.css';
import { 
  FaEnvelope, FaLock, FaEye, FaEyeSlash, 
  FaUser, FaPhone, FaCheck, FaLeaf,
  FaShieldAlt, FaBolt, FaChartLine, FaHeadset
} from 'react-icons/fa';
import Header from '../../components/Header/Header';
import SubHeader from '../../components/SubHeader/SubHeader';
import Footer from '../../components/Footer/Footer';
import logo from '../../Assets/logo.png';
const Connexion = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(true);
  
  // États pour les formulaires
  const [loginForm, setLoginForm] = useState({
    email: 'imad@sogral.dz',
    password: 'imad06'
  });
  
  const [registerForm, setRegisterForm] = useState({
    fullName: 'Amalou Imad',
    email: 'amalou.imad@sogral.dz',
    phone: '0555122022',
    password: 'SecurePass123',
    confirmPassword: 'SecurePass123'
  });
  
  // États pour les erreurs
  const [errors, setErrors] = useState({});
  
  // Fonction pour gérer les changements dans le formulaire de connexion
  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginForm(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Effacer l'erreur pour ce champ
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: null
      }));
    }
  };
  
  // Fonction pour gérer les changements dans le formulaire d'inscription
  const handleRegisterChange = (e) => {
    const { name, value } = e.target;
    setRegisterForm(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Effacer l'erreur pour ce champ
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: null
      }));
    }
  };
  
  // Validation de l'email
  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };
  
  // Validation du téléphone
  const validatePhone = (phone) => {
    const re = /^[\d\s\-\(\)\+]{10,}$/;
    return re.test(phone.replace(/\s/g, ''));
  };
  
  // Validation du mot de passe
  const validatePassword = (password) => {
    return password.length >= 8 && /[a-zA-Z]/.test(password) && /\d/.test(password);
  };
  
  // Soumission du formulaire de connexion
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    
    // Validation
    if (!loginForm.email || !validateEmail(loginForm.email)) {
      newErrors.loginEmail = 'Veuillez entrer une adresse email valide';
    }
    
    if (!loginForm.password || loginForm.password.length < 6) {
      newErrors.loginPassword = 'Le mot de passe doit contenir au moins 6 caractères';
    }
    
    setErrors(newErrors);
    
    if (Object.keys(newErrors).length === 0) {
      // Simulation de connexion réussie
      console.log('Connexion réussie:', loginForm);
      alert('Connexion réussie ! Redirection vers votre espace client...');
      // Ici, vous redirigeriez vers l'espace client
    }
  };
  
  // Soumission du formulaire d'inscription
  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    
    // Validation
    if (!registerForm.fullName.trim()) {
      newErrors.registerFullName = 'Veuillez entrer votre nom complet';
    }
    
    if (!registerForm.email || !validateEmail(registerForm.email)) {
      newErrors.registerEmail = 'Veuillez entrer une adresse email valide';
    }
    
    if (!registerForm.phone || !validatePhone(registerForm.phone)) {
      newErrors.registerPhone = 'Veuillez entrer un numéro de téléphone valide';
    }
    
    if (!registerForm.password || !validatePassword(registerForm.password)) {
      newErrors.registerPassword = 'Le mot de passe doit contenir au moins 8 caractères avec des lettres et des chiffres';
    }
    
    if (registerForm.password !== registerForm.confirmPassword) {
      newErrors.registerConfirmPassword = 'Les mots de passe ne correspondent pas';
    }
    
    if (!acceptTerms) {
      newErrors.acceptTerms = 'Veuillez accepter les conditions d\'utilisation';
    }
    
    setErrors(newErrors);
    
    if (Object.keys(newErrors).length === 0) {
      // Simulation d'inscription réussie
      console.log('Inscription réussie:', registerForm);
      alert('Inscription réussie ! Un email de confirmation vous a été envoyé.');
      setIsLogin(true); // Basculer vers la connexion
    }
  };
  
  // Fonction pour réinitialiser le mot de passe
  const handleResetPassword = () => {
    const email = prompt('Veuillez entrer votre adresse email pour réinitialiser votre mot de passe :');
    if (email && validateEmail(email)) {
      alert(`Un lien de réinitialisation a été envoyé à ${email}`);
    } else if (email) {
      alert('Veuillez entrer une adresse email valide');
    }
  };
  
  // Avantages de Sogral
  const features = [
    {
      icon: <FaBolt />,
      title: 'Suivi en temps réel',
      description: 'Consultez votre consommation énergétique heure par heure'
    },
    {
      icon: <FaChartLine />,
      title: 'Économies garanties',
      description: 'Réduisez votre facture grâce à nos conseils personnalisés'
    },
    {
      icon: <FaLeaf />,
      title: 'Énergie verte',
      description: 'Choisissez une électricité 100% renouvelable'
    },
    {
      icon: <FaHeadset />,
      title: 'Service client 7j/7',
      description: 'Une équipe à votre écoute pour toutes vos questions'
    }
  ];

  return (
    <>
    <Header />
    <SubHeader />
    <div className="connexion-page">
      {/* Section principale */}
      <div className="auth-container">
        {/* Colonne gauche - Formulaires */}
        <div className="auth-forms3">
          
          <div className="auth-header">
            <img className='logo-connexion' src={logo} alt='logo sogral'></img>
            <div className="logo">
   
              <div className="logo-text">
               
              </div>
            </div>
            <h1>{isLogin ? 'Connectez-vous' : 'Créez votre compte'}</h1>
            <p className="auth-subtitle">
              {isLogin 
                ? 'Accédez à votre espace client pour gérer vos contrats' 
                : 'Rejoignez Sogral pour une énergie plus responsable'}
            </p>
          </div>

          {/* Sélecteur connexion/inscription */}
          <div className="auth-toggle">
            <button 
              className={`toggle-btn ${isLogin ? 'active' : ''}`}
              onClick={() => setIsLogin(true)}
            >
              Connexion
            </button>
            <button 
              className={`toggle-btn ${!isLogin ? 'active' : ''}`}
              onClick={() => setIsLogin(false)}
            >
              Inscription
            </button>
          </div>

          {/* Formulaire de connexion */}
          {isLogin ? (
            <form className="login-form" onSubmit={handleLoginSubmit}>
              <div className={`form-group ${errors.loginEmail ? 'error' : ''}`}>
                <label htmlFor="email">
                  <FaEnvelope className="input-icon" />
                  Adresse email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="votre@email.com"
                  value={loginForm.email}
                  onChange={handleLoginChange}
                  required
                />
                {errors.loginEmail && (
                  <div className="error-message">{errors.loginEmail}</div>
                )}
              </div>

              <div className={`form-group ${errors.loginPassword ? 'error' : ''}`}>
                <label htmlFor="password">
                  <FaLock className="input-icon" />
                  Mot de passe
                </label>
                <div className="password-input-container">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    placeholder="Votre mot de passe"
                    value={loginForm.password}
                    onChange={handleLoginChange}
                    required
                  />
                  <button
                    type="button"
                    className="password-toggle-btn"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
                {errors.loginPassword && (
                  <div className="error-message">{errors.loginPassword}</div>
                )}
              </div>

              <div className="form-options">
                <div className="checkbox-group">
                  <input
                    type="checkbox"
                    id="rememberMe"
                    checked={rememberMe}
                    onChange={() => setRememberMe(!rememberMe)}
                  />
                  <label htmlFor="rememberMe">Se souvenir de moi</label>
                </div>
                <button
                  type="button"
                  className="forgot-password"
                  onClick={handleResetPassword}
                >
                  Mot de passe oublié ?
                </button>
              </div>

              <button type="submit" className="btn btn-primary btn-login">
                <FaShieldAlt />
                Se connecter
              </button>

              <div className="divider">
                <span>Ou connectez-vous avec</span>
              </div>

              <div className="social-login">
                <button type="button" className="social-btn google-btn">
                  <svg width="20" height="20" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  Google
                </button>
                <button type="button" className="social-btn facebook-btn">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="#1877F2">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  Facebook
                </button>
              </div>
            </form>
          ) : (
            /* Formulaire d'inscription */
            <form className="register-form" onSubmit={handleRegisterSubmit}>
              <div className={`form-group ${errors.registerFullName ? 'error' : ''}`}>
                <label htmlFor="fullName">
                  <FaUser className="input-icon" />
                  Nom complet
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  placeholder="Jean Dupont"
                  value={registerForm.fullName}
                  onChange={handleRegisterChange}
                  required
                />
                {errors.registerFullName && (
                  <div className="error-message">{errors.registerFullName}</div>
                )}
              </div>

              <div className={`form-group ${errors.registerEmail ? 'error' : ''}`}>
                <label htmlFor="registerEmail">
                  <FaEnvelope className="input-icon" />
                  Adresse email
                </label>
                <input
                  type="email"
                  id="registerEmail"
                  name="email"
                  placeholder="votre@email.com"
                  value={registerForm.email}
                  onChange={handleRegisterChange}
                  required
                />
                {errors.registerEmail && (
                  <div className="error-message">{errors.registerEmail}</div>
                )}
              </div>

              <div className={`form-group ${errors.registerPhone ? 'error' : ''}`}>
                <label htmlFor="phone">
                  <FaPhone className="input-icon" />
                  Numéro de téléphone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="01 23 45 67 89"
                  value={registerForm.phone}
                  onChange={handleRegisterChange}
                  required
                />
                {errors.registerPhone && (
                  <div className="error-message">{errors.registerPhone}</div>
                )}
              </div>

              <div className={`form-group ${errors.registerPassword ? 'error' : ''}`}>
                <label htmlFor="registerPassword">
                  <FaLock className="input-icon" />
                  Mot de passe
                </label>
                <div className="password-input-container">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="registerPassword"
                    name="password"
                    placeholder="Créez un mot de passe sécurisé"
                    value={registerForm.password}
                    onChange={handleRegisterChange}
                    required
                  />
                  <button
                    type="button"
                    className="password-toggle-btn"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
                {errors.registerPassword && (
                  <div className="error-message">{errors.registerPassword}</div>
                )}
                <div className="password-requirements">
                  <span className={registerForm.password.length >= 8 ? 'valid' : ''}>
                    <FaCheck /> Au moins 8 caractères
                  </span>
                  <span className={/[a-zA-Z]/.test(registerForm.password) ? 'valid' : ''}>
                    <FaCheck /> Contient des lettres
                  </span>
                  <span className={/\d/.test(registerForm.password) ? 'valid' : ''}>
                    <FaCheck /> Contient des chiffres
                  </span>
                </div>
              </div>

              <div className={`form-group ${errors.registerConfirmPassword ? 'error' : ''}`}>
                <label htmlFor="confirmPassword">
                  <FaLock className="input-icon" />
                  Confirmer le mot de passe
                </label>
                <div className="password-input-container">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    id="confirmPassword"
                    name="confirmPassword"
                    placeholder="Répétez votre mot de passe"
                    value={registerForm.confirmPassword}
                    onChange={handleRegisterChange}
                    required
                  />
                  <button
                    type="button"
                    className="password-toggle-btn"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
                {errors.registerConfirmPassword && (
                  <div className="error-message">{errors.registerConfirmPassword}</div>
                )}
              </div>

              <div className={`form-group checkbox-group ${errors.acceptTerms ? 'error' : ''}`}>
                <input
                  type="checkbox"
                  id="acceptTerms"
                  checked={acceptTerms}
                  onChange={() => setAcceptTerms(!acceptTerms)}
                  required
                />
                <label htmlFor="acceptTerms">
                  J'accepte les <a href="#" className="terms-link">conditions générales d'utilisation</a> et la <a href="#" className="terms-link">politique de confidentialité</a> de Sogral
                </label>
                {errors.acceptTerms && (
                  <div className="error-message">{errors.acceptTerms}</div>
                )}
              </div>

              <button type="submit" className="btn btn-primary btn-register">
                Créer mon compte
              </button>

              <p className="login-redirect">
                Déjà un compte ? <button type="button" onClick={() => setIsLogin(true)} className="link-btn">Connectez-vous</button>
              </p>
            </form>
          )}
        </div>

        {/* Colonne droite - Présentation */}
        <div className="auth-presentation">
          <div className="presentation-overlay"></div>
          <div className="presentation-content">
            <h2>Rejoignez la communauté Sogral</h2>
            <p className="presentation-text">
              Plus de 500 000 clients nous font confiance pour une énergie plus verte et plus économique.
            </p>
            
            <div className="features-list">
              {features.map((feature, index) => (
                <div key={index} className="feature-item">
                  <div className="feature-icon">
                    {feature.icon}
                  </div>
                  <div className="feature-content">
                    <h3>{feature.title}</h3>
                    <p>{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="presentation-stats">
              <div className="stat">
                <div className="stat-number">500k+</div>
                <div className="stat-label">Clients satisfaits</div>
              </div>
              <div className="stat">
                <div className="stat-number">99%</div>
                <div className="stat-label">Service disponible</div>
              </div>
              <div className="stat">
                <div className="stat-number">24h</div>
                <div className="stat-label">Support réactif</div>
              </div>
            </div>
            
            <div className="security-badge">
              <FaShieldAlt />
              <span>Données sécurisées et cryptées</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
     </>
  );
};

export default Connexion;