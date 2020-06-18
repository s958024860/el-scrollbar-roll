import Vue from 'vue'
import VueRouter from 'vue-router'
import RouteA from '../components/RouteA'
import RouteB from '../components/RouteB'

Vue.use(VueRouter)

const routes = [
  {
    path: '/routeA',
    name: 'routeA',
    component: RouteA,
    // keepAlive: true,
  },
  {
    path: '/routeB',
    name: 'routeB',
    component: RouteB,
    // keepAlive: true,
  }
]

const router = new VueRouter({
  routes,
  mode: 'hash'
})

export default router
