import crypto from 'crypto'
import fs from 'fs'
import path from 'path'

export default function handler(req, res) {
  const filePath = path.join(process.cwd(), 'json', 'servereventapk.json')
  const raw = fs.readFileSync(filePath, 'utf-8')

  // 💥 Buat ETag SHA-1 hash
  const etag = `W/"${crypto.createHash('sha1').update(raw).digest('hex')}"` // ✅ Pakai Weak ETag

  // 💡 Cek If-None-Match
  if (req.headers['if-none-match'] === etag) {
    res.status(304).end()
    return
  }

  // ✅ Header penting
  res.setHeader('ETag', etag)
  res.setHeader('Cache-Control', 'no-store')
  res.setHeader('Content-Type', 'application/json')
  res.status(200).send(raw)
}
