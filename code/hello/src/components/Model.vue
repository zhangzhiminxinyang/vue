<template>
    <div id="app">
      <h1>你好，{{ name }}</h1>
      <input type="text" v-model="name" value="Vue.js" />
    </div>
</template>

<script>
    export default {
        data (){
          return {
            name:'Vue.js'
          }
        }
    }
</script>

<style scoped>

</style>
