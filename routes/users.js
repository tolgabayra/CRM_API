const router = require("express").Router()
const UserController = require("../controllers/UserController")
const schema = require("../validations/Users")
const validate = require("../middlewares/verifyValidate")

router.get("/:id", validate(schema.createValidation),UserController.getUser)
router.get("/",validate(schema.createValidation) ,UserController.getAllUser)
router.delete("/:id",validate(schema.createValidation) ,UserController.deleteUser)
router.put("/:id",validate(schema.createValidation) ,UserController.updateUser)

module.exports = router