import { useEffect, useRef } from 'react';
import { Heart, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current || !imageRef.current || !textRef.current) return;
      
      const scrollY = window.scrollY;
      const heroHeight = heroRef.current.offsetHeight;
      
      if (scrollY < heroHeight) {
        const parallaxValue = scrollY * 0.3;
        imageRef.current.style.transform = `translateY(${parallaxValue}px)`;
        textRef.current.style.opacity = `${1 - scrollY / (heroHeight * 0.5)}`;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden grain-overlay"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 pattern-bg opacity-50" />
      
      {/* Decorative rotating shapes */}
      <div className="absolute top-20 right-20 w-64 h-64 opacity-10 animate-rotate-slow">
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="100" cy="100" r="80" stroke="#ff4c11" strokeWidth="1" strokeDasharray="10 10" />
          <circle cx="100" cy="100" r="60" stroke="#ff4c11" strokeWidth="1" />
          <circle cx="100" cy="100" r="40" stroke="#ff4c11" strokeWidth="1" strokeDasharray="5 5" />
        </svg>
      </div>
      
      <div className="absolute bottom-20 left-10 w-48 h-48 opacity-10 animate-rotate-slow" style={{ animationDirection: 'reverse' }}>
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M100 20L180 100L100 180L20 100L100 20Z" stroke="#ff4c11" strokeWidth="1" />
          <path d="M100 50L150 100L100 150L50 100L100 50Z" stroke="#ff4c11" strokeWidth="1" strokeDasharray="5 5" />
        </svg>
      </div>

      {/* Floating decorative elements */}
      <div className="absolute top-1/4 left-1/4 w-4 h-4 rounded-full bg-orange-400/30 animate-float" />
      <div className="absolute top-1/3 right-1/3 w-3 h-3 rounded-full bg-orange-500/20 animate-float-delayed" />
      <div className="absolute bottom-1/3 left-1/3 w-5 h-5 rounded-full bg-orange-300/25 animate-float" style={{ animationDelay: '1s' }} />

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-12 xl:px-20 py-20">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Text Content */}
          <div ref={textRef} className="flex-1 text-center lg:text-left order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 text-orange-600 text-sm font-medium mb-6 animate-slide-up">
              <Heart className="w-4 h-4" />
              <span>Yayasan El-Elyon Dayak Borneo</span>
            </div>
            
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-gray-900 leading-tight mb-6 animate-slide-up" style={{ animationDelay: '0.1s' }}>
              Panti Asuhan
              <span className="block text-orange-500">Kasih Bonso</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-600 mb-4 max-w-xl mx-auto lg:mx-0 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              Mengasihi Anak Yatim & Dhuafa Seperti Mengasihi Si Bungsu
            </p>
            
            <p className="text-gray-500 mb-8 max-w-lg mx-auto lg:mx-0 animate-slide-up" style={{ animationDelay: '0.3s' }}>
              Sejak 2014, kami berkomitmen memberikan masa depan yang cerah bagi anak-anak 
              yang tidak beruntung di Ngabang, Kalimantan Barat.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <Button
                onClick={() => scrollToSection('#donate')}
                size="lg"
                className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-8 shadow-glow hover:shadow-lg transition-all hover:-translate-y-1"
              >
                <Heart className="w-5 h-5 mr-2" />
                Jadi Donatur
              </Button>
              <Button
                onClick={() => scrollToSection('#about')}
                size="lg"
                variant="outline"
                className="rounded-full px-8 border-2 border-gray-300 hover:border-orange-500 hover:text-orange-500 transition-all"
              >
                Pelajari Lebih Lanjut
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-8 mt-12 animate-slide-up" style={{ animationDelay: '0.5s' }}>
              <div className="text-center">
                <p className="font-serif text-3xl sm:text-4xl text-orange-500">15+</p>
                <p className="text-sm text-gray-500">Anak Ditampung</p>
              </div>
              <div className="text-center">
                <p className="font-serif text-3xl sm:text-4xl text-orange-500">11</p>
                <p className="text-sm text-gray-500">Tahun Berdiri</p>
              </div>
              <div className="text-center">
                <p className="font-serif text-3xl sm:text-4xl text-orange-500">2014</p>
                <p className="text-sm text-gray-500">Tahun Didirikan</p>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div ref={imageRef} className="flex-1 order-1 lg:order-2">
            <div className="relative w-full max-w-md lg:max-w-lg mx-auto animate-scale-in">
              {/* Decorative ring */}
              <div className="absolute -inset-4 rounded-full border-2 border-orange-200 animate-pulse-soft" />
              <div className="absolute -inset-8 rounded-full border border-orange-100 animate-pulse-soft" style={{ animationDelay: '1s' }} />
              
              {/* Main image container */}
              <div className="relative aspect-square rounded-full overflow-hidden shadow-2xl image-shine">
                <img
                  src="/images/hero-children.jpg"
                  alt="Anak-anak Panti Asuhan Kasih Bonso"
                  className="w-full h-full object-cover"
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-orange-500/20 to-transparent" />
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-xl p-4 animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center">
                    <Heart className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <p className="font-serif text-xl text-gray-900">Kasih Bonso</p>
                    <p className="text-xs text-gray-500">Rumah Kedua Kami</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <button
          onClick={() => scrollToSection('#about')}
          className="p-2 rounded-full bg-white/80 hover:bg-white shadow-lg transition-all hover:scale-110"
        >
          <ChevronDown className="w-6 h-6 text-orange-500" />
        </button>
      </div>
    </section>
  );
}
