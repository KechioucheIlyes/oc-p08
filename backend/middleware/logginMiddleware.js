// loggingMiddleware.js
const loggingMiddleware = (req, res, next) => {
    console.log(`Received request from ${req.ip} to ${req.method} ${req.url} `);
    next();
};

module.exports = loggingMiddleware;
