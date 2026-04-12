import { useEffect, useRef, useState } from 'react';
import { Users, Heart, Calendar, MapPin } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

interface Child {
  id: number;
  name: string;
  class: string;
  birthPlace: string;
  birthDate: string;
  status: string;
  image: string;
}

const children: Child[] = [
  {
    id: 1,
    name: 'Jeni Septianti',
    class: 'VII',
    birthPlace: 'Banang',
    birthDate: '13 September 2011',
    status: 'Yatim Piatu',
    image: '/images/children/jeni.jpg',
  },
  {
    id: 2,
    name: 'Jusi Sepia',
    class: 'VII',
    birthPlace: 'Bangsal Behe',
    birthDate: '1 Agustus 2011',
    status: 'Yatim Piatu',
    image: '/images/children/jusi.jpg',
  },
  {
    id: 3,
    name: 'Sandi',
    class: 'VII',
    birthPlace: 'Merada',
    birthDate: '4 Oktober 2009',
    status: 'Broken Home',
    image: '/images/children/sandi.jpg',
  },
  {
    id: 4,
    name: 'Seselia',
    class: 'XI',
    birthPlace: 'Temiang Sawi',
    birthDate: '26 Juni 2011',
    status: 'Yatim',
    image: '/images/children/seselia.jpg',
  },
  {
    id: 5,
    name: 'Melati',
    class: 'VII',
    birthPlace: 'Merada',
    birthDate: '1 Mei 2009',
    status: 'Yatim',
    image: '/images/children/melati.jpg',
  },
  {
    id: 6,
    name: 'Yoel Richard A.N',
    class: 'VII',
    birthPlace: 'Bengkayang',
    birthDate: '3 September 2010',
    status: 'Dari Keluarga Miskin',
    image: '/images/children/yoel.jpg',
  },
  {
    id: 7,
    name: 'Akwilani',
    class: 'VII',
    birthPlace: 'Bareh',
    birthDate: '11 Mei 2009',
    status: 'Dari Keluarga Miskin',
    image: '/images/children/akwilani.jpg',
  },
  {
    id: 8,
    name: 'Krisna',
    class: 'X',
    birthPlace: 'Padang Bengawan',
    birthDate: '10 Maret 2007',
    status: 'Dari Keluarga Miskin',
    image: '/images/children/krisna.jpg',
  },
  {
    id: 9,
    name: 'Martius',
    class: 'X',
    birthPlace: 'Terap',
    birthDate: '11 April 2009',
    status: 'Yatim',
    image: '/images/children/martius.jpg',
  },
  {
    id: 10,
    name: 'Vila Delvia Stefani',
    class: 'X',
    birthPlace: 'Sekais',
    birthDate: '17 Juli 2008',
    status: 'Dari Keluarga Miskin',
    image: '/images/children/vila.jpg',
  },
  {
    id: 11,
    name: 'Manda',
    class: 'X',
    birthPlace: 'Semunti',
    birthDate: '27 September 2007',
    status: 'Yatim',
    image: '/images/children/manda.jpg',
  },
  {
    id: 12,
    name: 'Fina Amelia',
    class: 'VIII',
    birthPlace: 'SP 7 Kendawangan',
    birthDate: '8 Desember 2008',
    status: 'Dari Keluarga Miskin',
    image: '/images/children/fina.jpg',
  },
  {
    id: 13,
    name: 'Wiwit',
    class: 'VIII',
    birthPlace: 'Sekiok',
    birthDate: '5 Mei 2005',
    status: 'Dari Keluarga Miskin',
    image: '/images/children/wiwit.jpg',
  },
];

export default function Children() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [selectedChild, setSelectedChild] = useState<Child | null>(null);

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
      id="children"
      ref={sectionRef}
      className="relative w-full py-20 lg:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-orange-50/30 via-transparent to-orange-50/30" />

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-12 xl:px-20">
        {/* Header */}
        <div className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 text-orange-600 text-sm font-medium mb-6">
            <Users className="w-4 h-4" />
            <span>Bunga-Bunga Kasih</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-gray-900 mb-4">
            Anak-Anak <span className="text-orange-500">Kami</span>
          </h2>
          <p className="text-gray-600">
            Mereka adalah buah hati yang kami kasihi. Setiap satu dari mereka memiliki 
            impian dan harapan untuk masa depan yang lebih baik.
          </p>
        </div>

        {/* Children Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 lg:gap-6">
          {children.map((child, index) => (
            <div
              key={child.id}
              className={`group cursor-pointer transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
              style={{ transitionDelay: `${index * 0.05}s` }}
              onClick={() => setSelectedChild(child)}
            >
              <div className="relative bg-white rounded-2xl overflow-hidden shadow-soft hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                {/* Image */}
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img
                    src={child.image}
                    alt={child.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Shine effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  </div>

                  {/* Status badge */}
                  <div className="absolute top-3 left-3">
                    <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-white/90 text-xs font-medium text-gray-700">
                      <Heart className="w-3 h-3 text-orange-500" />
                      {child.status}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4">
                  <h3 className="font-medium text-gray-900 truncate group-hover:text-orange-500 transition-colors">
                    {child.name}
                  </h3>
                  <p className="text-sm text-gray-500">Kelas {child.class}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div className={`mt-12 text-center transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-gray-500 text-sm">
            Klik pada foto untuk melihat detail lengkap
          </p>
        </div>
      </div>

      {/* Detail Dialog */}
      <Dialog open={!!selectedChild} onOpenChange={() => setSelectedChild(null)}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="font-serif text-2xl">{selectedChild?.name}</DialogTitle>
          </DialogHeader>
          {selectedChild && (
            <div className="space-y-4">
              <div className="aspect-[3/4] rounded-xl overflow-hidden">
                <img
                  src={selectedChild.image}
                  alt={selectedChild.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center">
                    <Heart className="w-5 h-5 text-orange-500" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Status</p>
                    <p className="font-medium text-gray-900">{selectedChild.status}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center">
                    <Users className="w-5 h-5 text-orange-500" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Kelas</p>
                    <p className="font-medium text-gray-900">{selectedChild.class}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-orange-500" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Tempat Lahir</p>
                    <p className="font-medium text-gray-900">{selectedChild.birthPlace}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-orange-500" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Tanggal Lahir</p>
                    <p className="font-medium text-gray-900">{selectedChild.birthDate}</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
