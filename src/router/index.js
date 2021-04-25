import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
// import About from '../views/About.vue'
// import Projects from '../views/Projects.vue'
// import Contact from '../views/Contact.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Home.vue'),
    // component: Home,
    meta: {
      auth: true,
      title: 'Home',
      home: 'Home'
    }
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import( /* webpackChunkName: "about" */ '../views/About.vue')
    component: () => import('../views/About.vue'),
    meta: {
      auth: true,
      title: 'About me',
      home: 'Back'
    }
  },
  {
    path: '/projects',
    name: 'projects',
    component: () => import('../views/Projects.vue'),
    meta: {
      auth: true,
      title: 'Projects',
      home: 'Back'
    }
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/Contact.vue'),
    meta: {
      auth: true,
      title: 'Contact me',
      home: 'Back'
    }
  },
  // Catch 404 or illegitimate urls etc
  {
    path: '/:catchAll(.*)',
    name: 'notfound',
    component: () => import('../views/PageNotFound.vue'),
    meta: {
      auth: false,
      title: 'Error - Page not found',
      home: 'Back'
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
