module["exports"] = socket => {
    //update board title
    socket.on('updateBoard', board => {
        console.log(board);
    });

};
