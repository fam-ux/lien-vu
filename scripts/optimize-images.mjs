import fs from 'node:fs/promises'
import path from 'node:path'
import sharp from 'sharp'

async function fileExists(filePath) {
  try {
    await fs.access(filePath)
    return true
  } catch {
    return false
  }
}

async function ensureDir(dir) {
  await fs.mkdir(dir, { recursive: true })
}

async function optimizeProfile() {
  const projectRoot = process.cwd()
  const publicDir = path.join(projectRoot, 'public')
  const inputPath = path.join(publicDir, 'profile.JPG')

  if (!(await fileExists(inputPath))) {
    console.error(`[optimize-images] Input not found: ${inputPath}`)
    process.exit(1)
  }

  await ensureDir(publicDir)

  const targetSize = 416 // matches ~2x of the largest rendered dimension
  const outputs = [
    { ext: 'webp', options: { quality: 80 } },
    { ext: 'jpg', options: { quality: 80, mozjpeg: true } },
  ]

  for (const out of outputs) {
    const outputPath = path.join(publicDir, `profile-${targetSize}.${out.ext}`)
    const pipeline = sharp(inputPath)
      .resize({ width: targetSize, withoutEnlargement: true })

    if (out.ext === 'webp') pipeline.webp(out.options)
    if (out.ext === 'jpg') pipeline.jpeg(out.options)

    await pipeline.toFile(outputPath)
    const { size } = await fs.stat(outputPath)
    console.log(`[optimize-images] Wrote ${path.basename(outputPath)} (${Math.round(size / 1024)} kB)`) 
  }
}

optimizeProfile().catch((err) => {
  console.error('[optimize-images] Failed:', err)
  process.exit(1)
})


