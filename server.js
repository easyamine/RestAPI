const express = require("express");
const User = require("../models/User")
const mongoose = require("mongoose")
const routes = require("../models/routes")
const app = express()
require("dotenv/config")

mongoose.connect(
    process.env.DB_CONNECTION,
    {useNewUrlParser: true},
    () => {
        const app = express();
        app.use(express.json());
        app.use("/api", routes);
    })




app.listen(3000);