const errorHandler = (err, req, res, next) => {

    let error = {...err };
    error.message = err.message;

    // console.log(err.name);

    //Mongoose bad Object
    if (err.name === 'CastError') {
        const message = `Resource not found with id of ${err.value}`;
        error = new Error(message, 404);
    }

    if (err.name === 'MongooseServerSelectionError') {
        const message = `connection timed out`;
        error = new Error(message, 404);
    }

    //Mongoose duplicate key
    if (err.code === 11000) {
        const message = 'Duplicate field value entered';
        error = new Error(message, 400);
    }

    //Mongoose validation error
    if (err.name === 'ValidationError') {
        const message = Object.values(err.errors).map(val => val.message);
        error = new Error(message, 400);
    }

    res.status(error.statusCode || 500).json({
        success: false,
        error: error.message || 'Server Error'
    });
}

module.exports = errorHandler;
