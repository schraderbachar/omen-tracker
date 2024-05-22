//holds the routes
const express = require("express")
const router = express.Router()
const omens = require("../services/omens")

//get omens
router.get("/", async (req, res, next) => {
  try {
    res.json(await omens.getAll())
  } catch (err) {
    console.error("Error while getting all omens", err.message)
    next(err)
  }
})

//create omen
router.post("/", async (req, res, next) => {
  try {
    res.json(await omens.createOmen(req.body))
  } catch (err) {
    console.error("Error while creating omen", err.message)
    next(err)
  }
})

//update omen
router.put("/animal", async (req, res, next) => {
  try {
    res.json(await omens.updateOmen(req.params.animal, req.body))
  } catch (err) {
    console.error("Error while updating omen", err.message)
    next(err)
  }
})

module.exports = router
