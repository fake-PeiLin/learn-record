import Vue from "vue";
import Router from "vue-router";
// import Home from "./views/Home.vue";
import Login from "./views/login";
import Layout from "@/components/Layout";
import Sn from "./views/sn";
import Sf from "./views/sf";
import Main from "./views/main"
Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "layout",
      component: Layout,
      redirect:'/home',
      children:[
        {
          path:'/home',
          component:Main,
        },
        {
          path:"/login",
          name:"login",
          component:Login
        },
        {
          path:"/sn",
          name:"sn",
          meta: {title: '热情少女'},
          component:Sn
        },
        {
          path:"/sf",
          name:"sf",
          meta: {title: '饥渴少妇'},
          component:Sf
        },
      ]
    },
  ]
});
