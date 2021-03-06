import Vue from "vue";
import Router from "vue-router";
import Login from "./components/Login.vue";
import Login2 from "./components/Login2.vue";
import SignUp from "./components/SignUp.vue";

import UpdateClass from "./components/UpdateClass.vue";

import LoggedIn from "./components/LoggedIn.vue";
Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    { path: "", component: Login },
    { path: "/Login2", component: Login2 },
    { path: "/SignUp", component: SignUp },
    /* { path: "/Home", component: Home },*/
    /* { path: "/AddClasses", component: AddClasses },*/
    { path: "/UpdateClass", component: UpdateClass },
    /*{ path: "/DanceClasses", component: DanceClasses },*/
    { path: "/LoggedIn", component: LoggedIn }
  ]
});

// App
// Login
// Login2
// LoggedIn
