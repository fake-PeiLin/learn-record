const state = {
    count: 1
}

const getters = {
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

const mutations = {
    increment(state, n) {
        // state.count++
        state.count += n
    },
    decrement(state) {
        state.count--
    }
}


const actions = {
    add(context, n) {
        context.commit('increment', n)
    },
    decrement({ commit, state }) {
        console.log('actions.decrement.sate.count', state.count)
        commit('decrement')
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}




