import Vue from "vue";
import Router from "vue-router";
import Login from './views/login'

Vue.use(Router);

export default new Router({
  // mode: "history",
    routes:[
      {
        path:'/login',
        name:'login',
        component:Login
      }
    ]

});
