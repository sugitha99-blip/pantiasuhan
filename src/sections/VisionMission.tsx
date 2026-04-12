import { useEffect, useRef, useState } from 'react';
import { Target, GraduationCap, Wrench } from 'lucide-react';

const cards = [
  {
    icon: Target,
    title: 'Visi',
    content: 'Menolong anak-anak Yatim-Piatu dan anak terlantar supaya mempunyai masa depan yang cerah seperti anak lainnya.',
    rotation: 'rotate-1',
    delay: 0,
  },
  {
    icon: GraduationCap,
    title: 'Misi 1',
    content: 'Menyekolahkan sebanyak mungkin anak-anak yatim dan piatu serta anak terlantar dari keluarga miskin sampai ke perguruan tinggi.',
    rotation: '-rotate-1',
    delay: 0.2,
  },
  {
    icon: Wrench,
    title: 'Misi 2',
    content: 'Memberi pelatihan keterampilan untuk anak yatim-piatu dan anak terlantar dari keluarga miskin yang tidak mau melanjutkan sekolahnya agar mereka mandiri.',
    rotation: 'rotate-1',
    delay: 0.4,
  },
];

export default function VisionMission() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="vision"
      ref={sectionRef}
      className="relative w-full py-20 lg:py-32 overflow-hidden"
    >
      {/* Background watermark */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
        <div className="w-[600px] h-[600px] rounded-full border-[40px] border-orange-500 animate-rotate-slow" />
      </div>
      
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-orange-50/30 to-transparent" />

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-12 xl:px-20">
        {/* Header */}
        <div className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 text-orange-600 text-sm font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-orange-500" />
            Arah Kami
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-gray-900 mb-4">
            Visi <span className="text-orange-500">&</span> Misi
          </h2>
          <p className="text-gray-600">
            Komitmen kami dalam memberikan yang terbaik untuk anak-anak yang diamanahkan kepada kami.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`relative transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
              style={{ transitionDelay: `${card.delay}s` }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div
                className={`relative bg-white rounded-3xl p-8 shadow-soft transition-all duration-500 ${card.rotation} ${
                  hoveredIndex === index
                    ? 'rotate-0 -translate-y-3 shadow-xl'
                    : hoveredIndex !== null
                    ? 'opacity-70'
                    : ''
                }`}
              >
                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center mb-6 shadow-lg">
                  <card.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="font-serif text-2xl text-gray-900 mb-4">{card.title}</h3>
                <p className="text-gray-600 leading-relaxed">{card.content}</p>

                {/* Decorative corner */}
                <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-orange-200 rounded-tr-lg" />
                <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-orange-200 rounded-bl-lg" />
              </div>

              {/* Shadow effect */}
              <div
                className={`absolute -bottom-2 left-4 right-4 h-4 bg-orange-500/10 rounded-full blur-xl transition-all duration-500 ${
                  hoveredIndex === index ? 'opacity-100 scale-110' : 'opacity-50'
                }`}
              />
            </div>
          ))}
        </div>

        {/* Bottom quote */}
        <div className={`mt-16 text-center transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-block bg-white rounded-2xl shadow-soft px-8 py-6">
            <p className="text-gray-600 italic">
              &ldquo;Setiap anak berhak mendapatkan masa depan yang cerah, 
              <span className="text-orange-500"> regardless of their past.</span>&rdquo;
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
