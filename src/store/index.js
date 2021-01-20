import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";


Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [],
    displayProducts: [],
    productsnotification: [],
    displayProductsNotification: [],
    rowsnotification: 0,
    rows: 0,
    showSpinner: false,
    openCards: ''
  },
  mutations: {
    SET_PRODUCTS(state, products) {
      state.products = products;
    },
    SET_ROWS(state, rows) {
      state.rows = rows;
    },
    SET_DISPLAY_PRODUCTS(state, displayProducts) {
      state.displayProducts = displayProducts;
    },
    SET_SPINNER(state, spinner) {
      state.showSpinner = spinner;
    },
    SET_OPENCARDS(state, opencards){
      state.openCards = opencards
    }
  },
  actions: {
    async fetchData({ commit, state }) {
      commit("SET_SPINNER", true);
      return new Promise(resolve => {
        setTimeout(async () => {
          await axios.get("https://inventoryonclickback.herokuapp.com/products/").then(response => {var datos = response.data; commit("SET_PRODUCTS", datos);});
          const val = state.products;
          resolve(val);
          commit("SET_SPINNER", false);
        }, 1000);
      });
    },
    updatePagination({ commit, dispatch }, { myJson, currentPage, perPage }) {
      commit("SET_PRODUCTS", myJson);
      commit("SET_ROWS", myJson.length);
      dispatch("paginate", { currentPage, perPage });
    },
    async fetchProducts({ dispatch }) {
      const myJson = await dispatch("fetchData");
      dispatch("updatePagination", { myJson, currentPage: 1, perPage: 8 });
      return myJson;
    },
    async paginate({ commit, state }, { currentPage, perPage }) {
      const start = (currentPage - 1) * perPage;
      const products = state.products.slice(start, start + 8);
      commit("SET_DISPLAY_PRODUCTS", products);
    },
    async search({ dispatch }, { text }) {
      const myJson = await dispatch("fetchData");
      const values = myJson.filter(val => {
        return val.name.toLowerCase().includes(text.toLowerCase());
      });

      dispatch("updatePagination", {
        myJson: values,
        currentPage: 1,
        perPage: 10
      });
    },
    changeOpencards({ commit }, state){
      commit("SET_OPENCARDS", state)
    }

  },
  getters: {
    getProducts(state) {
      return state.products;
    },
    getRows(state) {
      return state.rows;
    },
    getDisplayProducts(state) {
      return state.displayProducts;
    },
    getSpinner(state) {
      return state.showSpinner;
    },
    getOpencards(state) {
      return state.openCards
    }
  },
  modules: {}
});
