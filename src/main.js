import Vue from 'vue'
import App from './App.vue'
import store from './store'
import Web3 from 'web3'

Vue.config.productionTip = false

let web3

if (typeof web3 !== 'undefined') {
  web3 = new Web3(web3.currentProvider);
} else {
  // set the provider you want from Web3.providers
  web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
}

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
