import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
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

const router = new VueRouter({
  routes
})

export default router
