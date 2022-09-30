const Joi = require("joi")

const createValidation = Joi.object({
    username: Joi.string().required().min(3),
    password: Joi.string().min(8),
    email: Joi.string().email().required().min(8)
})

const loginValidation = Joi.object({
    password: Joi.string().min(8),
    email: Joi.string().email().required().min(8)
})

module.exports = {
    createValidation,
    loginValidation
}