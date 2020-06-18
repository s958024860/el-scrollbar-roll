<template>
  <div></div>
</template>

<script>
export default {
  name: 'RouteB',
  created () {
    this.$router.push({ path: '/routeA' })
  }
}
</script>

<style scoped>

</style>
