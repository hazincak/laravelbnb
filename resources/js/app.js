require('./bootstrap');

import router from "./routes";
import VueRouter from "vue-router";
import Vuex from 'vuex';
import Index from "./Index";
import moment from "moment";

import FatalError from "./shared/components/FatalError";
import Success from "./shared/components/Success";
import StarRating from "./shared/components/StarRating";
import ValidationErrors from "./shared/components/ValidationErrors";
import storeDefinition from "./store";


window.Vue = require('vue');

Vue.use(VueRouter);
Vue.use(Vuex);

//Registering filter globally
Vue.filter("fromNow", value => moment(value).fromNow());


//GLOBAL REGISTRATION

Vue.component("star-rating", StarRating);
Vue.component("fatal-error", FatalError);
Vue.component("success", Success);
Vue.component("v-errors", ValidationErrors);

const store = new Vuex.Store(storeDefinition);


// Vue.component('example-component', require('./components/ExampleComponent.vue').default);
// Vue.component('example2-component', require('./components/Example.2.vue').default);
//LOCAL REGISTRATION
const app = new Vue({
    el: '#app',
    router, //short for `router: router`
    store, //short for store: 'store'
    components:{
        "index": Index
    },
    beforeCreate(){
        this.$store.dispatch("loadStoredState");
    },
});
