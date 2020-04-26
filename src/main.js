import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Routes from './routes'
import firebase from 'firebase'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"

var firebaseConfig = {
    apiKey: "AIzaSyAI7VnddKtacynPAICq-rWhgk5O2xggZjw",
    authDomain: "appdominales.firebaseapp.com",
    databaseURL: "https://appdominales.firebaseio.com",
    projectId: "appdominales",
    storageBucket: "appdominales.appspot.com",
    messagingSenderId: "392692640983",
    appId: "1:392692640983:web:93e5ef0f09a8affe665492",
    measurementId: "G-MPXE1PS7HX"
};
firebase.initializeApp(firebaseConfig);



Vue.config.productionTip = false
Vue.use(VueRouter)


const router = new VueRouter ({
  routes: Routes,
  mode:'history'

});

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
