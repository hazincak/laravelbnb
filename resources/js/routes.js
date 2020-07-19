import ExampleComponent from "./components/ExampleComponent";
import VueRouter from "vue-router";


const routes = [
    {
        path: "/",
        component: ExampleComponent,
        name: "home",
    },
];

const router = new VueRouter({
    routes, //short for `routes: routes`
});

export default router;