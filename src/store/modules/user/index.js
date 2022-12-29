import router from "@/router";
import {ApiClient} from "@/apiClient";

const user = JSON.parse(localStorage.getItem('user'));
const tg = JSON.parse(localStorage.getItem('tg'));

const state = {
    loggedIn: !!user,
    user: user || null,
    tg: tg || null,
    errorMessage: null
}

const mutations = {
    UPDATE_TELEGRAM_ID(state, payload) {
        state.tg = payload;
        localStorage.setItem('telegram_id', payload)
    },
    LOGIN_FAILURE(state) {
        state.loggedIn = false;
        state.user = null;
        localStorage.removeItem('user')
    },
    LOGIN_SUCCESS(state, payload) {
        state.loggedIn = true;
        state.user = payload;
        localStorage.setItem('user', JSON.stringify(payload))
    },
    LOGOUT_SUCCESS(state) {
        state.loggedIn = false;
        state.user = null;
        localStorage.removeItem('user')
    },
    UPDATE_ERROR_MESSAGE(state, payload) {
        state.errorMessage = payload
    }
}

const actions = {
    login({commit, state}, payload) {
        this.dispatch('startLoading', null, {root: true})
        ApiClient
            .post(`login`, {
                "name": Telegram.WebApp.initDataUnsafe.user.id,
                "inn": payload.inn,
                "initData": Telegram.WebApp.initData
            })
            .then(async (response) => {
                this.dispatch('stopLoading', null, {root: true})
                const action = response.data.action;
                if (action === 'New buyer created' || action === 'Existing buyer found') {
                    commit('LOGIN_SUCCESS', response.data)
                    commit('UPDATE_ERROR_MESSAGE', null)
                    await router.push({name: 'menu'})
                } else {
                    commit('LOGIN_FAILURE', response)
                    commit('UPDATE_ERROR_MESSAGE', action)
                }
            })
            .catch(err => {
                commit('LOGIN_FAILURE', err.message)
                commit('UPDATE_ERROR_MESSAGE', err.message)
                console.log(err);
            });
    },
    logout({commit}) {
        commit('LOGOUT_SUCCESS')
    },
    registerUser({commit, state}, payload) {
        this.dispatch('startLoading', null, {root: true})
        ApiClient
            .post(`register`, {
                "name": Telegram.WebApp.initDataUnsafe.user.id,
                "inn": payload.inn,
                "email": payload.email,
                "initData": Telegram.WebApp.initData
            })
            .then(async response => {
                this.dispatch('stopLoading', null, {root: true})
                const action = response.data.action;
                if (action === 'New buyer created' || action === 'Existing buyer found') {
                    commit('LOGIN_SUCCESS', response.data)
                    commit('UPDATE_ERROR_MESSAGE', null)
                    await router.push({name: 'checkout1'})
                } else {
                    commit('LOGIN_FAILURE', response)
                    commit('UPDATE_ERROR_MESSAGE', action)
                }
            })
            .catch(async err => {
                commit('LOGIN_FAILURE', err.message)
                commit('UPDATE_ERROR_MESSAGE', err.message)
                console.log(err);
                await router.push({name: 'menu'})
            });
    },
    setTelegramId({commit, state}) {
        let tg = window.Telegram?.WebApp?.initDataUnsafe?.user?.id
        commit('UPDATE_TELEGRAM_ID', tg)
    }
}

const getters = {
    user: state => state.user,
    loggedIn: state => state.loggedIn,
    errorMessage: state => state.errorMessage,
    telegramId: state => state.tg
}

const userModule = {
    state,
    mutations,
    actions,
    getters
}

export default userModule;