import { useEffect, useRef, useState } from 'react';
import { BookOpen, Calendar, ArrowRight, User, X } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  image: string;
  category: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'Purnawiyata dan Kelulusan Kelas IX SMP Arastamar Ngabang',
    excerpt: 'Selamat kepada anak-anak kami yang telah menyelesaikan pendidikan di SMP Arastamar Ngabang. Semoga sukses di jenjang berikutnya!',
    content: `Alhamdulillah, tahun ini kami kembali menyaksikan momen bersejarah bagi anak-anak kami. Sebanyak 4 orang anak dari Panti Asuhan Kasih Bonso telah menyelesaikan pendidikan di SMP Arastamar Ngabang dan dinyatakan lulus dengan hasil yang memuaskan.

Momen purnawiyata ini menjadi bukti bahwa dengan dukungan dan doa dari berbagai pihak, anak-anak kami dapat menyelesaikan pendidikan mereka dengan baik. Kami berharap mereka dapat melanjutkan ke jenjang pendidikan yang lebih tinggi dan menjadi generasi yang bermanfaat.

Anak-anak yang lulus:
• Akwilani
• Martius
• Seselia P. Yulianti
• Yoel Richard

Semoga ilmu yang didapat menjadi berkah dan bermanfaat untuk kehidupan mereka kelak. Aamiin.`,
    date: '20 Juni 2026',
    author: 'Pengurus Panti',
    image: '/images/front.jpeg',
    category: 'Kelulusan',
  },
  {
    id: 2,
    title: 'Kegiatan OSIS Semester Ini',
    excerpt: 'Anak-anak aktif dalam berbagai kegiatan organisasi siswa di sekolah masing-masing.',
    content: `Anak-anak kami sangat aktif dalam kegiatan OSIS di sekolah mereka. Melalui organisasi ini, mereka belajar banyak hal penting seperti kepemimpinan, kerja sama tim, tanggung jawab, dan komunikasi.

Beberapa kegiatan yang telah dilakukan:
• Pelatihan kepemimpinan siswa
• Bakti sosial ke masyarakat
• Lomba antar sekolah
• Kegiatan rohani dan pembinaan karakter

Kami bangga melihat mereka tumbuh menjadi pribadi yang percaya diri dan peduli terhadap sesama.`,
    date: '15 Juni 2026',
    author: 'Pengurus Panti',
    image: '/images/children/melati.jpg',
    category: 'Kegiatan',
  },
  {
    id: 3,
    title: 'Prestasi Anak-Anak Kami',
    excerpt: 'Bangga dengan pencapaian Vina Amelia dan teman-teman dalam bidang akademik maupun non-akademik.',
    content: `Kami sangat bangga dengan prestasi yang diraih oleh anak-anak kami. Vina Amelia dan teman-teman telah menunjukkan dedikasi dan kerja keras dalam studi mereka.

Prestasi yang diraih semester ini:
• Peringkat kelas untuk beberapa mata pelajaran
• Aktif dalam lomba-lomba sekolah
• Penghargaan perilaku terbaik
• Kehadiran yang sangat baik

Setiap pencapaian kecil mereka adalah langkah besar menuju masa depan yang lebih baik. Terima kasih kepada semua donatur dan pendoa yang mendukung perjalanan mereka.`,
    date: '10 Juni 2026',
    author: 'Pengurus Panti',
    image: '/images/children/vina.jpg',
    category: 'Prestasi',
  },
];

export default function Blog() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

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
      id="blog"
      ref={sectionRef}
      className="relative w-full py-20 lg:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-orange-50/50 via-transparent to-orange-50/50" />

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-12 xl:px-20">
        {/* Header */}
        <div className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 text-orange-600 text-sm font-medium mb-6">
            <BookOpen className="w-4 h-4" />
            <span>Cerita & Kegiatan</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-gray-900 mb-4">
            Blog <span className="text-orange-500">Kami</span>
          </h2>
          <p className="text-gray-600">
            Kisah perjalanan, kegiatan, dan perkembangan anak-anak tercinta kami.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {blogPosts.map((post, index) => (
            <article
              key={post.id}
              className={`group bg-white rounded-3xl overflow-hidden shadow-soft hover:shadow-xl transition-all duration-500 hover:-translate-y-2 cursor-pointer ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
              style={{ transitionDelay: `${index * 0.15}s` }}
              onClick={() => setSelectedPost(post)}
            >
              {/* Image */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-orange-500 text-white text-xs font-medium">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    {post.author}
                  </span>
                </div>

                <h3 className="font-serif text-xl text-gray-900 mb-3 group-hover:text-orange-500 transition-colors line-clamp-2">
                  {post.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="flex items-center gap-2 text-orange-500 font-medium text-sm group-hover:gap-3 transition-all">
                  Baca Selengkapnya
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Detail Dialog */}
      <Dialog open={!!selectedPost} onOpenChange={() => setSelectedPost(null)}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          {selectedPost && (
            <>
              <DialogHeader>
                <DialogTitle className="font-serif text-2xl">{selectedPost.title}</DialogTitle>
              </DialogHeader>

              <div className="space-y-4">
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {selectedPost.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    {selectedPost.author}
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-orange-100 text-orange-600 text-xs">
                    {selectedPost.category}
                  </span>
                </div>

                <div className="rounded-2xl overflow-hidden">
                  <img
                    src={selectedPost.image}
                    alt={selectedPost.title}
                    className="w-full aspect-video object-cover"
                  />
                </div>

                <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                  {selectedPost.content}
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
