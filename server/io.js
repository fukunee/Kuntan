module["exports"] = io => {
    io.use((socket, next) => {
        //TODO verify token
        let token = socket.handshake.query.t;
        if (token) {
            return next();
        }
        return next(new Error('authentication error'));
    });

    io.on('connection', socket => {
        console.log(`A user connected with socket id ${socket.id}`);
        socket.emit('CONNECT');

        //Update, Delete, Add user, remove user
        require('./api/Board')(socket);
        //Add, Delete, update list order
        require('./api/Resource')(socket);
        //Add, Delete, update, add user, remove user
        require('./api/Table')(socket);

        socket.on('disconnect', () => {
            socket.emit('DISCONNECT');

            console.log(`A user disconnected with socket id ${socket.id}`);
        });
    });
};
