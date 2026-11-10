import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Cog } from 'lucide-react';
import ScrollToTop from './components/ui/ScrollToTop';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Research from './components/Research';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-bg flex flex-col">
        <Navbar />
        {/* Rotating wheels — site-wide background effect, sit above section backgrounds but never block clicks or text */}
        <div aria-hidden="true" className="fixed inset-0 overflow-hidden pointer-events-none z-20">
          <Cog
            className="animate-spin-slow absolute -right-24 -top-32 text-primary opacity-[0.12]"
            size={400}
            strokeWidth={0.7}
          />
          <Cog
            className="animate-spin-slow-reverse absolute -left-20 -bottom-10 text-primary-light opacity-[0.1]"
            size={220}
            strokeWidth={0.7}
          />
        </div>
        <main className="pt-16 flex-1">
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/research" element={<Research />} />
            <Route path="/certifications" element={<Certifications />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Hero />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
