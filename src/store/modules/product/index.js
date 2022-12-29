import {ApiClient} from "@/apiClient";

const state = {
    productItems: [],
    query: ''
}

const mutations = {
    UPDATE_PRODUCT_ITEMS(state, payload) {
        state.productItems = payload;
    },
    UPDATE_QUERY(state, payload) {
        state.query = payload
    }
}

const actions = {
    getProductItems({commit, dispatch}, payload) {
        commit('UPDATE_PRODUCT_ITEMS', [])
        commit('UPDATE_QUERY', '')
        if (!payload) {
            return
        }
        dispatch('startLoading', null, {root: true})
        ApiClient
            .get(`products/${payload}/`)
            .then((response) => {
                dispatch('stopLoading', null, {root: true})
                if (response.data) {
                    commit('UPDATE_PRODUCT_ITEMS', response.data)
                } else {
                    commit('UPDATE_PRODUCT_ITEMS', [])
                }
                commit('UPDATE_QUERY', payload)
            });
    }
}

const getters = {
    productItems: state => state.productItems,
    query: state => state.query
}

const productModule = {
    state,
    mutations,
    actions,
    getters
}

export default productModule;