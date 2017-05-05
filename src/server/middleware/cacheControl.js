export default () => (req, res, next) => {
  res.header('Cache-Control', 'public, max-age=31536000, no-cache') // lucid
  // res.header('Cache-Control', 'max-age=31536000, immutable') // immutable
  // res.header('Cache-Control', 'no-cache, no-store, must-revalidate') // never
  next()
}
