
const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
    windowMs: 30 * 60 * 1000,
    max: 4,
    message: 'Trop de requêtes depuis cette adresse IP, veuillez réessayer plus tard.',

});


module.exports = limiter;
