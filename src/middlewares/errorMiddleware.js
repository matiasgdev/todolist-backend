export const notFound = (req, res, next) => {
  const error = new Error('Not Found ' + req.originalUrl)
  res.status(404)
  next(error)
}


export const errorHandler = (err, req, res, next) => {
  let code = res.statusCode === 200 ? 500 : res.statusCode

  if (err.name === "ValidationError") {
    let errors = []
    for (let e of err.errors) {
      errors.push(e)
    }

    return res.status(400).json({errors})
  }
  
  res.status(code).json({
    message: err.message,
    stack: err.stack
  })
  
}