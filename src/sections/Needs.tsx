import { useEffect, useRef, useState } from 'react';
import { Droplets, Home, Utensils, BookOpen, Quote } from 'lucide-react';

const needs = [
  {
    icon: Utensils,
    title: 'Kebutuhan Makan & Minum',
    description: 'Kami membutuhkan bantuan untuk kebutuhan makan dan minum sehari-hari bagi 15 anak yang kami tampung.',
    urgent: true,
  },
  {
    icon: BookOpen,
    title: 'Uang Sekolah',
    description: 'Masih banyak anak yang belum mendapat donatur untuk biaya sekolahnya. Setiap tahun kami kesulitan memenuhi kebutuhan ini.',
    urgent: true,
  },
  {
    icon: Droplets,
    title: 'Air Bersih',
    description: 'Sangat mendesak! Air masak harus diangkut dari sungai dengan jarak sangat jauh. Pengeboran yang pernah dilakukan tidak bertahan lama.',
    urgent: true,
  },
  {
    icon: Home,
    title: 'Penambahan Kamar',
    description: 'Kamar asrama sekarang masih sangat kurang. Kami ingin bisa menampung lebih banyak anak yang membutuhkan pertolongan.',
    urgent: false,
  },
];

export default function Needs() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="needs"
      ref={sectionRef}
      className="relative w-full py-20 lg:py-32 overflow-hidden"
    >
      {/* Diagonal background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700" />
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <circle cx="1" cy="1" r="0.5" fill="white" />
            </pattern>
            <rect width="100" height="100" fill="url(#grid)" />
          </svg>
        </div>
      </div>

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-12 xl:px-20">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          {/* Left side - Content */}
          <div className={`flex-1 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white text-sm font-medium mb-6">
              <Quote className="w-4 h-4" />
              <span>Panggilan Hati</span>
            </div>
            
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white mb-6">
              Pokok <span className="text-orange-200">Doa</span> Kami
            </h2>
            
            <p className="text-white/80 text-lg mb-8 leading-relaxed">
              Dalam memberi makan, biaya sekolah, serta kebutuhan pribadi anak-anak, 
              kami hanya mengandalkan doa. Sampai sekarang belum ada donatur tetap.
            </p>

            {/* Quote card */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <Quote className="w-8 h-8 text-orange-200 mb-4" />
              <p className="text-white text-lg italic leading-relaxed">
                &ldquo;Makan hari-hari selama ini bergantung pada uluran tangan masyarakat 
                kota Ngabang yang datang membawa simbako saat mereka ada momen syukuran 
                atau kegiatan sosial.&rdquo;
              </p>
              <div className="mt-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <span className="text-white font-medium">P</span>
                </div>
                <div>
                  <p className="text-white font-medium">Pengurus Panti</p>
                  <p className="text-white/60 text-sm">Kasih Bonso</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Needs cards */}
          <div className="flex-1">
            <div className="grid gap-4">
              {needs.map((need, index) => (
                <div
                  key={index}
                  className={`group bg-white rounded-2xl p-6 shadow-xl transition-all duration-700 hover:-translate-y-1 hover:shadow-2xl ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                  style={{ transitionDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 ${need.urgent ? 'bg-red-100' : 'bg-orange-100'}`}>
                      <need.icon className={`w-7 h-7 ${need.urgent ? 'text-red-500' : 'text-orange-500'}`} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="font-serif text-xl text-gray-900">{need.title}</h3>
                        {need.urgent && (
                          <span className="px-2 py-0.5 rounded-full bg-red-100 text-red-600 text-xs font-medium">
                            Mendesak
                          </span>
                        )}
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed">{need.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className={`mt-16 text-center transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <a
            href="#donate"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#donate')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-orange-600 rounded-full font-medium hover:bg-orange-50 transition-all hover:shadow-xl hover:-translate-y-1"
          >
            <span>Ingin Membantu?</span>
            <span className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center">
              <span className="text-lg">→</span>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
