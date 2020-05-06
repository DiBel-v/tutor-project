import Main from '../components/Main';
import Materials from '../components/Materials';
import Price from '../components/Price';
import Diplomas from '../components/Diplomas';

export const routes = [
    {
        path: '', redirect: 'main'
    },
    {
        path: '/main', component: Main 
    },
    {
        path: '/materials', component: Materials
    },
    {
        path: '/price', component: Price
    },
    {
        path: '/diplomas', component: Diplomas
    }
];