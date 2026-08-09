/**
 * Draws page 1 of a PDF into a canvas, for the Sertifikat card covers.
 *
 * pdf.js is heavy (~400 kB), so it is never part of the initial bundle: the
 * `import()` below is only reached when a cover actually needs painting, and
 * the module promise is shared so three cards cost one download.
 */

let libPromise = null

function lib() {
  if (!libPromise) {
    libPromise = Promise.all([
      import('pdfjs-dist'),
      import('pdfjs-dist/build/pdf.worker.min.mjs?url'),
    ]).then(([pdfjs, worker]) => {
      pdfjs.GlobalWorkerOptions.workerSrc = worker.default
      return pdfjs
    })
  }
  return libPromise
}

// One PDFDocumentProxy per URL — the cover and a re-render after resize reuse it.
const docs = new Map()

function doc(url) {
  if (!docs.has(url)) {
    docs.set(
      url,
      lib()
        .then((pdfjs) =>
          pdfjs.getDocument({
            url,
            isEvalSupported: false,
            // Covers are thumbnails; skip the extra fetches a full view needs.
            disableFontFace: false,
          }).promise,
        )
        .catch((err) => {
          docs.delete(url)
          throw err
        }),
    )
  }
  return docs.get(url)
}

/**
 * Renders page 1 of `url` into `canvas`, scaled to cover a `width`×`height`
 * box the way `object-cover` would. Resolves once the paint is done.
 */
export async function drawPdfCover(url, canvas, width, height) {
  const pdf = await doc(url)
  const page = await pdf.getPage(1)
  const base = page.getViewport({ scale: 1 })

  // Cap the pixel ratio: a cert cover gains nothing from a 3x raster.
  const dpr = Math.min(window.devicePixelRatio || 1, 2)
  const scale =
    Math.max(width / base.width, height / base.height) * dpr || dpr
  const viewport = page.getViewport({ scale })

  canvas.width = Math.round(viewport.width)
  canvas.height = Math.round(viewport.height)

  await page.render({ canvas, viewport }).promise
  page.cleanup()
}
