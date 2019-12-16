import Vue from 'vue'
import App from './App.vue'
import {store} from './store/store';
import getSocket from './lib/io'
import {Layout, Form, Button, Input, Select} from 'ant-design-vue'
import VueRouter from 'vue-router';
import router from './router'

// Debug Mode Setup
Vue.config.productionTip = false;

// Vue-Router Setup
Vue.use(VueRouter);

// Websocket Setup
// noinspection JSUnusedGlobalSymbols
Vue.prototype.$getSocket = getSocket;
getSocket();

// AntDesign Setup
Vue.use(Layout);
Vue.use(Button);
Vue.use(Form);
Vue.use(Input);
Vue.use(Select);

// Vue Instance Init
new Vue({
    store,
    router,
    render: h => h(App),
}).$mount('#app');

