<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld/>
    <todolist />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import todolist from './components/TodoList'

export default {
  name: 'app',
  components: {
    HelloWorld,
    todolist
  },
  beforeCreate () {
    // console.log('registerWeb3 Action dispatched from casino-dapp.vue')
    this.$store.dispatch('registerWeb3')
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
