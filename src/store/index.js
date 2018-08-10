import Vue from 'vue';
import Vuex from "vuex";
import { state } from "./state";

Vue.use(Vuex);

export default new Vuex.Store({
    state,
    // mutations,
    // getters,
    // actions
});

// export default new Vuex.store({
//     modules
// });