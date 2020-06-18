<template>
  <div></div>
</template>

<script>
import Vue from 'vue'

export default {
  name: 'RouteA',
  created () {
    Vue.count === 0 && console.time('push--name性能测试')
    if (Vue.count < 50) {
      Vue.count++
      // this.$router.push({ path: '/routeB' })
      this.$router.push({ name: 'routeB' })
    } else {
      console.timeEnd('push--name性能测试')
    }
  }
}
</script>

<style scoped>

</style>
