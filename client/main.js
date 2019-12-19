import Vue from 'vue'
import App from './view/App.vue'
import store from './store';
import {Layout, Button, Form, Input, Col, Row, Icon} from 'ant-design-vue'
import VueRouter from 'vue-router';
import router from './runtime/router'

// Debug Mode Setup
Vue.config.productionTip = false;

// Vue-Router Setup
Vue.use(VueRouter);

// AntDesign Setup
Vue.use(Layout);
Vue.use(Button);
Vue.use(Form);
Vue.use(Input);
Vue.use(Row);
Vue.use(Col);
Vue.use(Icon);

// Vue Instance Init
new Vue({
    store,
    router,
    render: h => h(App),
}).$mount('#app');

