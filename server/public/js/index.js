let socket = io(); // 建立链接
socket.on('msg', function (data) { // 监听服务端的消息“msg”
    socket.emit('msg', {rp: "fine,thank you"}); //向服务器发送消息
    console.log(data);
});