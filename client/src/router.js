import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

const router = new Router({route: [
        {
            path: '/',
            name: 'home',
            component: null
        },
        {
            path: '/about',
            name: 'about',
            component: null
        },
        {
            path: '/learn',
            name: 'learn',
            component: null
        },
        {
            path: '/quiz',
            name: 'quiz',
            component: null
        },
        {
            path: '/score',
            name: 'score',
            component: null
        }
    ]});