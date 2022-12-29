import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MenuView from '../views/MenuView.vue'
import SearchView from '../views/SearchView.vue'
import CartView from '../views/CartView.vue'
import OrdersView from '../views/OrdersView.vue'
import CallManager from '../views/CallManager.vue';
import Register from '../views/Register.vue';
import Checkout1 from '../views/Checkout1.vue';
import CheckoutRegistered from '../views/CheckoutRegistered.vue';
import store from "../store";

window.Telegram.WebApp.ready();
window.Telegram.WebApp.expand();
store.dispatch('setTelegramId');

const router = createRouter({
    history: createWebHistory(),
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView,
            meta: {requiredAuth: false}
        },
        {
            path: '/menu',
            name: 'menu',
            component: MenuView,
            meta: {requiredAuth: false}
        },
        {
            path: '/search',
            name: 'search',
            component: SearchView,
            meta: {requiredAuth: false}
        },
        {
            path: '/cart',
            name: 'cart',
            component: CartView,
            meta: {requiredAuth: false}
        },
        {
            path: '/orders',
            name: 'orders',
            component: OrdersView,
            meta: {requiredAuth: true}
        },
        {
            path: '/call-manager',
            name: 'call-manager',
            component: CallManager,
            meta: {requiredAuth: false}
        },
        {
            path: '/register',
            name: 'register',
            component: Register,
            meta: {requiredAuth: false}
        },
        {
            path: '/checkout1',
            name: 'checkout1',
            component: Checkout1,
            meta: {requiredAuth: false}
        },
        {
            path: '/checkout-registered',
            name: 'checkout-registered',
            component: CheckoutRegistered,
            meta: {requiredAuth: false}
        }
    ]
})

router.beforeEach(async (to, from, next) => {
    if (to.meta.requiredAuth) {
        let loggedIn = await store.getters["loggedIn"];
        if (!loggedIn) {
            return next({path: "/"});
        }
    }
    return next();
});

export default router
