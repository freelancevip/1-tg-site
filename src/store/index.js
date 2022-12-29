import {createStore} from 'vuex'
import cartModule from './modules/cart'
import productModule from './modules/product'
import userModule from "./modules/user";
import orderModule from "./modules/orders";
import checkoutModule from "./modules/checkout";
import loaderModule from "./modules/loader";

export default createStore({
    modules: {
        cartModule,
        productModule,
        userModule,
        orderModule,
        checkoutModule,
        loaderModule
    }
})