export const notFound = (req, res, next) => {
  const error = new Error('Not Found ' + req.originalUrl)
  res.status(404)
  next(error)
}

export const errorHandler = (err, req, res, next) => {
  let code = res.statusCode === 200 ? 500 : res.statusCode
  res.status(code)

  if (err.name === "ValidationError") {
    res.status(400)
    let errors = []
    for (let e of err.errors) {
      errors.push(e)
    }
    return res.json({errors})
  }
  
  res.json({
    message: err.message
  })
  
}