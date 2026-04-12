import { useEffect, useRef, useState } from 'react';
import { BookOpen, Users, Calendar, Heart } from 'lucide-react';

interface CounterProps {
  end: number;
  suffix?: string;
  duration?: number;
}

function Counter({ end, suffix = '', duration = 2000 }: CounterProps) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [isVisible, end, duration]);

  return (
    <span ref={counterRef} className="counter">
      {count}{suffix}
    </span>
  );
}

const stats = [
  { icon: Users, value: 15, suffix: '+', label: 'Anak Ditampung' },
  { icon: Calendar, value: 11, suffix: '', label: 'Tahun Berdiri' },
  { icon: BookOpen, value: 0, suffix: '', label: 'Donatur Tetap' },
  { icon: Heart, value: 100, suffix: '%', label: 'Dari Hati' },
];

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

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
      id="about"
      ref={sectionRef}
      className="relative w-full py-20 lg:py-32 overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-orange-50 to-transparent opacity-50" />
      
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-12 xl:px-20">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Image Side */}
          <div className={`flex-1 relative transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="relative">
              {/* Main image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/images/about-group.jpg"
                  alt="Keluarga Panti Asuhan Kasih Bonso"
                  className="w-full aspect-[4/3] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-orange-100 rounded-full -z-10" />
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-orange-200 rounded-full -z-10" />
              
              {/* Quote card */}
              <div className="absolute -bottom-8 -right-4 lg:right-8 bg-white rounded-2xl shadow-xl p-6 max-w-xs">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
                    <Heart className="w-5 h-5 text-orange-500" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 italic">
                      "Kami hanya mengandalkan doa. Sampai sekarang belum ada donatur tetap."
                    </p>
                    <p className="text-xs text-orange-500 mt-2 font-medium">- Pengurus Panti</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className={`flex-1 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 text-orange-600 text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-orange-500" />
              Tentang Kami
            </div>
            
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-gray-900 mb-6">
              Cerita <span className="text-orange-500">Kami</span>
            </h2>
            
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Berawal dari kerinduan untuk membantu anak-anak di pedalaman yang tidak bisa 
                sekolah karena kemiskinan atau kehilangan orang tua. Kami sering menemui 
                keluarga-keluarga yang memohon agar anak mereka bisa dibawa dan disekolahkan 
                ke kota.
              </p>
              <p>
                Hampir setiap tahun kami menampung mereka dalam jumlah yang banyak di rumah kami. 
                Ada yang sampai tamat SMA, bahkan ada yang sampai sarjana kami sekolahkan. 
                Seiring waktu, rumah kami tidak bisa menampung banyak anak.
              </p>
              <p>
                Tahun 2014, dengan iman dan keberanian, kami memulai perjalanan ini dengan 
                meminjam bekas asrama sekolah. Panti Asuhan Kasih Bonso lahir dengan arti 
                &ldquo;Panti asuhan yang mengasihi anak-anak sebagaimana seorang tua mengasihi 
                anaknya yang bungsu.&rdquo;
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-10">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center p-4 rounded-2xl bg-white shadow-soft hover:shadow-lg transition-all hover:-translate-y-1"
                >
                  <stat.icon className="w-6 h-6 text-orange-500 mx-auto mb-2" />
                  <p className="font-serif text-2xl sm:text-3xl text-gray-900">
                    <Counter end={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="text-xs text-gray-500">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
