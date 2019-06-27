import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Badge from './components/badge.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path:'/components/badge',
      component: Badge
    }
  
  ]
})
