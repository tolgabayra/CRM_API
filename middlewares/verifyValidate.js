
const verifyValidate = (schema) => (req, res, next) => {
  const {value, error} = schema.validate(req.body)

  if(error){
    res.status(422).send(error.details(0))
  }
  else {
    next()
  }
}

module.exports = verifyValidate