module["exports"] = io => {
    io.use((socket, next) => {
        //TODO verify token
        let token = socket.handshake.query.token;
        if (token) {
            //TODO 用户访问控制，查Client表，若已建立WS通信则报错
            //TODO 将socket对象中插入用户信息
            return next();
        } else {
            console.log('authentication error');
            return next(new Error('authentication error'));
        }
    });

    io.on('connection', socket => {
        console.log(`A user connected with socket id ${socket.id}`);
        //Update, Delete, Add user, remove user
        require('../api/BoardRoute')(socket);
        //Add, Delete, update list order
        require('../api/ResourceRoute')(socket);
        //Add, Delete, update, add user, remove user
        require('../api/TableRoute')(socket);
        socket.on('disconnect', () => {
            socket.emit('DISCONNECT');
            console.log(`A user disconnected with socket id ${socket.id}`);
        });
    });
};
