// onConnection

const onDisconnect = require('./onDisconnect');

const onConnection = (socket) => {
    console.log(`⚡: ${socket.id} user just connected!`);

    socket.on('disconnect', onDisconnect(socket));
};

module.exports = onConnection;
