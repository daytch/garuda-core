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
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" stroke-width="1.5" fill="currentColor" class="w-6 h-6"><path d="M256 0c17.7 0 32 14.3 32 32V42.4c93.7 13.9 167.7 88 181.6 181.6H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H469.6c-13.9 93.7-88 167.7-181.6 181.6V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V469.6C130.3 455.7 56.3 381.7 42.4 288H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H42.4C56.3 130.3 130.3 56.3 224 42.4V32c0-17.7 14.3-32 32-32zM107.4 288c12.5 58.3 58.4 104.1 116.6 116.6V384c0-17.7 14.3-32 32-32s32 14.3 32 32v20.6c58.3-12.5 104.1-58.4 116.6-116.6H384c-17.7 0-32-14.3-32-32s14.3-32 32-32h20.6C392.1 165.7 346.3 119.9 288 107.4V128c0 17.7-14.3 32-32 32s-32-14.3-32-32V107.4C165.7 119.9 119.9 165.7 107.4 224H128c17.7 0 32 14.3 32 32s-14.3 32-32 32H107.4zM256 224a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg>`,
  },
  {
    title: "Sistem Point of Sale (POS)",
    features: [
      "Transaksi cepat dan aman",
      "Manajemen stok serta laporan otomatis",
      "Cocok untuk bisnis retail dan UMKM",
    ],
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" stroke-width="1.5" fill="currentColor" class="w-6 h-6"><path d="M256 0c17.7 0 32 14.3 32 32V42.4c93.7 13.9 167.7 88 181.6 181.6H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H469.6c-13.9 93.7-88 167.7-181.6 181.6V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V469.6C130.3 455.7 56.3 381.7 42.4 288H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H42.4C56.3 130.3 130.3 56.3 224 42.4V32c0-17.7 14.3-32 32-32zM107.4 288c12.5 58.3 58.4 104.1 116.6 116.6V384c0-17.7 14.3-32 32-32s32 14.3 32 32v20.6c58.3-12.5 104.1-58.4 116.6-116.6H384c-17.7 0-32-14.3-32-32s14.3-32 32-32h20.6C392.1 165.7 346.3 119.9 288 107.4V128c0 17.7-14.3 32-32 32s-32-14.3-32-32V107.4C165.7 119.9 119.9 165.7 107.4 224H128c17.7 0 32 14.3 32 32s-14.3 32-32 32H107.4zM256 224a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg>`,
  },
  {
    title: "ERP & Manajemen Inventori",
    features: [
      "Kelola data bisnis dari satu sistem",
      "Integrasi antar divisi yang efisien",
      "Monitoring stok dan keuangan real-time",
    ],
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" stroke-width="1.5" fill="currentColor" class="w-6 h-6"><path d="M256 0c17.7 0 32 14.3 32 32V42.4c93.7 13.9 167.7 88 181.6 181.6H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H469.6c-13.9 93.7-88 167.7-181.6 181.6V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V469.6C130.3 455.7 56.3 381.7 42.4 288H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H42.4C56.3 130.3 130.3 56.3 224 42.4V32c0-17.7 14.3-32 32-32zM107.4 288c12.5 58.3 58.4 104.1 116.6 116.6V384c0-17.7 14.3-32 32-32s32 14.3 32 32v20.6c58.3-12.5 104.1-58.4 116.6-116.6H384c-17.7 0-32-14.3-32-32s14.3-32 32-32h20.6C392.1 165.7 346.3 119.9 288 107.4V128c0 17.7-14.3 32-32 32s-32-14.3-32-32V107.4C165.7 119.9 119.9 165.7 107.4 224H128c17.7 0 32 14.3 32 32s-14.3 32-32 32H107.4zM256 224a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg>`,
    },
  {
    title: "Aplikasi Mobile (Android/iOS)",
    features: [
      "Desain modern dan performa tinggi",
      "Bisa native atau hybrid sesuai kebutuhan",
      "Ter integrasi penuh dengan backend",
    ],
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" stroke-width="1.5" fill="currentColor" class="w-6 h-6"><path d="M0 80v48c0 17.7 14.3 32 32 32H48 96V80c0-26.5-21.5-48-48-48S0 53.5 0 80zM112 32c10 13.4 16 30 16 48V384c0 35.3 28.7 64 64 64s64-28.7 64-64v-5.3c0-32.4 26.3-58.7 58.7-58.7H480V128c0-53-43-96-96-96H112zM464 480c61.9 0 112-50.1 112-112c0-8.8-7.2-16-16-16H314.7c-14.7 0-26.7 11.9-26.7 26.7V384c0 53-43 96-96 96H368h96z"/></svg>`,
    },
  {
    title: "Custom API & Integrasi Sistem",
    features: [
      "Koneksi kan aplikasi baru dengan sistem lama",
      "Middleware khusus sesuai kebutuhan bisnis",
      "Dokumentasi API yang mudah digunakan",
    ],
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" stroke-width="1.5" fill="currentColor" class="w-6 h-6"><path d="M192 104.8c0-9.2-5.8-17.3-13.2-22.8C167.2 73.3 160 61.3 160 48c0-26.5 28.7-48 64-48s64 21.5 64 48c0 13.3-7.2 25.3-18.8 34c-7.4 5.5-13.2 13.6-13.2 22.8c0 12.8 10.4 23.2 23.2 23.2H336c26.5 0 48 21.5 48 48v56.8c0 12.8 10.4 23.2 23.2 23.2c9.2 0 17.3-5.8 22.8-13.2c8.7-11.6 20.7-18.8 34-18.8c26.5 0 48 28.7 48 64s-21.5 64-48 64c-13.3 0-25.3-7.2-34-18.8c-5.5-7.4-13.6-13.2-22.8-13.2c-12.8 0-23.2 10.4-23.2 23.2V464c0 26.5-21.5 48-48 48H279.2c-12.8 0-23.2-10.4-23.2-23.2c0-9.2 5.8-17.3 13.2-22.8c11.6-8.7 18.8-20.7 18.8-34c0-26.5-28.7-48-64-48s-64 21.5-64 48c0 13.3 7.2 25.3 18.8 34c7.4 5.5 13.2 13.6 13.2 22.8c0 12.8-10.4 23.2-23.2 23.2H48c-26.5 0-48-21.5-48-48V343.2C0 330.4 10.4 320 23.2 320c9.2 0 17.3 5.8 22.8 13.2C54.7 344.8 66.7 352 80 352c26.5 0 48-28.7 48-64s-21.5-64-48-64c-13.3 0-25.3 7.2-34 18.8C40.5 250.2 32.4 256 23.2 256C10.4 256 0 245.6 0 232.8V176c0-26.5 21.5-48 48-48H168.8c12.8 0 23.2-10.4 23.2-23.2z"/></svg>`,
  },
  {
    title: "Cloud Deployment & Maintenance",
    features: [
      "Hosting aman dan cepat",
      "Backup otomatis dan monitoring rutin",
      "Layanan support berkelanjutan",
    ],
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" stroke-width="1.5" fill="currentColor" class="w-6 h-6"><path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm306.7 69.1L162.4 380.6c-19.4 7.5-38.5-11.6-31-31l55.5-144.3c3.3-8.5 9.9-15.1 18.4-18.4l144.3-55.5c19.4-7.5 38.5 11.6 31 31L325.1 306.7c-3.2 8.5-9.9 15.1-18.4 18.4zM288 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"/></svg>`,
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
      "Kami bantu audit, refactor, atau lanjutkan development agar sistem mu bisa jalan kembali — lebih stabil, efisien, dan modern.",
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
    desc: "Sistem kami dibangun agar bisa berkembang seiring pertumbuhan bisnis mu.",
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
      "Tentu saja. Kami bisa bantu bangun aplikasi Android maupun iOS sesuai kebutuhan bisnis mu.",
  },
  {
    question: "Apakah bisa integrasi ke sistem lama saya?",
    answer:
      "Bisa. Kami siapkan API dan middleware custom agar sistem lama tetap bisa terhubung dengan lancar.",
  },
];

const cta = {
  title: "Siap Bangun Solusi Digital Bersama Garuda Core?",
  desc: "Mulai transformasi digital bisnis mu hari ini 🚀",
  primaryButton: "Hubungi Kami Sekarang",
  secondaryButton: "Mulai Proyek mu Gratis",
};

export { services, solutions, whyChooseUs, trustedBy, faqs, cta };
