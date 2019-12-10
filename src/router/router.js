import Vue from 'vue'
import VueRouter from 'vue-router'
import AuthLogin from "@/components/auth/Login"
import AuthReg from "@/components/auth/Registration"

Vue.use(VueRouter)

const routes = [
    {path: '/'},
    {
        path: '/login',
        name: 'loginForm',
        component: AuthLogin
    },
    {
        path: '/registration',
        name: 'regForm',
        component: AuthReg
    }

]

const router = new VueRouter({
    routes,
    mode: 'history'
})

export default router