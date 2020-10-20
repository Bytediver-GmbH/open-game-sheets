import Vue from 'vue'
import Router from 'vue-router'
import GameList from "@/components/GameList";
import Index from "@/components/Index";
import Game from "@/components/Game";

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Index',
            component: Index
        },
        {
            path: '/games',
            name: 'GameList',
            component: GameList
        },
        {
            path: '/game/:key',
            name: 'Game',
            component: Game
        }
    ]
})
