<template>
  <div id="app">
    <h1>我们使用的技术是</h1>
    <div v-if="name === 'Vue.js'">
      Vue.js
    </div>
    <div v-else-if="name === 'angular'">
      Angular
    </div>
    <div v-else="name === 'React'">
      React
    </div>
  </div>
</template>

<script>
    export default {
        name: "Vue.js"
    }
</script>

<style scoped>

</style>
