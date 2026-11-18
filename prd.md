# PRD - Website Company Profile PT. Suryatama Indonesia

## Tujuan
Website company profile resmi untuk memperkenalkan PT. Suryatama Indonesia
(Logistic & Service Company) kepada calon pelanggan. Kesan yang ingin dibangun:
profesional, terpercaya, mengutamakan keselamatan.

## Sumber konten
- Semua informasi perusahaan ada di `info-perusahaan.md`. Jangan mengarang data.
- Gambar ada di `public/images/`. Jangan memakai gambar dari internet.
- Data yang TIDAK BOLEH tampil: pemegang saham, modal, jumlah karyawan.
- Boleh tampil: daftar pelanggan dan jumlah truk.
- Bagian bertanda [KONFIRMASI] di `info-perusahaan.md` diberi placeholder jelas
  (misalnya "Segera hadir"), bukan diisi karangan.

## Teknologi
- Next.js (App Router) + TypeScript
- Tailwind CSS
- Framer Motion untuk animasi
- next-intl untuk dua bahasa
- next/image untuk semua gambar

## Bahasa
- Indonesia (default) dan Inggris, rute `/id/...` dan `/en/...`
- Tombol pengganti bahasa di header
- Semua teks disimpan di file terjemahan (`messages/id.json`, `messages/en.json`),
  tidak ditulis langsung di komponen
- Terjemahan bahasa Indonesia dan Inggris dibuat dari konten di `info-perusahaan.md`;
  nama pelanggan, merek truk, dan istilah seperti "milk run" tidak diterjemahkan

## Struktur halaman
1. **Beranda:** hero dengan tagline, ringkasan layanan, angka armada, logo pelanggan, ajakan menghubungi
2. **Tentang Kami:** profil singkat, sejak 2006, visi, misi, slogan, direktur utama
3. **Layanan:** Transportation (milk run, direct, on site) dan Outsourcing (security, factory cleaning, car driver expatriat)
4. **Armada:** pertumbuhan jumlah truk (grafik), jenis truk standard dan custom, ringkasan aset per merek dan ukuran box
5. **Operasional & Keselamatan:** exercise, health control, briefing, GPS monitoring, training, maintenance
6. **Pelanggan:** logo dan nama pelanggan
7. **Kontak:** alamat dua lokasi, peta, kontak person, formulir kontak

## Animasi
- Animasi muncul saat scroll (fade dan slide halus), angka armada menghitung naik
- Transisi antarhalaman halus
- Hover yang jelas pada kartu dan tombol
- Hormati pengaturan `prefers-reduced-motion` (animasi dikurangi jika aktif)
- Animasi tidak boleh membuat halaman lambat atau menghalangi membaca konten

## Desain
- Gaya: modern, bersih, profesional, banyak ruang kosong
- Palet warna: [isi: warna utama dan aksen, atau pakai warna dari logo]
- Font: satu font modern untuk judul dan satu untuk isi
- Responsif untuk HP, tablet, dan desktop (HP didahulukan)
- Kontras warna dan ukuran huruf mudah dibaca

## Fitur teknis
- SEO: judul dan deskripsi tiap halaman, Open Graph, sitemap, robots.txt, tag bahasa alternatif
- Performa: gambar dioptimasi dan lazy load, target skor Lighthouse di atas 90
- Aksesibilitas: teks alternatif pada gambar, navigasi keyboard
- Formulir kontak: validasi di server, perlindungan spam (honeypot atau rate limit),
  dikirim ke email perusahaan; kredensial email di `.env`, tidak masuk Git
- Peta lokasi: tautan atau embed Google Maps untuk dua alamat

## Aturan teknis
- Jangan menaruh rahasia (password, API key) di kode; pakai `.env.local` dan sediakan `.env.example`
- `node_modules/`, `.next/`, `.env*`, dan `*.pptx` masuk `.gitignore`
- Komponen dipisah rapi (`components/`, `app/[locale]/...`)
- Jalankan `npm run build` dan `npm run lint` sebelum menyatakan satu fase selesai

## Fase kerja
1. **Fondasi:** setup Next.js, Tailwind, next-intl, layout, header, footer, pengganti bahasa
2. **Halaman:** Beranda, Tentang Kami, Layanan, Armada, Operasional, Pelanggan, Kontak (versi statis)
3. **Animasi dan polesan desain**
4. **Formulir kontak, SEO, dan optimasi performa**
5. **Persiapan deployment**

## Cara kerja
Kerjakan satu fase, lalu berhenti, jelaskan file yang dibuat atau diubah, dan tunggu persetujuan.
Tanya dulu jika ada data yang tidak ada di `info-perusahaan.md`.