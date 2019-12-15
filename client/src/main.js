import Vue from 'vue'
import App from './App.vue'
import getSocket from './lib/io'

Vue.config.productionTip = false;

// Websocket Setup
getSocket();
// noinspection JSUnusedGlobalSymbols
Vue.prototype.$getSocket = getSocket;

new Vue({
    render: h => h(App),
}).$mount('#app');

