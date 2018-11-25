// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'

Vue.config.productionTip = false

let app;
let config = {
  apiKey: "AIzaSyABzzeV8J-cbA1mAMAUFmIEbOwKStdzr8Y",
  authDomain: "vue-firebase-tutorial-4ff42.firebaseapp.com",
  databaseURL: "https://vue-firebase-tutorial-4ff42.firebaseio.com",
  projectId: "vue-firebase-tutorial-4ff42",
  storageBucket: "vue-firebase-tutorial-4ff42.appspot.com",
  messagingSenderId: "667132941666"
};

firebase.initializeApp(config);
firebase.auth().onAuthStateChanged(function(user){
  /* eslint-disable no-new */
if (!app){
  app=  new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
  })
}

});

