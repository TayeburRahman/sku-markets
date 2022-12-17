const jwt = require('jsonwebtoken');

// middleware to check if user is authenticated
const isAuthenticated = (socket, next) => {
    let token = socket.handshake.auth.token;

    if (!token || !token.startsWith('Bearer')) {
        return next(new Error('Authentication error'));
    }

    token = token.split(' ')[1];

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            return next(new Error('Authentication error'));
        }
        socket.decoded = decoded;
        next();
    });
};

module.exports = isAuthenticated;
