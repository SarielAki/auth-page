import Vue from 'vue'
import VueRouter from 'vue-router'
import AuthLogin from "@/components/auth/Login";

Vue.use(VueRouter)

const routes = [
    { path: '/' },
    {
        path: '/login',
        name: 'loginForm',
        component: AuthLogin
    }

]

const router = new VueRouter({
    routes,
    mode: 'history'
})

export default router