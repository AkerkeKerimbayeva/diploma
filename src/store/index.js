import { createStore } from "vuex";
import axios from "axios";
import { calculateAmount, calculateTotal, copyFunc } from "@/function";
export default createStore({
    state: {
        user: {},
        isAuth: false,
        unAuth: false,
        userI: [],
        cdn: "https://admin-foodtuck.devup.kz",
        searchData: null,
        cart: []
    },
    getters: {
        getUnAuth: (state) => state.unAuth,
        getIsAuth: (state) => state.isAuth,
        getUser: (state) => state.setUser,
        SEARCH_RESULT: (state) => state.searchData,
        cart: ({ cart }) => cart,
        delItem: ({ delItem }) => delItem,
        Total: ({ Total }) => Total,
        TotalPositions: ({ TotalPositions }) => TotalPositions,
        Products: ({ items }) => items 
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
        ADD_ITEM: (state, item) => {
        state.TotalPositions++;
        if (item.id in state.cart) {
            state.cart[item.id].qt++;
        } else {
            // let stateItem = { ...item };
            // stateItem.qt = 1;
            // state.cart[item.id] = stateItem;
        }
        state.Total = calculateAmount(state.cart);
        },
        REMOVE_ITEM: (state, item) => {
            state.delItem = {};
            state.delItem = copyFunc(state.cart, state.delItem, item);
            delete state.cart[item];
            state.Total = calculateAmount(state.cart);
            state.TotalPositions = calculateTotal(state.cart);
        },
        CHENGE_QT: state => {
            state.TotalPositions = calculateTotal(state.cart);
            state.Total = calculateAmount(state.cart);
        },
        REVIVA: state => {
            state.cart = Object.assign(state.delItem, state.cart);
            state.Total = calculateAmount(state.cart);
            state.TotalPositions = calculateTotal(state.cart);
        }
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
        addToItems: ({ commit }, item) => commit("ADD_ITEM", item),
        removeItem: ({ commit }, item) => commit("REMOVE_ITEM", item),
        chengeQt: ({ commit }) => commit("CHENGE_QT"),
        revivalItem: ({ commit }) => commit("REVIVA")
    },
});