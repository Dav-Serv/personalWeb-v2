// Writes the placeholder PDFs in public/files/. They exist only so the
// certificate popup and the hero download button have something real to point
// at before you drop in your own documents — replace the files, not this script.
//
//   node scripts/make-placeholder-pdfs.mjs
import { mkdir, writeFile } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const OUT = join(dirname(fileURLToPath(import.meta.url)), '..', 'public', 'files')

const FILES = [
  ['cert-1.pdf', 'Sertifikat 1 - ganti file PDF ini'],
  ['cert-2.pdf', 'Sertifikat 2 - ganti file PDF ini'],
  ['cert-3.pdf', 'Sertifikat 3 - ganti file PDF ini'],
  ['resume.pdf', 'Resume / CV - ganti file PDF ini'],
]

/** Escapes the characters that are syntax inside a PDF literal string. */
const esc = (s) => s.replace(/([\\()])/g, '\\$1')

function pdf(text) {
  const stream = `BT /F1 20 Tf 60 760 Td (${esc(text)}) Tj ET\n`
  const bodies = [
    '<< /Type /Catalog /Pages 2 0 R >>',
    '<< /Type /Pages /Kids [3 0 R] /Count 1 >>',
    '<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595 842] /Resources << /Font << /F1 4 0 R >> >> /Contents 5 0 R >>',
    '<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>',
    `<< /Length ${Buffer.byteLength(stream)} >>\nstream\n${stream}endstream`,
  ]

  // Offsets are measured as we go, so the xref table can never drift.
  let out = '%PDF-1.4\n'
  const offsets = bodies.map((body, i) => {
    const at = Buffer.byteLength(out)
    out += `${i + 1} 0 obj\n${body}\nendobj\n`
    return at
  })

  const startxref = Buffer.byteLength(out)
  // Each entry must be exactly 20 bytes: 10 + 1 + 5 + 1 + type + CRLF.
  const entry = (off, gen, type) =>
    `${String(off).padStart(10, '0')} ${String(gen).padStart(5, '0')} ${type}\r\n`

  out += `xref\n0 ${bodies.length + 1}\n`
  out += entry(0, 65535, 'f')
  out += offsets.map((off) => entry(off, 0, 'n')).join('')
  out += `trailer\n<< /Size ${bodies.length + 1} /Root 1 0 R >>\nstartxref\n${startxref}\n%%EOF\n`

  return Buffer.from(out, 'latin1')
}

await mkdir(OUT, { recursive: true })
for (const [name, text] of FILES) {
  await writeFile(join(OUT, name), pdf(text))
  console.log('wrote', join('public/files', name))
}
