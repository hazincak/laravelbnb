require('./bootstrap');

import router from "./routes";
import VueRouter from "vue-router";
import Index from "./Index";

window.Vue = require('vue');

Vue.use(VueRouter);


// Vue.component('example-component', require('./components/ExampleComponent.vue').default);

// Vue.component('example2-component', require('./components/Example.2.vue').default);


const app = new Vue({
    el: '#app',
    router, //short for `router: router`
    components:{
        "index": Index
    }
});
