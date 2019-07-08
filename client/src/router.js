import Vue from 'vue';
import Router from 'vue-router';
import Home from "@/views/Home";
import Info from "@/views/Info";
import Quiz from "@/views/Quiz";
import About from "@/views/About";
import Score from "@/views/Score";


Vue.use(Router);

const router = new Router({
  routes:[
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/learn',
            name: 'learn',
            component: Info
        },
        {
            path: '/quiz',
            name: 'quiz',
            component: Quiz
        },
        {
            path: '/score',
            name: 'score',
            component: Score
        },
        {
            path: '/about',
            name: 'about',
            component: About
        },
    ]});

export default router;
