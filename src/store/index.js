import { createStore } from "vuex";
import axios from "axios";

export default createStore({
    state: {
        user: {},
        isAuth: false,
        unAuth: false,
        userI: [],
        cdn: "https://admin-foodtuck.devup.kz",
        searchData: null,
    },
    getters: {
        getUnAuth: (state) => state.unAuth,
        getIsAuth: (state) => state.isAuth,
        getUser: (state) => state.setUser,
        SEARCH_RESULT: (state) => state.searchData 
    },
    mutations: {
        SET_USER(state, user) {
            state.user = user;
        },
        SET_AUTH(state, payload) {
            state.isAuth = payload;
        },
        SET_UN_AUTH(state, resp) {
            state.unAuth = resp;
        },
        setUser(state, userI) {
            state.setUser = userI;
        },
        SET_SEARCH(state, result) {
            state.searchData = result
        },
    },
    actions: {
        checkAuth({ commit, state }) {
            if (localStorage.getItem("access_token")) {
                commit("SET_AUTH", true);
            }
        },
        logout({ commit }) {
            localStorage.removeItem("access_token");
            commit("SET_UN_AUTH", true);
            commit("SET_AUTH", false);
        },
        async GET_SEARCH_RESULT({commit}, {text}) {
            let result = await axios
            .get('get/' + 'search', {
                params: {
                  text: text
                }
            })
            console.log("searchData",result.data)
            commit('SET_SEARCH', result.data)
        },
    },
});