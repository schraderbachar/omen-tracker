const express = require("express")
const app = express()
const cors = require("cors")
app.use(express.json())
app.use(cors())
app.use(express.urlencoded({ extended: true }))
const omensRouter = require("./routes/omens")

app.get("/", (req, res) => {
  res.json({ message: "ok" })
})

app.use("/omens", omensRouter)

//to handle errors
app.use((err, req, res, next) => {
  const stat = err.statusCode || 500
  console.error(err.message, err.stack)
  res.status(stat).json({ message: err.message })
  return
})

// Start the server
const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`)
})
