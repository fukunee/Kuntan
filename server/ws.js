function ws(server) {
    this.io = require('socket.io')(server);
    this.io.on('connection', ws.on);
}

// websocket controller
ws.on = function (socket) {
    console.log('a user connected');

    // @Disconnect
    socket.on("disconnect", function () {
        console.log("a user go out");
    });
    socket.emit("msg");
    socket.on("msg", function (obj) {
        console.log('the websocket message is' + JSON.stringify(obj));
    })
};

module.exports = ws;
