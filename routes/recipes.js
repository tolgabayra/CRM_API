const router = require("express").Router()
const RecipeController = require("../controllers/RecipeController")
const schema = require("../validations/Recipe")
const validate = require("../middlewares/verifyValidate")


router.get("/:id",RecipeController.getRecipe)
router.get("/",RecipeController.getAllRecipe)
router.post("/", RecipeController.createRecipe)
router.delete("/:id",RecipeController.deleteRecipe)
router.put("/:id",RecipeController.updateRecipe)


module.exports = router