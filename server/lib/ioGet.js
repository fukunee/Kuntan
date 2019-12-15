function Response() {
    this.time = Date.now();
    this.data = undefined;
}

function ioGet(socket, apiName, validator, controller) {
    socket.on(apiName, async req => {
        const res = new Response();
        let err = await validator(req);
        res.data = err ? err : await controller(req);
        console.log(res);
        socket.emit(apiName, res);
    })
}

module['exports'] = ioGet;
