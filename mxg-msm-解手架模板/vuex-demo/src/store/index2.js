import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const home = {
    state: {
        count: 1
    },

    mutations: {
        increment(state, n) {
            // state.count++
            state.count += n
        },
        decrement(state) {
            state.count--
        }
    },

    actions: {
        add(context, n) {
            context.commit('increment', n)
        },
        decrement({ commit, state }) {
            console.log('actions.decrement.sate.count', state.count)
            commit('decrement')
        }
    },

    getters: {
        desc(state) {
            if (state.count < 50) {
                return '吃饭'
            } else if (state.count < 100) {
                return '睡觉'
            } else {
                return '打豆豆'
            }
        }
    }
}

const goods={
    state:{

    },
    mutations:{

    },
    actions:{

    },
    getters:{

    }
}

const store = new Vuex.Store({
    modules:{
        home,
        goods,

    }
})

export default store