import { Heart, MapPin, Phone, Mail, Facebook, Instagram, ExternalLink } from 'lucide-react';

const quickLinks = [
  { name: 'Beranda', href: '#hero' },
  { name: 'Tentang Kami', href: '#about' },
  { name: 'Visi & Misi', href: '#vision' },
  { name: 'Anak-Anak', href: '#children' },
  { name: 'Kebutuhan', href: '#needs' },
  { name: 'Donasi', href: '#donate' },
];

const contacts = [
  { icon: Phone, label: 'Markus Amid', value: '0821-2497-7549' },
  { icon: Phone, label: 'Sonjan', value: '0821-5393-7346' },
];

export default function Footer() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative w-full bg-gray-900 text-white overflow-hidden">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 via-orange-400 to-orange-500" />

      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-serif text-xl">Kasih Bonso</h3>
                <p className="text-xs text-gray-400">Panti Asuhan</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Yayasan El-Elyon Dayak Borneo yang berkomitmen memberikan 
              masa depan cerah bagi anak yatim dan dhuafa di Ngabang, 
              Kalimantan Barat.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-orange-500 flex items-center justify-center transition-all hover:scale-110"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-orange-500 flex items-center justify-center transition-all hover:scale-110"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/6282124977549"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-green-500 flex items-center justify-center transition-all hover:scale-110"
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg mb-6">Tautan Cepat</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="text-gray-400 hover:text-orange-400 text-sm transition-colors inline-flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-600 group-hover:bg-orange-400 transition-colors" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-lg mb-6">Kontak Kami</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-gray-400 text-sm">
                    Jl. Ngedang, Desa Tebedak
                  </p>
                  <p className="text-gray-400 text-sm">
                    Ngabang, Kab. Landak
                  </p>
                  <p className="text-gray-400 text-sm">
                    Kalimantan Barat 79357
                  </p>
                </div>
              </div>
              {contacts.map((contact, index) => (
                <div key={index} className="flex items-center gap-3">
                  <contact.icon className="w-5 h-5 text-orange-500 flex-shrink-0" />
                  <div>
                    <p className="text-gray-400 text-sm">{contact.value}</p>
                    <p className="text-gray-500 text-xs">{contact.label}</p>
                  </div>
                </div>
              ))}
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-orange-500 flex-shrink-0" />
                <p className="text-gray-400 text-sm">kasihbonso@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Bank Info */}
          <div>
            <h4 className="font-serif text-lg mb-6">Rekening Donasi</h4>
            <div className="bg-white/5 rounded-xl p-4 border border-white/10">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center">
                  <span className="text-orange-600 font-bold text-xs">BRI</span>
                </div>
                <div>
                  <p className="text-sm font-medium">Bank BRI</p>
                  <p className="text-xs text-gray-400">a.n. Panti Asuhan Kasih Bonso</p>
                </div>
              </div>
              <p className="font-mono text-lg text-orange-400 tracking-wider">
                3473-01-036591-53-4
              </p>
            </div>
            <p className="text-gray-500 text-xs mt-4">
              SK Dinsosnakertrans Kab. Landak No. 466.314689/Dinsosnakertran-B/2015
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm text-center sm:text-left">
              © {new Date().getFullYear()} Panti Asuhan Kasih Bonso. 
              Yayasan El-Elyon Dayak Borneo.
            </p>
            <p className="text-gray-500 text-sm flex items-center gap-1">
              Dibuat dengan <Heart className="w-4 h-4 text-orange-500 fill-orange-500" /> untuk anak-anak
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
