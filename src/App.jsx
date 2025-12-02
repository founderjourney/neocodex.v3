import Hero from './components/Hero';
import Problem from './components/Problem';
import Solution from './components/Solution';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Offer from './components/Offer';
import Guarantee from './components/Guarantee';
import FAQ from './components/FAQ';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Hero />
      <Problem />
      <Solution />
      <Services />
      <Testimonials />
      <Offer />
      <Guarantee />
      <FAQ />
      <Pricing />
      <Footer />
    </div>
  );
}

export default App;
