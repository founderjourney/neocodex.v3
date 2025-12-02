import Hero from './components/Hero';
import Problem from './components/Problem';
import Solution from './components/Solution';
import CodigoExpress from './components/CodigoExpress';
import LecturaIkigai from './components/LecturaIkigai';
import OrientacionProfesional from './components/OrientacionProfesional';
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
      <CodigoExpress />
      <LecturaIkigai />
      <OrientacionProfesional />
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
