const logger = (req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.originalUrl}`);
    next(); 
};

const notFound = (req, res, next) => {
    res.status(404).json({ message: 'Resource not found' });
};

const errorHandler = (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'An unexpected error occurred' });
};

module.exports = {
    logger,
    notFound,
    errorHandler,
};
