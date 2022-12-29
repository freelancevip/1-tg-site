import showError from "@/showError";
import {ApiClient} from "@/apiClient";

const state = {
    checkout: {
        number: null,
        date: null
    }
}

const mutations = {
    UPDATE_CHECKOUT(state, payload) {
        state.checkout = payload;
    }
}


const actions = {
    checkout({commit, rootState, rootGetters, dispatch}) {
        dispatch('startLoading', null, {root: true})
        const data = {
            buyer_name: rootGetters.user.name,
            buyer_inn: rootGetters.user.inn,
            products: rootGetters.cartItems
        }
        ApiClient
            .post(`checkout`, data)
            .then(response => {
                console.log(response.data);
                if (response.data.action === 'error, failed to create new order') {

                }
                if (response.data.success) {
                    commit('UPDATE_CHECKOUT', response.data)
                    commit('UPDATE_CART_ITEMS', [])
                } else {
                    showError(response.data.message)
                }
            })
    }
}

const getters = {
    checkoutNumber: state => state.checkout.number,
    checkoutDate: state => state.checkout.date,
}

const checkoutModule = {
    state,
    mutations,
    actions,
    getters
}

export default checkoutModule;