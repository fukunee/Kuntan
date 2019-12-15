import Vue from 'vue'
import store from './store.js'
import App from './App.vue'
// noinspection NpmUsedModulesInstalled
import VueSocketIO from 'vue-socket.io'

Vue.config.productionTip = false;

Vue.use(new VueSocketIO({
    debug: true,
    connection: 'ws://localhost:8080',
    vuex: {
        store,
        actionPrefix: 'SOCKET_',
        mutationPrefix: 'SOCKET_'
    }
}));

new Vue({
    render: h => h(App),
}).$mount('#app');

