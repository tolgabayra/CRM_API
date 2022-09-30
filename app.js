const express = require("express")
const app = express()
const cors = require("cors")
const helmet = require("helmet")
const morgan = require("morgan")
const dotenv = require("dotenv")
const mongoose = require("mongoose")

const authRoute = require("./routes/auth")
const userRoute = require("./routes/users")
const productRoute = require("./routes/products")
dotenv.config()
mongoose
    .connect(process.env.DB_URL)
    .then(() => {
      console.log("DB Connection Successfull!");
    })
    .catch((err) => {
        console.log(err);
    })

app.use(cors({origin: true, credentials: true}));
app.use(express.json());
app.use(helmet())
app.use(morgan("common"))

//--------------------------------
app.use("/api/v1/auth", authRoute)
app.use("/api/v1/users", userRoute)
app.use("/api/v1/products", productRoute)

app.listen(process.env.APP_PORT || 8000, () => {
    console.log("ApiServer1 is running!");
})