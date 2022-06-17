const express = require("express");
const dotenv = require("dotenv");
const cors = require('cors');
const mongoSanitize = require('express-mongo-sanitize');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const eventRoute = require("./routes/event");
const categoryRoute = require("./routes/category");
const errorHandler = require('./middlewares/ErrorHandler');

dotenv.config();


connectDB();
const app = express();

app.use(cors());
app.use(mongoSanitize());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));

app.use(errorHandler);

app.use(express.json());



//Mount route
app.use("/api/events", eventRoute);
app.use("/api/categories",categoryRoute)



const PORT = process.env.PORT || 5000;

const server = app.listen(
    PORT,
    console.log(`server running on port ${PORT}`)
);
module.exports = server




