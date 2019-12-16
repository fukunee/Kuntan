import Game from '../components/routes/Game';
import Home from '../components/routes/Home';

const routes = [
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
];

export default routes;
