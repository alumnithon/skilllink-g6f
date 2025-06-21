import HeroSection from '../components/homePage/HeroSection';
import RolesSection from '../components/homePage/RolesSection';
import ContactSection from '../components/homePage/ContactSection';

const HomePage = () => {
  return (
    <div className="flex-1">
      <HeroSection />
      <RolesSection />
      <ContactSection />
    </div>
  );
};

export default HomePage;
