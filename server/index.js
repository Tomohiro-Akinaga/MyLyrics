const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = 8000;
const dotenv = require("dotenv").config();
const CryptoJS = require("crypto-js");
const User = require("./src/v1/models/user");

try {
    mongoose.connect(process.env.MONGODB_URL);
    console.log("DB is ready");
} catch (error) {
    console.log("error");
}

// User Registration API
app.post("/register", async (req, res) => {
    const password = req.body.password;

    try {
        req.body.password = CryptoJS.AES.encrypt(
            password,
            process.env.SECRET_KEY
        );
        const user = await User.create(req.body);
    } catch {}
});

app.listen(PORT, () => {
    console.log("Server is ready");
});
