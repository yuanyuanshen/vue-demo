import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/page/home/Home'
import City from '@/page/city/City'
import Login from '@/page/login/Login'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/city/:cityid',
            name: 'City',
            component: City
        },
        {
            path: '/login',
            name: 'Login',
            component: Login
        }
    ]
})