require('dotenv').config();
const express = require("express");
const connectDB = require('./config/db')

const app = express();

//Connect Database
connectDB()

//Init Middleware
app.use(express.json({ extended: false }))

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server started ${PORT}`));
