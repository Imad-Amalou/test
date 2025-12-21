import Header from "../../components/Header/Header";
import SubHeader from "../../components/SubHeader/SubHeader";
import HeroSection from "../../components/HeroSection/HeroSection";
import TraveauxSection from "../../components/TraveauxSection/TraveauxSection";
import ASDSection from "../../components/ASDSection/ASDSection";
import MahatatiSection from "../../components/MahatatiSection/MahatatiSection";
import ContactSection from "../../components/ContactSection/ContactSection";
import SocialCards from "../../components/SocialCards/SocialCards";
import AgencesSection from "../../components/AgencesSection/AgencesSEction";
import Footer from "../../components/Footer/Footer";
import NewsCarousel from "../../components/NewsCarousel/NewsCarousel";
export default function Home() {
  return (
    <div className="app-container">
      
      <div className="main-content">
        <Header />
        <SubHeader />
        <HeroSection />
        <TraveauxSection />
        <ASDSection />
        <MahatatiSection />
        <ContactSection />
        <SocialCards />
        <AgencesSection />
        <NewsCarousel />
      </div>

      <Footer />
      
    </div>
  );
}
