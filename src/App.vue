<template>
  <div id="app">
<!--    <Test />-->
    <router-view/>
  </div>
</template>

<script>
// import Test from './components/Test.vue'
// import RouterTest from './components/RouterTest'

export default {
  name: 'App',
  components: {
    // Test,
    // RouterTest
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
