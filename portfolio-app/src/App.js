import './App.css';
// import Portfolio from '../src/components/Portfolio'
import Navbar from '../src/components/navbar/CustomNavbar'
import SkillsShowcase from './components/SkillsShowcase';
import ProjectsPortfolio from './components/ProjectsPortfolio';
import AboutSection from './components/AboutSection';
import TestimonialsSection from './components/TestimonialsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
// import InteractiveElements from './components/InteractiveElements';
// import Footer from '../src/components/footer/Footer'
function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection/>
      <SkillsShowcase/>
      <ProjectsPortfolio/>
      <AboutSection/>
      <TestimonialsSection/>
      <ContactSection/>
      <Footer/>
      {/* <InteractiveElements/> */}
    </div>
  );
}
export default App;
