const express = require("express")
const app = express()
const cors = require("cors")
const helmet = require("helmet")
const morgan = require("morgan")
const dotenv = require("dotenv")

const authRoute = require("./routes/auth")
const userRoute = require("./routes/users")
const productRoute = require("./routes/products")
dotenv.config()


app.use(cors());
app.use(express.json());
app.use(helmet())
app.use(morgan("common"))

//--------------------------------
app.use("/api/auth", authRoute)
app.use("/api/users", userRoute)
app.use("/api/products", productRoute)

app.listen(process.env.APP_PORT || 8000, () => {
    console.log("ApiServer1 is running!");
})