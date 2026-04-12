import { useEffect, useRef, useState } from 'react';
import { Copy, Check, Heart, Phone, MessageCircle, Building2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

export default function Donation() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [copied, setCopied] = useState(false);

  const accountNumber = '3473-01-036591-53-4';
  const accountName = 'Panti Asuhan Kasih Bonso';

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

  const copyToClipboard = () => {
    navigator.clipboard.writeText(accountNumber.replace(/-/g, ''));
    setCopied(true);
    toast.success('Nomor rekening berhasil disalin!');
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <section
      id="donate"
      ref={sectionRef}
      className="relative w-full py-20 lg:py-32 overflow-hidden"
    >
      {/* Background with blur effect */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/images/hero-children.jpg)' }}
        />
        <div className="absolute inset-0 bg-orange-900/80 backdrop-blur-sm" />
      </div>

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-12 xl:px-20">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white text-sm font-medium mb-6">
              <Heart className="w-4 h-4" />
              <span>Saluran Berkah</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white mb-4">
              Jadilah Bagian dari <span className="text-orange-300">Cerita Mereka</span>
            </h2>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              Setiap rupiah yang Anda berikan adalah investasi dalam mimpi seorang anak. 
              Bersama-sama, kita bisa memberikan masa depan yang lebih cerah.
            </p>
          </div>

          {/* Bank Card */}
          <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="relative bg-white/10 backdrop-blur-md rounded-3xl p-8 lg:p-12 border border-white/20 shadow-2xl">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/20 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-orange-400/20 rounded-full blur-3xl" />

              <div className="relative">
                {/* Bank Logo */}
                <div className="flex items-center justify-center mb-8">
                  <div className="bg-white rounded-2xl p-4 shadow-lg">
                    <Building2 className="w-12 h-12 text-orange-600" />
                  </div>
                </div>

                <div className="text-center mb-8">
                  <p className="text-white/60 text-sm mb-2">Bank BRI</p>
                  <p className="text-white text-lg">a.n. {accountName}</p>
                </div>

                {/* Account Number */}
                <div className="bg-white/10 rounded-2xl p-6 mb-8">
                  <p className="text-white/60 text-sm mb-2 text-center">Nomor Rekening</p>
                  <div className="flex items-center justify-center gap-4">
                    <p className="font-mono text-2xl sm:text-3xl lg:text-4xl text-white tracking-wider">
                      {accountNumber}
                    </p>
                    <Button
                      onClick={copyToClipboard}
                      variant="ghost"
                      size="icon"
                      className="rounded-full bg-white/10 hover:bg-white/20 text-white"
                    >
                      {copied ? (
                        <Check className="w-5 h-5 text-green-400" />
                      ) : (
                        <Copy className="w-5 h-5" />
                      )}
                    </Button>
                  </div>
                </div>

                {/* Contact for confirmation */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <a
                    href="https://wa.me/6282124977549"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 bg-white/10 hover:bg-white/20 rounded-xl p-4 transition-all group"
                  >
                    <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <MessageCircle className="w-6 h-6 text-green-400" />
                    </div>
                    <div>
                      <p className="text-white/60 text-sm">WhatsApp</p>
                      <p className="text-white font-medium">0821-2497-7549</p>
                      <p className="text-white/40 text-xs">Markus Amid</p>
                    </div>
                  </a>
                  <a
                    href="tel:+6282153937346"
                    className="flex items-center gap-3 bg-white/10 hover:bg-white/20 rounded-xl p-4 transition-all group"
                  >
                    <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Phone className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <p className="text-white/60 text-sm">Telepon</p>
                      <p className="text-white font-medium">0821-5393-7346</p>
                      <p className="text-white/40 text-xs">Sonjan</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Additional info */}
          <div className={`mt-12 grid sm:grid-cols-3 gap-6 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-orange-300" />
              </div>
              <h3 className="text-white font-medium mb-2">Transparan</h3>
              <p className="text-white/60 text-sm">Setiap donasi tercatat dan digunakan sesuai peruntukannya</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-4">
                <Building2 className="w-8 h-8 text-orange-300" />
              </div>
              <h3 className="text-white font-medium mb-2">Terverifikasi</h3>
              <p className="text-white/60 text-sm">Panti asuhan resmi dengan SK Dinas Sosial</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-orange-300" />
              </div>
              <h3 className="text-white font-medium mb-2">Konfirmasi</h3>
              <p className="text-white/60 text-sm">Hubungi kami untuk konfirmasi donasi Anda</p>
            </div>
          </div>

          {/* Legal info */}
          <div className={`mt-12 text-center transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <p className="text-white/40 text-sm">
              SK Dinsosnakertrans Kab. Landak No. 466.314689/Dinsosnakertran-B/2015
            </p>
            <p className="text-white/40 text-sm">
              SK Dinsos Prov. Kalbar No. 466.314689/DS-RS/V/2015
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
