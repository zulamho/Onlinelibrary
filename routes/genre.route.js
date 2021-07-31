const { Router } = require("express")
const { genreController } = require("../routes/genre.route")

const router = Router()

router.post("/genre" , genreController.addGenre)
router.patch("/genre/:id" , genreController.changeGenre)
router.patch("/genre/:id" , genreController.deleteGenre)

module.exports = router