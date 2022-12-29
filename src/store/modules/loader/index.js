const state = {
    loading: false
}

const mutations = {
    UPDATE_LOADER(state, payload) {
        state.loading = payload;
    }
}


const actions = {
    startLoading({commit}) {
        commit('UPDATE_LOADER', true)
    },
    stopLoading({commit}) {
        commit('UPDATE_LOADER', false)
    }
}

const getters = {
    isLoading: state => state.loading,
}

const loaderModule = {
    state,
    mutations,
    actions,
    getters
}

export default loaderModule;