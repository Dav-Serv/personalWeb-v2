// Single source of truth for copy. Add a key here and it exists in both locales.
export const dict = {
  id: {
    nav: {
      home: 'Beranda',
      about: 'Tentang',
      crew: 'Keahlian',
      voyage: 'Perjalanan',
      cert: 'Sertifikat',
      contest: 'Kompetisi',
      bounty: 'Proyek',
      contact: 'Kontak',
    },
    hero: {
      eyebrow: 'Wanted — Mati atau Hidup',
      name: 'DAVA RIAS PUTRATAMA',
      role: 'Backend Web Developer',
      tagline:
        'Berlayar di Grand Line teknologi, memburu One Piece bernama kode yang sempurna.',
      ctaPrimary: 'Lihat Proyek',
      ctaSecondary: 'Rekrut Aku',
      bounty: 'Bounty',
      scroll: 'Gulir untuk berlayar',
    },
    about: {
      title: 'Tentang',
      subtitle: 'Sedikit cerita tentang perjalananku',
      body: 'Aku seorang pengembang web yang percaya bahwa setiap baris kode adalah satu langkah menuju impian. Berawal dari rasa penasaran pada cara kerja sebuah halaman, kini aku membangun antarmuka yang cepat, mudah diakses, dan menyenangkan dipakai. Sama seperti kru bajak laut, aku percaya karya terbaik lahir dari kerja sama.',
      quote:
        'Aku tidak akan mati sebelum mimpiku terwujud — dan mimpiku adalah membangun web yang membuat orang tersenyum.',
      stats: {
        years: 'Tahun Berlayar',
        projects: 'Pulau Ditaklukkan',
        clients: 'Kru Bergabung',
      },
    },
    crew: {
      title: 'Keahlian',
      subtitle: 'Senjata yang kubawa berlayar',
    },
    voyage: {
      title: 'Catatan Perjalanan',
      subtitle: 'Pulau-pulau yang pernah kusinggahi',
      present: 'Sekarang',
    },
    cert: {
      title: 'Sertifikat',
      subtitle: 'Bukti pelayaran yang sudah kutempuh',
    },
    contest: {
      title: 'Kompetisi',
      subtitle: 'Pertarungan yang pernah kuikuti',
    },
    bounty: {
      title: 'Proyek',
      subtitle: 'Karya yang paling kubanggakan',
      view: 'Lihat Karya',
    },
    contact: {
      title: 'Kirim Den Den Mushi',
      subtitle: 'Punya misi menarik? Mari bicara.',
      name: 'Nama',
      namePh: 'Monkey D. Luffy',
      email: 'Email',
      emailPh: 'kapten@grandline.com',
      message: 'Pesan',
      messagePh: 'Ceritakan tentang misimu...',
      send: 'Kirim Pesan',
      sending: 'Mengirim...',
      sent: 'Pesan terkirim! Terima kasih 🏴‍☠️',
      errName: 'Nama wajib diisi.',
      errEmail: 'Masukkan email yang valid.',
      errMessage: 'Pesan minimal 10 karakter.',
    },
    footer: {
      made: 'Dibuat dengan',
      and: 'dan semangat bajak laut',
      rights: 'Seluruh hak cipta dilindungi.',
    },
    a11y: {
      toggleTheme: 'Ganti mode terang/gelap',
      toggleLang: 'Ganti bahasa',
      openMenu: 'Buka menu',
      closeMenu: 'Tutup menu',
      close: 'Tutup',
      toTop: 'Kembali ke atas',
    },
  },

  en: {
    nav: {
      home: 'Home',
      about: 'About',
      crew: 'Skills',
      voyage: 'Journey',
      cert: 'Certificates',
      contest: 'Competitions',
      bounty: 'Projects',
      contact: 'Contact',
    },
    hero: {
      eyebrow: 'Wanted — Dead or Alive',
      name: 'DAVA RIAS PUTRATAMA',
      role: 'Backend Web Developer',
      tagline:
        'Sailing the Grand Line of technology, hunting the One Piece of perfect code.',
      ctaPrimary: 'View Projects',
      ctaSecondary: 'Hire Me',
      bounty: 'Bounty',
      scroll: 'Scroll to set sail',
    },
    about: {
      title: 'About',
      subtitle: 'A little about my voyage',
      body: 'I am a web developer who believes every line of code is a step toward a dream. It started with plain curiosity about how a page works; today I build interfaces that are fast, accessible, and a joy to use. Like any good pirate crew, I believe the best work is made together.',
      quote:
        "I won't rest until my dream comes true — and my dream is to build a web that makes people smile.",
      stats: {
        years: 'Years Sailing',
        projects: 'Islands Conquered',
        clients: 'Crew Joined',
      },
    },
    crew: {
      title: 'Skills',
      subtitle: 'The arsenal I sail with',
    },
    voyage: {
      title: 'Journey',
      subtitle: 'Islands I have docked at',
      present: 'Present',
    },
    cert: {
      title: 'Certificates',
      subtitle: 'Proof of the voyages I have completed',
    },
    contest: {
      title: 'Competitions',
      subtitle: 'Battles I have taken part in',
    },
    bounty: {
      title: 'Projects',
      subtitle: 'The work I am proudest of',
      view: 'View Work',
    },
    contact: {
      title: 'Send a Den Den Mushi',
      subtitle: 'Got an interesting mission? Let us talk.',
      name: 'Name',
      namePh: 'Monkey D. Luffy',
      email: 'Email',
      emailPh: 'captain@grandline.com',
      message: 'Message',
      messagePh: 'Tell me about your mission...',
      send: 'Send Message',
      sending: 'Sending...',
      sent: 'Message sent! Thank you 🏴‍☠️',
      errName: 'Name is required.',
      errEmail: 'Please enter a valid email.',
      errMessage: 'Message must be at least 10 characters.',
    },
    footer: {
      made: 'Built with',
      and: 'and pirate spirit',
      rights: 'All rights reserved.',
    },
    a11y: {
      toggleTheme: 'Toggle light/dark mode',
      toggleLang: 'Switch language',
      openMenu: 'Open menu',
      closeMenu: 'Close menu',
      close: 'Close',
      toTop: 'Back to top',
    },
  },
}

