import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Modpacks from './components/Modpacks';
import ServerStatus from './components/ServerStatus';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-dark-900 text-gray-200">
      <Navbar />
      <Hero />
      <Features />
      <Pricing />
      <Modpacks />
      <ServerStatus />
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  );
}
