import { createStore } from "vuex";
import axios from "axios";
import { calculateAmount, calculateTotal, copyFunc } from "@/function";
export default createStore({
    state: {
        user: {},
        isAuth: false,
        unAuth: false,
        userI: [],
        product: [],
        cdn: "https://admin-foodtuck.devup.kz",
        searchData: null,
        cartLength: 0,
        cartList: JSON.parse(localStorage.getItem("cart_products")) || [],
        productById: [],
    },
    getters: {
        getUnAuth: (state) => state.unAuth,
        getIsAuth: (state) => state.isAuth,
        getUser: (state) => state.setUser,
        SEARCH_RESULT: (state) => state.searchData,
        GET_CART_LENGTH: (state) => state.cartLength,
        GET_CART_LIST: (state) => state.cartList,
        GET_PRODUCTS_BY_ID: (state) => state.productById,
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
        SET_INFO(state, info) {
            state.info = info;
        },
        SET_CART_LENGTH(state, length) {
            state.cartLength = length;
        },
        SET_CART_LIST(state, cartList) {
            state.cartList = cartList;
        },
        SET_PRODUCT_BY_ID(state, product) {
            state.productById = product;
        },
        SET_CART_COUNT(state, { id, count }) {
            state.cartList.forEach((item, idx) => {
                if (item.id == id) {
                    state.cartList[idx].count = count;
                }
            });
            localStorage.setItem("cart_products", JSON.stringify(state.cartList));
        },
        ADD_TO_CART(state, { product, countValue }) {
            product["count"] = countValue ? countValue : 1;
            let cartList = JSON.parse(localStorage.getItem("cart_products"));
            localStorage.setItem("cart_products", JSON.stringify([product]));
            if (cartList == null) {
              localStorage.setItem("cart_products", JSON.stringify([product]));
              state.cartLength = localStorage.getItem("cart_products").length;
              state.cartList = cartList;
              alert("Добавлено в корзину");
            } else if (cartList == []) {
              cartList.push(product);
              localStorage.setItem("cart_products", JSON.stringify(cartList));
              state.cartLength = cartList.length;
              state.cartList = cartList;
              alert("Добавлено в корзину");
            } else if (cartList.find((item) => item.id == product.id)) {
              cartList.forEach((item, index) => {
                if (item.id == product.id) {
                  cartList.splice(index, 1);
                }
              });
              localStorage.setItem("cart_products", JSON.stringify(cartList));
              state.cartLength = cartList.length;
              state.cartList = cartList;
              alert("Добавлено в корзину");
            } else {
              cartList.push(product);
              state.cartLength = cartList.length;
              localStorage.setItem("cart_products", JSON.stringify(cartList));
              state.cartList = cartList;
              alert("Добавлено в корзину");
            }
          },
        ADD_TO_CART_PRODUCT(state, { product, countValue }) {
            product["count"] = countValue ? countValue : 1;
            let cartList = JSON.parse(localStorage.getItem("cart_products"));
            if (cartList && cartList.find((item) => item.id == product.id)) {
              cartList.filter((i) => {
                if (i.id === product.id) {
                  i.count = countValue;
                  localStorage.setItem("cart_products", JSON.stringify(cartList));
                }
              });
              return false;
            } else if (cartList !== null) {
              cartList.push(product);
              localStorage.setItem("cart_products", JSON.stringify(cartList));
              state.cartLength = localStorage.getItem("cart_products");
            } else {
              localStorage.setItem("cart_products", JSON.stringify([product]));
              state.cartLength = localStorage.getItem("cart_products");
            }
          },
        DELETE_PRODUCT(state, { id }) {
            let cartList = state.cartList.filter((t) => t.id !== id);
            localStorage.setItem("cart_products", JSON.stringify(cartList));
            state.cartList = cartList;
            alert("Удалено из корзины");
            state.cartLength = cartList.length
            this.dispatch("CHECK_CARD_LIST");
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
        CART_LENGTH_ACTION({ commit }) {
          let data = localStorage.getItem("cart_products")
          let stringData = JSON.parse(data)
          commit("SET_CART_LENGTH", stringData.length);
        },
        CHECK_CARD_LIST({ commit }) {
          commit(
            "SET_CART_LIST",
            JSON.parse(localStorage.getItem("cart_products"))
          );
        },
    },
});