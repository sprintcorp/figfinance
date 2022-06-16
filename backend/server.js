const express = require("express");
const dotenv = require("dotenv");
const mongoSanitize = require('express-mongo-sanitize');
const connectDB = require('./config/db');
const eventRoute = require("./routes/event");
const errorHandler = require('./middlewares/ErrorHandler');

dotenv.config();


connectDB();
const app = express();
app.use(mongoSanitize());

app.use(errorHandler);

app.use(express.json());



//Mount route
app.use("/api/events", eventRoute);



const PORT = process.env.PORT || 5000;

app.listen(
    PORT,
    console.log(`server running on port ${PORT}`)
);




