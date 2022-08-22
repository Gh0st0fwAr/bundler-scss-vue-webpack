// Import Vue
import Vue from 'vue';
import VueRouter from 'vue-router';

// Import Vue App, routes, store
import App from './App';
import routes from './routes';
import axios from 'axios'
// import '@fortawesome/fontawesome-free/js/fontawesome'
// import '@fortawesome/fontawesome-free/js/solid'
// import '@fortawesome/fontawesome-free/js/regular'


import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(fab)

Vue.component('font-awesome-icon', FontAwesomeIcon)

import '@/styles/main.scss';

Vue.prototype.axios = axios;
Vue.use(VueRouter);
const router = new VueRouter({
    routes,
    linkActiveClass: 'active',
    mode: 'history',
    base: "/"
});



new Vue({
    el: '#app',
    router,
    render: h => h(App)
});
