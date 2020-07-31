require('./bootstrap');

import router from "./routes";
import VueRouter from "vue-router";
import Index from "./Index";
import moment from "moment";

import FatalError from "./shared/components/FatalError";
import StarRating from "./shared/components/StarRating";


window.Vue = require('vue');

Vue.use(VueRouter);

//Registering filter globally
Vue.filter("fromNow", value => moment(value).fromNow());


//GLOBAL REGISTRATION

Vue.component("star-rating", StarRating);
Vue.component("fatal-error", FatalError);

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
