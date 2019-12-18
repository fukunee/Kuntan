import VueRouter from 'vue-router';
import Home from "../components/routes/Home.vue";
import Game from "../components/routes/Game.vue";

const router = new VueRouter([
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/game',
        name: 'game',
        component: Game
    }
]);

// router.beforeEach((to, from, next) => {
//   if()
// });

export default router;
