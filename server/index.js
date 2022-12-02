const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = 8000;
const dotenv = require("dotenv").config();

try {
    mongoose.connect(process.env.MONGODB_URL);
    console.log("DB is ready");
} catch (error) {
    console.log("error");
}

app.listen(PORT, () => {
    console.log("Server is ready");
});
