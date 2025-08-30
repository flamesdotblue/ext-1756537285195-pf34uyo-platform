import HeaderNav from './components/HeaderNav';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white selection:bg-red-500 selection:text-white">
      <HeaderNav />
      <main>
        <Hero />
        <Skills />
      </main>
      <Footer />
    </div>
  );
}
