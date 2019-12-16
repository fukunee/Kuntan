import Vue from 'vue'
// noinspection NpmUsedModulesInstalled
import VueSocketIO from 'vue-socket.io'
import {store} from "../store/store";

const socket = {
    // debug: true,
    connection: '',
    vuex: {
        store,
        actionPrefix: 'SOCKET_',
        mutationPrefix: 'SOCKET_'
    }
};

function getSocket(t) {
    const socketIp = 'ws://localhost:8080';//socket地址
    socket.connection = socketIp;
    if (localStorage.getItem('token') || t) {//判断是否有token
        let token = localStorage.getItem('token') ? localStorage.getItem('token') : t;
        socket.connection = socketIp + '?token=' + token;
    }
    Vue.use(new VueSocketIO(socket))
}

export default getSocket