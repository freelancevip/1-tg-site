import {axiosClientOld} from "@/apiClientOld";
import showError from "@/showError";

const state = {
    orders: {}
}

const mutations = {
    UPDATE_ORDERS(state, payload) {
        state.orders = payload;
    }
}

const actions = {
    getOrders({commit, rootGetters}, payload) {
        axiosClientOld
            .get(`orders`, {
                params: {
                    email: rootGetters.user.email,
                    tg: rootGetters.telegramId
                }
            })
            .then((response) => {
                if (response.data.success) {
                    commit('UPDATE_ORDERS', response.data.orders)
                } else {
                    showError(response.data.message)
                }
            });
    },
    cancelOrder({commit, rootGetters}, payload) {
        axiosClientOld
            .post(`orders/cancel`, {
                order_id: payload.order_id,
                email: rootGetters.user.email,
                tg: rootGetters.telegramId
            })
            .then((response) => {
                if (response.data.success) {
                    commit('UPDATE_ORDERS', response.data.orders)
                } else {
                    showError(response.data.message)
                }
            })
    }
}

const getters = {
    orders: state => state.orders
}

const orderModule = {
    state,
    mutations,
    actions,
    getters
}

export default orderModule;