import { Toaster } from '@/components/ui/sonner';
import Navigation from '@/components/custom/Navigation';
import Hero from '@/sections/Hero';
import About from '@/sections/About';
import VisionMission from '@/sections/VisionMission';
import Children from '@/sections/Children';
import Needs from '@/sections/Needs';
import Donation from '@/sections/Donation';
import Footer from '@/sections/Footer';

function App() {
  return (
    <div className="min-h-screen bg-beige">
      <Navigation />
      <main>
        <Hero />
        <About />
        <VisionMission />
        <Children />
        <Needs />
        <Donation />
      </main>
      <Footer />
      <Toaster position="top-center" richColors />
    </div>
  );
}

export default App;
