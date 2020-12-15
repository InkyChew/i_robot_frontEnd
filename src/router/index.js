import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "index" */ '../views/Index.vue')
  },
  {
    path: '/auth',
    name: 'AuthPage',
    component: () => import(/* webpackChunkName: "auth" */ '../views/AuthPage.vue')
  },
  {
    path: '/investment',
    name: 'InvestmentPage',
    component: () => import(/* webpackChunkName: "investment" */ '../views/Investment.vue')
  },
  {
    path: '/investMobile',
    name: 'investMobilePage',
    component: () => import(/* webpackChunkName: "investMobile" */ '../views/InvestMobile.vue')
  },
  {
    path: '/news',
    name: 'News',
    component: () => import(/* webpackChunkName: "news" */ '../views/News.vue')
  },
  {
    path: '/newsPage',
    name: 'NewsPage',
    component: () => import(/* webpackChunkName: "newsPage" */ '../views/NewsPage.vue')
  },
  {
    path: '/performance',
    name: 'Performance',
    component: () => import(/* webpackChunkName: "performance" */ '../views/Performance.vue')
  },
  {
    path: '/classroom',
    name: 'Classroom',
    component: () => import(/* webpackChunkName: "classroom" */ '../views/Classroom.vue')
  },
  // Exhibit
  {
    path: '/exhibit',
    name: 'Exhibit',
    component: () => import(/* webpackChunkName: "exhibit" */ '../views/Exhibit.vue')
  }
]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
