const CART_KEY = 'cart'
const cart = JSON.parse(localStorage.getItem(CART_KEY))

const state = {
    cartItems: cart || [],
    cartIsEmpty: true
}

const mutations = {
    UPDATE_CART_ITEMS(state, payload) {
        state.cartItems = payload;
        state.cartIsEmpty = payload.length <= 0;
        localStorage.setItem(CART_KEY, JSON.stringify(state.cartItems))
    },
    ADD_ITEM(state, item) {
        let foundItem = state.cartItems.find(e => e['sku'] === (item['Артикул'] === undefined ? item['sku'] : item['Артикул']))
        let index = state.cartItems.indexOf(foundItem)
        if (index === -1) {
            state.cartItems.push({
                "sku": item['sku'] === undefined ? item['Артикул'] : item['sku'],
                "product": item['product'] === undefined ? item['Товар'] : item['product'],
                "quantity": 1,
                "price": item['price'] === undefined ? item['Цена'] : item['price']
            })
        } else {
            state.cartItems[index].quantity++;
        }
        localStorage.setItem(CART_KEY, JSON.stringify(state.cartItems))
    },
    REMOVE_ITEM(state, item) {
        let foundItem = state.cartItems.find(e => e['sku'] === item['sku'])
        foundItem.quantity--;
        if (foundItem.quantity === 0) {
            state.cartItems.splice(state.cartItems.indexOf(foundItem), 1);
        }
        localStorage.setItem(CART_KEY, JSON.stringify(state.cartItems))
    },
}

const actions = {
    addCartItem({commit, rootGetters}, cartItem) {
        commit('ADD_ITEM', cartItem)
    },
    removeCartItem({commit, rootGetters}, articul) {
        commit('REMOVE_ITEM', articul)
    },
    removeAllCartItems({commit}) {
        commit('UPDATE_CART_ITEMS', [])
    }
}

const getters = {
    cartItems: state => state.cartItems,
    cartTotal: state => {
        return state.cartItems.reduce((acc, cartItem) => {
            return (cartItem.quantity * cartItem.price) + acc;
        }, 0).toFixed(2);
    },
    cartQuantity: state => {
        return state.cartItems.reduce((acc, cartItem) => {
            return cartItem.quantity + acc;
        }, 0);
    },
    cartIsEmpty: state => state.cartItems.length === 0
}

const cartModule = {
    state,
    mutations,
    actions,
    getters
}
export default cartModule;
