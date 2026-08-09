# Grand Line — Personal Profile

Situs profil personal bertema One Piece. React + Vite + Tailwind CSS v4.

## Menjalankan

```bash
npm install
```

```bash
npm run dev
```

```bash
npm run build
```

## Fitur

- **Loading screen** — di-inline di `index.html`, jadi tampil di frame pertama sebelum bundle JS diunduh. Hilang setelah React mount + webfont siap (minimal 700 ms supaya tidak berkedip).
- **Parallax** — posisi scroll ditulis sekali per frame ke satu CSS variable (`--sy`) di `<html>`. Semua layer membaca variable yang sama, jadi banyak layer tetap satu kali style write per frame. Semua gerakan pakai `transform`, tidak ada reflow.
- **Dark / light mode** — class `.dark` di `<html>`, disimpan di `localStorage`, dan diterapkan script inline sebelum paint pertama supaya tidak ada flash putih.
- **Bahasa ID / EN** — seluruh teks ada di `src/i18n.js`. Pilihan bahasa ikut tersimpan.
- **Responsif** — mobile-first, diuji pada 375px dan 1280px.
- **Aksesibilitas** — landmark semantik, label ARIA, `aria-live` pada status form, focus ring, dan `prefers-reduced-motion` yang mematikan animasi non-esensial.
- **Cover sertifikat** — halaman pertama tiap PDF dirender ke canvas oleh `pdfjs-dist`. PDF dan workernya (~1.7 MB total) hanya diunduh saat seksi Sertifikat mendekati layar, bukan saat halaman pertama kali dibuka.

## Yang perlu kamu ganti

| Apa | Di mana |
| --- | --- |
| Nama, role, tagline, bounty | `src/i18n.js` → `hero` |
| Bio dan kutipan | `src/i18n.js` → `about` |
| Angka statistik | `<Stat>` di `src/components/About.jsx` |
| Daftar tech stack | `src/techStack.js` (urutan array = urutan tampil) |
| Timeline perjalanan | `src/i18n.js` → `content.id/en.timeline` |
| Judul sertifikat + path PDF | `src/i18n.js` → `content.id/en.certs` |
| Judul kompetisi + gambar | `src/i18n.js` → `content.id/en.competitions` |
| Judul, deskripsi, tag proyek | `src/i18n.js` → `content.id/en.projects` |
| Link sosial media (tampil di bawah tombol hero) | `src/i18n.js` → `socials` — persis empat: GitHub, LinkedIn, Instagram, YouTube |
| File resume/CV yang diunduh tombol hero | `src/i18n.js` → `resumeFile` |
| Foto poster wanted | `public/images/profile.jpeg` |
| Gambar proyek | `public/images/project-1.svg`, `-2`, `-3` |
| Gambar kompetisi | `public/images/contest-1.svg`, `-2`, `-3` |
| PDF sertifikat | `public/files/` (nama bebas, path-nya ikut `content.id/en.certs`) |
| PDF resume | `public/files/DavaRiasPutratama_Resume.pdf` |

### Mengganti gambar

Semua gambar ada di `public/images/` dan saat ini masih placeholder SVG.
Timpa saja dengan file kamu sendiri — boleh `.jpg` / `.png` / `.webp`, asal
path di `src/i18n.js` (`content.id/en.projects[].image`, `competitions[].image`)
dan `src/components/Hero.jsx` (`src="/images/profile.jpeg"`) ikut disesuaikan
kalau ekstensinya berubah.

| File | Rasio | Ukuran disarankan |
| --- | --- | --- |
| `profile.jpeg` | 4:5 potret | 800 × 1000 |
| `project-1..3.svg` | 16:9 lanskap | 1200 × 675 |
| `contest-1..3.svg` | 4:3 lanskap | 1200 × 900 |

Kartu proyek memakai `object-cover` (gambar dipotong agar penuh), sedangkan popup
"Lihat Karya" menampilkan gambar utuh selebar panel — jadi pakai rasio 16:9 supaya
tidak ada bagian penting yang terpotong di kartu.

### Mengganti PDF (sertifikat & resume)

Taruh PDF kamu di `public/files/`, lalu arahkan path-nya di `src/i18n.js`
(`content.id/en.certs[].file` untuk sertifikat, `resumeFile` untuk resume). Nama
filenya bebas — yang penting path di `i18n.js` cocok. Kalau path menunjuk ke file
yang tidak ada, dev server mengembalikan `index.html` dan pdf.js akan gagal
membaca HTML sebagai PDF; kartunya lalu tetap menampilkan ikon dokumen.

Kartu sertifikat menampilkan **halaman pertama PDF**, dirender ke `<canvas>` oleh
`pdfjs-dist` (`src/pdfCover.js`). Ikon dokumen merah cuma placeholder selagi
render berjalan, sekaligus fallback kalau render gagal.

Karena scan sertifikat gampang ratusan kB, render baru dimulai saat kartunya
mendekati layar (IntersectionObserver, `rootMargin` satu layar). Jadi pengunjung
yang tidak pernah scroll ke seksi Sertifikat tidak mengunduh satu PDF pun —
begitu juga chunk `pdfjs-dist` 462 kB dan workernya. `vite.config.js` sengaja
mengeluarkan `pdfjs-dist` dari chunk `vendor` supaya pemisahan ini tidak batal.

Popup-nya membuka PDF di dalam `<iframe>`, ditambah tombol "Buka di tab baru" dan
"Unduh PDF" sebagai cadangan, karena tidak semua browser (terutama di HP) mau
menampilkan PDF secara inline.

Tombol **Resume/CV** di hero memakai atribut `download`, jadi berkasnya langsung
tersimpan alih-alih dibuka. Nama file yang tersimpan mengikuti nama file di
`public/files/`.

`scripts/make-placeholder-pdfs.mjs` masih ada kalau sewaktu-waktu perlu PDF
placeholder satu halaman lagi:

```bash
node scripts/make-placeholder-pdfs.mjs
```

Form kontak belum terhubung ke backend — submit-nya disimulasikan di
`src/components/Contact.jsx`. Ganti blok `setTimeout` dengan `fetch` ke endpoint
kamu (Formspree, Resend, dsb).

## Catatan

- Semua ikon dan dekorasi (Jolly Roger, kompas, kapal, ombak) adalah inline SVG
  dan gradient CSS — nol request gambar. Logo tech stack juga inline (lihat
  `src/techStack.js`), jadi 24 logo itu tidak menambah satu pun request; seksi
  Keahlian memang cuma grid logo, tanpa bar level. Ikon sosial media juga inline
  (`socialPaths` di `src/components/Icons.jsx`). Yang di-request cuma foto poster,
  gambar proyek, dan gambar kompetisi di `public/images/`, plus PDF sertifikat
  yang ditunda sampai seksinya didekati.
- `pdfjs-dist` adalah satu-satunya dependency runtime di luar React. Dia dimuat
  lewat `import()` dinamis, jadi tidak ikut bundle awal: `vendor` tetap ~190 kB.
- Gambar proyek pakai `loading="lazy"` + `width`/`height` supaya tidak menahan
  render awal dan tidak menggeser layout. Foto poster hero justru `fetchPriority="high"`
  karena dia di atas garis lipat.
- Font dimuat dari Google Fonts. Kalau mau lebih cepat lagi, self-host Cinzel +
  Pirata One dan hapus `<link>` di `index.html`.
- `src/App.css` dan `src/assets/` sudah tidak dipakai, aman dihapus.
