import crypto from 'crypto'
import fs from 'fs'
import path from 'path'

export default function handler(req, res) {
  const filePath = path.join(process.cwd(), 'json', 'playlistapk.json')
  const raw = fs.readFileSync(filePath, 'utf-8')

  const etag = crypto.createHash('sha1').update(raw).digest('hex')

  if (req.headers['if-none-match'] === etag) {
    res.status(304).end()
    return
  }

  res.setHeader('ETag', etag)
  res.setHeader('Cache-Control', 'no-store')
  res.setHeader('Content-Type', 'application/json')
  res.status(200).send(raw)
}
