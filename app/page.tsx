import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WhyLunara from "./components/WhyLunara";
import Novelty from "./components/Novelty";
import HowItWorks from "./components/HowItWorks";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import RiskElimination from "./components/RiskElimination";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";

const CONFIGURATOR_URL = "#configurador";

export default function Home() {
  return (
    <>
      <Navbar configuratorUrl={CONFIGURATOR_URL} />
      <main>
        <Hero configuratorUrl={CONFIGURATOR_URL} />
        <WhyLunara />
        <Novelty />
        <HowItWorks configuratorUrl={CONFIGURATOR_URL} />
        <Gallery />
        <Testimonials />
        <RiskElimination />
        <FinalCTA configuratorUrl={CONFIGURATOR_URL} />
      </main>
      <Footer />
    </>
  );
}
