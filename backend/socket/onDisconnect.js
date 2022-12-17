// on disconnect function

const onDisconnect = () => (socket) => {
    console.log(`⚡: ${socket.id} user just disconnected!`);
};

module.exports = onDisconnect;
