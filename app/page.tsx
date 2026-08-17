import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WhyLunara from "./components/WhyLunara";
import Novelty from "./components/Novelty";
import HowItWorks from "./components/HowItWorks";
import Gallery from "./components/Gallery";
import SizesComparison from "./components/SizesComparison";
import Testimonials from "./components/Testimonials";
import RiskElimination from "./components/RiskElimination";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";

const CONFIGURATOR_URL = "https://app.lunara-maps.com?utm_source=landing&utm_medium=web&utm_campaign=lunara";

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
        <SizesComparison />
        <Testimonials />
        <RiskElimination />
        <FinalCTA configuratorUrl={CONFIGURATOR_URL} />
      </main>
      <Footer />
    </>
  );
}
