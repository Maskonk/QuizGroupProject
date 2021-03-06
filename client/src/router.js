import Vue from 'vue';
import Router from 'vue-router';
import Home from "@/views/Home";
import Learn from "@/views/Learn";
import Map from "@/views/Map";
import Quiz from "@/views/Quiz";
import Board from "@/views/Board";
import About from "@/views/About";
import Info from "@/views/Info"
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
            component: Learn
        },
        {
            path: '/map',
            name: 'map',
            component: Map
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
            path: '/board',
            name: 'board',
            component: Board
        },
        {
          path: '/info',
          name: 'info',
          component: Info
        },
        {
            path: '/about',
            name: 'about',
            component: About
        },
    ]});

export default router;