// Content that differs per locale but belongs to the data layer, not the chrome.
// Tech-stack logos live in src/techStack.js — brand names are the same in both
// locales, so there is nothing to translate.
export const content = {
  id: {
    timeline: [
      {
        year: '2014 - 2019',
        island: 'SD Negeri Krajan',
        role: '-',
        desc: 'Saya bersekolah di SD Negeri Krajan selama 6 tahun dari umur 6 - 11 tahun.',
      },
      {
        year: '2019 - 2022',
        island: 'SMP Negeri 2 Srandakan',
        role: '-',
        desc: 'Saya bersekolah di SMP Negeri 2 Srandakan selama 3 tahun dari umur 11 - 14 tahun.',
      },
      {
        year: '2022 - 2025',
        island: 'SMK Muhammadiyah 1 Bambanglipuro',
        role: 'RPL(Rekayasa Perangkat Lunak)',
        desc: 'Menulis baris HTML pertama dan jatuh cinta pada web.',
      },
      {
        year: '2024 (6 bulan)',
        island: 'PT Global Intermedia Nusantara',
        role: 'PKL(Praktik Kerja Lapangan)',
        desc: 'Belajar database postgresql dan Framework Laravel.',
      },
      {
        year: 'now',
        island: 'Universitas AMIKOM Yogyakarta',
        role: 'S1 Informatika',
        desc: 'Saya sekarang menjadi mahasiswa aktif di Universitas AMIKOM Yogyakarta serta aktif mengikuti organisasi, kompetisi, perkuliahan, dan codingcamp.',
      },
    ],
    certs: [
      { title: 'Sertifikat Backend Developer', image: '/images/cert-1.svg' },
      { title: 'Sertifikat Cloud Practitioner', image: '/images/cert-2.svg' },
      { title: 'Sertifikat Basis Data', image: '/images/cert-3.svg' },
    ],
    competitions: [
      { title: 'Juara 1 Hackathon Nasional', image: '/images/contest-1.svg' },
      { title: 'Finalis Lomba Web Design', image: '/images/contest-2.svg' },
      { title: 'Peserta Competitive Programming', image: '/images/contest-3.svg' },
    ],
    projects: [
      {
        title: 'Thousand Sunny UI',
        desc: 'Design system React dengan 40+ komponen yang bisa diakses semua orang.',
        tags: ['React', 'Tailwind', 'a11y'],
        image: '/images/project-1.svg',
      },
      {
        title: 'Log Pose Analytics',
        desc: 'Dasbor analitik realtime dengan visualisasi data ringan.',
        tags: ['Next.js', 'D3', 'Node'],
        image: '/images/project-2.svg',
      },
      {
        title: 'Den Den Chat',
        desc: 'Aplikasi obrolan realtime dengan enkripsi ujung ke ujung.',
        tags: ['WebSocket', 'React', 'Crypto'],
        image: '/images/project-3.svg',
      },
    ],
  },
  en: {
    timeline: [
      {
        year: '2014 - 2019',
        island: 'SD Negeri Krajan',
        role: '-',
        desc: 'I attended Krajan Public Elementary School for six years, from the age of 6 - 11',
      },
      {
        year: '2019 - 2022',
        island: 'SMP Negeri 2 Srandakan',
        role: '-',
        desc: 'I attended SMP Negeri 2 Srandakan for three years, from the age of 11 - 14.',
      },
      {
        year: '2022 - 2025',
        island: 'SMK Muhammadiyah 1 Bambanglipuro',
        role: 'Software Engineering',
        desc: 'Wrote the first line of HTML and fell in love with the web.',
      },
      {
        year: '2024 (6 month)',
        island: 'PT Global Intermedia Nusantara',
        role: 'Internship',
        desc: 'Learning the PostgreSQL database and the Laravel framework.',
      },
      {
        year: 'now',
        island: 'AMIKOM Yogyakarta University',
        role: 'Bachelor Informatics',
        desc: 'I am currently an active student at Universitas AMIKOM Yogyakarta, actively participating in organizations, competitions, coursework, and coding camps.',
      },
    ],
    certs: [
      { title: 'Backend Developer Certificate', image: '/images/cert-1.svg' },
      { title: 'Cloud Practitioner Certificate', image: '/images/cert-2.svg' },
      { title: 'Database Fundamentals Certificate', image: '/images/cert-3.svg' },
    ],
    competitions: [
      { title: '1st Place — National Hackathon', image: '/images/contest-1.svg' },
      { title: 'Finalist — Web Design Contest', image: '/images/contest-2.svg' },
      { title: 'Competitive Programming Entrant', image: '/images/contest-3.svg' },
    ],
    projects: [
      {
        title: 'Thousand Sunny UI',
        desc: 'A React design system with 40+ components everyone can use.',
        tags: ['React', 'Tailwind', 'a11y'],
        image: '/images/project-1.svg',
      },
      {
        title: 'Log Pose Analytics',
        desc: 'A realtime analytics dashboard with lightweight data visuals.',
        tags: ['Next.js', 'D3', 'Node'],
        image: '/images/project-2.svg',
      },
      {
        title: 'Den Den Chat',
        desc: 'A realtime chat app with end-to-end encryption.',
        tags: ['WebSocket', 'React', 'Crypto'],
        image: '/images/project-3.svg',
      },
    ],
  },
}

export const socials = [
  { label: 'GitHub', href: 'https://github.com/Dav-Serv/', icon: 'github' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/dava-rias-putratama/', icon: 'linkedin' },
  { label: 'Instagram', href: 'https://www.instagram.com/davaa_rr/', icon: 'instagram' },
  { label: 'YouTube', href: 'https://youtube.com/@davserver/', icon: 'youtube' },
]
