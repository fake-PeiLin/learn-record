import {getToken, setToken, setUser, getUser, removeToken} from '@/utils/auth'
import { login, getUserInfo, logout} from '@/api/login'


const user = {
    state: {
        token: null,
        user: null
    },

    mutations: {
        SET_TOKEN(state, token){
            state.token=token
        },
        SET_USER(state, user){
            state.user=user
        }
    },

    actions:{
        Login({commit},form){
            login(form.username.trim(),form.password).then(response=>{
                const resp=response.data
                commit('SET_TOKEN',resp.data.token)
            })
        }
    }
}

export default user