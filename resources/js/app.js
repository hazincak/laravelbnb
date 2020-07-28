require('./bootstrap');

import router from "./routes";
import VueRouter from "vue-router";
import Index from "./Index";
import moment from "moment";

window.Vue = require('vue');

Vue.use(VueRouter);

//Registering filter globally
Vue.filter("fromNow", value => moment(value).fromNow());

//GLOBAL REGISTRATION
// Vue.component('example-component', require('./components/ExampleComponent.vue').default);

// Vue.component('example2-component', require('./components/Example.2.vue').default);

//LOCAL REGISTRATION
const app = new Vue({
    el: '#app',
    router, //short for `router: router`
    components:{
        "index": Index
    }
});
