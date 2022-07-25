// middleware
// http://expressjs.com/en/guide/using-middleware.html
module.exports = (req, res, next) => {
  for (const [key, value] of Object.entries(req.body)) {
    console.log(`what is in this requset body ${key}: ${value}`);
  }
  next()
}