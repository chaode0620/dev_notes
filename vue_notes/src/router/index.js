import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const layoutRoutes = [{
    path: '/home',
    component: () => import('../views/home')
}, {
    path: '/component',
    component: () => import('../views/component')
}, {
    path: '/animate',
    component: () => import('../views/animate')
}]

const routes = [{
    path: '/',
    redirect: !layoutRoutes[0] ? '' : layoutRoutes[0].path,
    component: () => import('../layout'),
    children: layoutRoutes
}, {
    path: '*',
    component: () => import('../pages/error')
}]

const router = new VueRouter({
    // mode: 'history',
    // base: process.env.BASE_URL,
    routes
})

export default router
