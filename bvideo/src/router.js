import Vue from "vue";
import Router from "vue-router";
import Login from './views/login';
import Layout from './components/Layout.vue'

Vue.use(Router);

export default new Router({
  // mode: "history",
    routes:[
      {
        path:'/login',
        name:'login',
        component:Login
      },
      {
        path:'/',
        name:'layout',
        component:Layout
      }
    ]
});
