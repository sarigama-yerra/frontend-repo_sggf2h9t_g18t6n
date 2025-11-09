import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import UserShowcase from './components/UserShowcase';
import Features from './components/Features';
import CTA from './components/CTA';

function App() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white font-inter">
      <Hero />
      <HowItWorks />
      <UserShowcase />
      <Features />
      <CTA />
      <footer className="border-t border-white/10 bg-[#0A0A0A] py-10 text-center text-xs text-white/50">
        © {new Date().getFullYear()} Reverie — A social cloud for concert lovers.
      </footer>
    </div>
  );
}

export default App;
