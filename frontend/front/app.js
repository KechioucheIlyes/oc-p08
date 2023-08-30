const express = require("express")
const gitRouter = require("./routes/github/github")
const contactRouter = require("./routes/contact/contact")
const cors = require("cors")
const likesRouter = require("./routes/likes/likes")
const loggingMiddleware = require("./middleware/logginMiddleware")
const { default: helmet } = require("helmet")
const limiterMiddleware = require("./middleware/limiter")
const app = express()
app.use(helmet())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())



app.use(loggingMiddleware);
app.use(cors())

app.use("/github", gitRouter)
app.use("/contact", limiterMiddleware, contactRouter)
app.use("/likes", likesRouter)

module.exports = app

