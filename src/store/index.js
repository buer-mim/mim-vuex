import Vue from 'vue';
import Vuex from './vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        number: 1
    },
    getters: {
        doubleNumber(state){
            return state.number * 2;
        }
    },
    mutations: {
        add: (state, val) => {
            state.number += val;
        },
        sub: (state, val) => {
            state.number -= val;
        }
    },
    actions: {
        addFive(state, val){
            state.number += val;
        }
    }
});