const express = require("express");
const dotenv = require("dotenv");
const cors = require('cors');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const connectDB = require('./config/db');
const eventRoute = require("./routes/event");
const categoryRoute = require("./routes/category");
const authRoute = require("./routes/auth");
const errorHandler = require('./middlewares/ErrorHandler');

const app = express();

dotenv.config();


connectDB();

// Sanitize data
app.use(mongoSanitize());

//Prevents XSS Attack
app.use(xss());

//Body parser
app.use(bodyParser.urlencoded({ extended: false }));
//Enable cookie parser
app.use(cookieParser());
app.use(express.json());

//Enable CORS
app.use(cors());

app.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Headers',
		'Origin, X-Requested-With, Content-Type,' +
		' Accept, Authorization, Access-Control-Allow-Origin');
	next();
})



//Mount route
app.use("/api/events", eventRoute);
app.use("/api/categories",categoryRoute);
app.use("/api",authRoute);



app.use(errorHandler);
const PORT = process.env.PORT || 5000;

const server = app.listen(
    PORT,
    console.log(`server running on port ${PORT}`)
);
module.exports = server




