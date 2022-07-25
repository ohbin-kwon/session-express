// middleware
module.exports = (req, res, next) => {
  const id = {
    name: "david"
  }
  res.locals.data = id
  next()
}