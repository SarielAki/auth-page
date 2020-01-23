import Vue from 'vue'
import Vuex from 'vuex'
import { moduleAuth } from '../store/modules/auth.js'

Vue.use(Vuex);

const store = new Vuex.Store({
        modules: {
            authStore: moduleAuth
        }
});

export default store