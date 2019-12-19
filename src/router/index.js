import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Projects from '../views/Projects.vue'
import Contact from '../views/Contact.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
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
    component: About,
    meta: {
      auth: true,
      title: 'About me',
      home: '🠐 Back'
    }
  },
  {
    path: '/projects',
    name: 'projects',
    component: Projects,
    meta: {
      auth: true,
      title: 'Projects',
      home: '🠐 Back'
    }
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact,
    meta: {
      auth: true,
      title: 'Contact me',
      home: '🠐 Back'
    }
  }
]

const router = new VueRouter({
  routes
})

export default router
