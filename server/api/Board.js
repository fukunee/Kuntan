module["exports"] = socket => {
    //update board title
    socket.on('updateBoard', board => {
        socket.broadcast.to(board._id).emit('updateBoard', board);
    });

};
