const express = require("express");
const dotenv = require("dotenv");
const cors = require('cors');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const eventRoute = require("./routes/event");
const categoryRoute = require("./routes/category");
const errorHandler = require('./middlewares/ErrorHandler');

dotenv.config();


connectDB();
const app = express();

//Enable CORS
app.use(cors());

// Sanitize data
app.use(mongoSanitize());

//Prevents XSS Attack
app.use(xss());

//Body parser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));



app.use(express.json());



//Mount route
app.use("/api/events", eventRoute);
app.use("/api/categories",categoryRoute)


app.use(errorHandler);
const PORT = process.env.PORT || 5000;

const server = app.listen(
    PORT,
    console.log(`server running on port ${PORT}`)
);
module.exports = server




