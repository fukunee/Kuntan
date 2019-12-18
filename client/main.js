import Vue from 'vue'
import App from './view/App.vue'
import store from './store';
import {Layout} from 'ant-design-vue'
import VueRouter from 'vue-router';
import router from './runtime/router'

// Debug Mode Setup
Vue.config.productionTip = false;

// Vue-Router Setup
Vue.use(VueRouter);

// AntDesign Setup
Vue.use(Layout);

// Vue Instance Init
new Vue({
    store,
    router,
    render: h => h(App),
}).$mount('#app');

