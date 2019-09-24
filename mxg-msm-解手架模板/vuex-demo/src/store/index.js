import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
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
        decrement({commit,state}){
            console.log('actions.decrement.sate.count',state.count)
            commit('decrement')
        }
           
    }
})

export default store