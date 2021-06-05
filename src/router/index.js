import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      // route level code-splitting
      // this generates a separate chunk (home.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // so instead of importing everything from the start
      // we dynamically import each page on visit so it's faster.
      // component: () => import( /* webpackChunkName: "home" */ '../views/Home.vue')
      component: () => import('../views/Home.vue'),
      meta: {
        auth: true,
        title: 'Home',
        home: 'Home'
      }
    },
    {
      path: '/about',
      name: 'about',
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
    {
      path: '/media',
      name: 'media',
      component: () => import('../views/Media.vue'),
      meta: {
        auth: true,
        title: 'Books and Movies',
        home: 'Back'
      }
    },
    {
      path: '/resume',
      name: 'resume',
      component: () => import('../views/Resume.vue'),
      meta: {
        auth: true,
        title: 'Curriculum Vitae',
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
})

export default router
