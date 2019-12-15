import Vue from 'vue'
import App from './App.vue'
import getSocket from './lib/io'
import {Layout} from 'ant-design-vue'

Vue.config.productionTip = false;

// Websocket Setup
getSocket();
// noinspection JSUnusedGlobalSymbols
Vue.prototype.$getSocket = getSocket;

// AntDesign Setup
Vue.use(Layout);

new Vue({
    render: h => h(App),
}).$mount('#app');

