
module["exports"] = socket => {
    //update board title
    socket.on('updateBoard', board => {
        // noinspection JSUnresolvedVariable
        socket.broadcast.to(board._id).emit('updateBoard', board);
    });
};
