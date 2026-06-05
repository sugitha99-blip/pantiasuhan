import { useState, useEffect } from 'react';
import { Menu, X, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

import logo from '../../../public/images/KB.jpg';

const navLinks = [
  { name: 'Beranda', href: '#hero' },
  { name: 'Tentang', href: '#about' },
  { name: 'Visi & Misi', href: '#vision' },
  { name: 'Anak-Anak', href: '#children' },
  { name: 'Kebutuhan', href: '#needs' },
  { name: 'Donasi', href: '#donate' },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-white/90 backdrop-blur-md shadow-soft py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#hero');
              }}
              className="flex items-center gap-2 group"
            >
              <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                {/* <Heart className="w-5 h-5 text-white" /> */}
                <img src={logo} alt="Kasih Bonso Logo" className="w-5 h-5" />
              </div>
              <div className={`hidden sm:block transition-colors ${isScrolled ? 'text-gray-800' : 'text-gray-800'}`}>
                <p className="font-serif text-lg leading-none">Kasih Bonso</p>
                <p className="text-xs text-muted-foreground">Panti Asuhan</p>
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  className={`text-sm font-medium transition-all hover:text-orange-500 relative group ${
                    isScrolled ? 'text-gray-700' : 'text-gray-700'
                  }`}
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all group-hover:w-full" />
                </a>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Button
                onClick={() => scrollToSection('#donate')}
                className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-6 shadow-glow hover:shadow-lg transition-all hover:-translate-y-0.5"
              >
                <Heart className="w-4 h-4 mr-2" />
                Jadi Donatur
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-gray-700" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div
          className="absolute inset-0 bg-black/20 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />
        <div
          className={`absolute top-20 left-4 right-4 bg-white rounded-2xl shadow-xl p-6 transition-all duration-500 ${
            isMobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'
          }`}
        >
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
                className="text-gray-700 hover:text-orange-500 font-medium py-2 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <Button
              onClick={() => scrollToSection('#donate')}
              className="bg-orange-500 hover:bg-orange-600 text-white rounded-full mt-2"
            >
              <Heart className="w-4 h-4 mr-2" />
              Jadi Donatur
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
