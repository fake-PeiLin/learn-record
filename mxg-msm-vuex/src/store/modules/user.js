import { getToken, setToken, setUser, getUser, removeToken } from '@/utils/auth'
import { login, getUserInfo, logout } from '@/api/login'
import { resolve } from 'url'


const user = {
    state: {
        token: getToken(),
        user: null
    },

    mutations: {
        SET_TOKEN(state, token) {
            state.token = token
            setToken(token)
        },
        SET_USER(state, user) {
            state.user = user
        }
    },

    actions: {
        Login({ commit }, form) {
            return new Promise((resolve, reject) => {
                login(form.username.trim(), form.password).then(response => {
                    const resp = response.data
                    commit('SET_TOKEN', resp.data.token)
                    resolve(resp)
                }).catch(error => {
                    reject(error)
                })
            })
        }
    }
}

export default user