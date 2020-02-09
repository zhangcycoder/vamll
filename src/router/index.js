import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Search from '../components/Home/Search/Search.vue'
import Content from '../components/Home/Content/Content.vue'
import tapBar from '../views/tapBar.vue'

import myinfo from '../components/MyInfo/myinfo.vue'
import Accident from '../components/Accident/Accident.vue'
import classify from '../components/classify/Classify.vue'
import Cart from '../components/ShopCart/Cart.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    components: {content:Home,tapBar},
    children: [
      {
        path: "/search",
        name: "search",
        components:{Search}
      },
      {
        path: "/Content",
        name: 'Content',
        components:{Content}
      }
    ]
  },
  {
    path: '/classify',
    name: "classify",
    components:{content:classify,tapBar}
  },
  {
    path: '/Accident',
    name: "Accident",
    components:{content:Accident,tapBar}
  },
  {
    path: '/Cart',
    name: "Cart",
    components:{content:Cart,tapBar}
  },
  {
    path: '/myinfo',
    name: "myinfo",
    components:{content:myinfo,tapBar}
  },
 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
