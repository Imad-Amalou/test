import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./config/ScrollToTop";
import { useTranslation } from "react-i18next";

import Home from "./pages/home/home";
import Contact from "./pages/Contact/Contact";
import EspaceTransporteur from "./pages/EspaceTransporteur/EspaceTransporteur";
import LocauxCommerciaux from "./pages/LocauxCommerciaux/LocauxCommerciaux";
import EspaceVoyageur from "./pages/EspaceVoyageur/EspaceVoyageur";
import AgencesSogral from "./pages/AgencesSogral/AgenceSogral";
import Feedback from "./pages/Feedback/Feedback";
import APropos from "./pages/APropos/APropos";
import Services from "./pages/Services/Services";
import Sitemap from "./pages/SiteMap/SiteMap";
import MentionsLegales from "./pages/MentionsLegales/MentionsLegales";
import PolitiqueCookies from "./pages/PolitiqueCookies/PolitiqueCookies";
import Actualite from "./pages/actualite/actualite";
function App() {
  const { i18n } = useTranslation();
  const isAr = i18n.language === "ar";

  return (
    <BrowserRouter>
      <ScrollToTop />

      <div className={isAr ? "text-ar" : ""}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/EspaceTransporteur" element={<EspaceTransporteur />} />
          <Route path="/LocauxCommerciaux" element={<LocauxCommerciaux />} />
          <Route path="/EspaceVoyageur" element={<EspaceVoyageur />} />
          <Route path="/AgencesSogral" element={<AgencesSogral />} />
          <Route path="/Feedback" element={<Feedback />} />
          <Route path="/APropos" element={<APropos />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Sitemap" element={<Sitemap />} />
          <Route path="/mentions-legales" element={<MentionsLegales />} />
          <Route path="/Cookies" element={<PolitiqueCookies />} />
          <Route path="/Actualite" element={<Actualite />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
