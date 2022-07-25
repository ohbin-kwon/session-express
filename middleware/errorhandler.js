// middleware
//https://expressjs.com/ko/guide/error-handling.html
module.exports = (err, req, res, next) => {

  res.status(500).send(`internal server error \n name: ${err.name} \n message: ${err.message}`)
  next()
}