import Vue from "vue"
// noinspection NpmUsedModulesInstalled
import VueSocketIO from "vue-socket.io"
import store from "../store";

const socket = {
    debug: true,
    connection: '',
    vuex: {
        store: store,
        actionPrefix: 'SOCKET_',
        mutationPrefix: 'SOCKET_'
    }
};

function getSocket(t) {
    // noinspection JSUnresolvedVariable
    const socketIp = 'ws://' + process.env.VUE_APP_BASEURL;
    socket.connection = socketIp;
    if (localStorage.getItem('token') || t) {
        let token = localStorage.getItem('token') ? localStorage.getItem('token') : t;
        socket.connection = socketIp + '?token=' + token;
    }
    Vue.use(new VueSocketIO(socket));
    return socket.id;
}

export default getSocket