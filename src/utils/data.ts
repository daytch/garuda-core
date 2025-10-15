import visibilityDilemma from "../assets/images/visibility-dilemma.webp";
import engagementGap from "../assets/images/engagement-gap.webp";
import resultsInHibernation from "../assets/images/results-in-hibernation.webp";

const services = [
  {
    title: "Website & Company Profile",
    features: [
      "Desain elegan dan profesional",
      "Tampilan responsif di semua perangkat",
      "Optimasi SEO dan kecepatan maksimal",
    ],
  },
  {
    title: "Sistem Point of Sale (POS)",
    features: [
      "Transaksi cepat dan aman",
      "Manajemen stok serta laporan otomatis",
      "Cocok untuk bisnis retail dan UMKM",
    ],
  },
  {
    title: "ERP & Manajemen Inventori",
    features: [
      "Kelola data bisnis dari satu sistem",
      "Integrasi antardivisi yang efisien",
      "Monitoring stok dan keuangan real-time",
    ],
  },
  {
    title: "Aplikasi Mobile (Android/iOS)",
    features: [
      "Desain modern dan performa tinggi",
      "Bisa native atau hybrid sesuai kebutuhan",
      "Terintegrasi penuh dengan backend",
    ],
  },
  {
    title: "Custom API & Integrasi Sistem",
    features: [
      "Koneksikan aplikasi baru dengan sistem lama",
      "Middleware khusus sesuai kebutuhan bisnis",
      "Dokumentasi API yang mudah digunakan",
    ],
  },
  {
    title: "Cloud Deployment & Maintenance",
    features: [
      "Hosting aman dan cepat",
      "Backup otomatis dan monitoring rutin",
      "Layanan support berkelanjutan",
    ],
  },
];

const solutions = [
  {
    title: "Tantangan Digitalisasi",
    painPoint:
      "Banyak bisnis sadar pentingnya teknologi, tapi bingung harus mulai dari mana.",
    agitatepainPoint:
      "Transformasi digital bisa terasa rumit — mulai dari pemilihan teknologi, desain sistem, hingga membangun tim pengembang.",
    solution:
      "Garuda Core hadir untuk bantu kamu menjembatani ide menjadi solusi digital nyata, dengan pendekatan agile, efisien, dan terukur.",
    img: visibilityDilemma,
  },
  {
    title: "Gap Antara Ide & Eksekusi",
    painPoint: "Punya ide keren tapi belum tahu cara mewujudkannya?",
    agitatepainPoint:
      "Banyak proyek berhenti di tahap perencanaan karena kurang arah teknis atau resource yang tepat.",
    solution:
      "Tim Garuda Core siap bantu dari tahap perencanaan, desain, hingga pengembangan. Kamu fokus pada visi — kami yang urus teknologinya.",
    img: engagementGap,
  },
  {
    title: "Proyek Tidak Jalan? Saatnya Bangun Lagi!",
    painPoint: "Banyak proyek software terhenti di tengah jalan.",
    agitatepainPoint:
      "Sistem yang tidak stabil, performa lambat, atau kode sulit di-maintain bikin proyek susah berkembang.",
    solution:
      "Kami bantu audit, refactor, atau lanjutkan development agar sistemmu bisa jalan kembali — lebih stabil, efisien, dan modern.",
    img: resultsInHibernation,
  },
];

const whyChooseUs = [
  {
    title: "Teknologi Terbaru",
    desc: "Kami selalu mengikuti tren dan tools terbaru agar hasil kerja tetap relevan dan maksimal.",
  },
  {
    title: "Desain Modern",
    desc: "Kami rancang tampilan yang clean, intuitif, dan nyaman digunakan.",
  },
  {
    title: "Skalabilitas",
    desc: "Sistem kami dibangun agar bisa berkembang seiring pertumbuhan bisnismu.",
  },
  {
    title: "Tim Berpengalaman",
    desc: "Developer kami sudah berpengalaman di berbagai industri dan proyek kompleks.",
  },
  {
    title: "Dukungan Penuh",
    desc: "Kami mendampingi kamu dari tahap ide, pengembangan, hingga maintenance jangka panjang.",
  },
];

const trustedBy = [
  { name: "Tokopedia", logo: "/logos/tokopedia.svg" },
  { name: "Gojek", logo: "/logos/gojek.svg" },
  { name: "Bank Mandiri", logo: "/logos/mandiri.svg" },
  { name: "Pertamina", logo: "/logos/pertamina.svg" },
  { name: "BCA", logo: "/logos/bca.svg" },
];

const faqs = [
  {
    question: "Apakah Garuda Core bisa bantu dari tahap ide?",
    answer:
      "Bisa banget! Kami bantu dari pembuatan wireframe, desain UI/UX, hingga MVP siap digunakan.",
  },
  {
    question: "Berapa lama waktu pengerjaan proyek biasanya?",
    answer:
      "Tergantung kompleksitas, tapi umumnya antara 3–6 minggu dari awal sampai siap go-live.",
  },
  {
    question: "Apakah ada support setelah proyek selesai?",
    answer:
      "Ya! Kami menyediakan maintenance, pembaruan sistem, dan dukungan teknis jangka panjang.",
  },
  {
    question: "Apakah Garuda Core bisa bikin aplikasi mobile juga?",
    answer:
      "Tentu saja. Kami bisa bantu bangun aplikasi Android maupun iOS sesuai kebutuhan bisnismu.",
  },
  {
    question: "Apakah bisa integrasi ke sistem lama saya?",
    answer:
      "Bisa. Kami siapkan API dan middleware custom agar sistem lama tetap bisa terhubung dengan lancar.",
  },
];

const cta = {
  title: "Siap Bangun Solusi Digital Bersama Garuda Core?",
  desc: "Mulai transformasi digital bisnismu hari ini 🚀",
  primaryButton: "Hubungi Kami Sekarang",
  secondaryButton: "Mulai Proyekmu Gratis",
};

export { services, solutions, whyChooseUs, trustedBy, faqs, cta };
