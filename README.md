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

## Yang perlu kamu ganti

| Apa | Di mana |
| --- | --- |
| Nama, role, tagline, bounty | `src/i18n.js` → `hero` |
| Bio dan kutipan | `src/i18n.js` → `about` |
| Angka statistik | `<Stat>` di `src/components/About.jsx` |
| Skill dan level | `src/i18n.js` → `content.id/en.skills` |
| Timeline perjalanan | `src/i18n.js` → `content.id/en.timeline` |
| Judul, deskripsi, tag proyek | `src/i18n.js` → `content.id/en.projects` |
| Link sosial media (tampil di bawah tombol hero) | `src/i18n.js` → `socials` |
| Foto poster wanted | `public/images/profile.svg` |
| Gambar proyek | `public/images/project-1.svg`, `-2`, `-3` |

### Mengganti gambar

Semua gambar ada di `public/images/` dan saat ini masih placeholder SVG.
Timpa saja dengan file kamu sendiri — boleh `.jpg` / `.png` / `.webp`, asal
path di `src/i18n.js` (`content.id/en.projects[].image`) dan `src/components/Hero.jsx`
(`src="/images/profile.svg"`) ikut disesuaikan kalau ekstensinya berubah.

| File | Rasio | Ukuran disarankan |
| --- | --- | --- |
| `profile.svg` | 4:5 potret | 800 × 1000 |
| `project-1..3.svg` | 16:9 lanskap | 1200 × 675 |

Kartu proyek memakai `object-cover` (gambar dipotong agar penuh), sedangkan popup
"Lihat Karya" menampilkan gambar utuh selebar panel — jadi pakai rasio 16:9 supaya
tidak ada bagian penting yang terpotong di kartu.

Form kontak belum terhubung ke backend — submit-nya disimulasikan di
`src/components/Contact.jsx`. Ganti blok `setTimeout` dengan `fetch` ke endpoint
kamu (Formspree, Resend, dsb).

## Catatan

- Semua ikon dan dekorasi (Jolly Roger, kompas, kapal, ombak) adalah inline SVG
  dan gradient CSS — nol request gambar. Yang di-request cuma foto poster dan
  gambar proyek di `public/images/`.
- Gambar proyek pakai `loading="lazy"` + `width`/`height` supaya tidak menahan
  render awal dan tidak menggeser layout. Foto poster hero justru `fetchPriority="high"`
  karena dia di atas garis lipat.
- Font dimuat dari Google Fonts. Kalau mau lebih cepat lagi, self-host Cinzel +
  Pirata One dan hapus `<link>` di `index.html`.
- `src/App.css` dan `src/assets/` sudah tidak dipakai, aman dihapus.
