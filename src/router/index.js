import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        component: () => import('../App'),
        children: [
            {
                path: '/',
                component: () => import('../views/World'),
                name: 'world-view'
            },
            {
                path: '/country/:country',
                component: () => import('../views/Country'),
                name: 'country-view',
                props: true
            }
        ]
    },
  // {
  //   path: '/about',
  //   name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router
