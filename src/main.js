import "@babel/polyfill";
import "mutationobserver-shim";
import Vue from "vue";
import "./plugins/bootstrap-vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import firebase from 'firebase';

Vue.config.productionTip = false

firebase.initializeApp({
  apiKey: "AIzaSyDimTHq-SNUmyfVaNIwPjNOB2QOfzrCcdE",
  authDomain: "inventory-on-click.firebaseapp.com",
  projectId: "inventory-on-click",
  storageBucket: "inventory-on-click.appspot.com",
  messagingSenderId: "1022545649353",
  appId: "1:1022545649353:web:386c58a73775466b667718"
})


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
