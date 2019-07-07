import Vue from 'vue';
import Router from 'vue-router';
import Home from "@/views/Home";
// import Learn from "@/views/Learn";
// import Quiz from "@/views/Quiz";
// import Score from "@/views/Score";
import About from "@/views/About";


Vue.use(Router);

const router = new Router({route: [
        {
            path: '/',
            name: 'home',
            component: Home
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
        },
        {
            path: '/about',
            name: 'about',
            component: About
        },
    ]});

export default router;
