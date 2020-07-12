<template>
    <div id="app">
      <h1>跟Vue.js相关的技术有：</h1>
      <ul>
        <li v-for="tech in technologies">
          {{ tech }}
        </li>
      </ul>
    </div>

</template>

<script>
    export default {
        name: "DirectiveFor",
        data(){
          return {
            technologies:['nvm','npm','node','webpack','ecma_script']
          }
        }
    }
</script>

<style scoped>

</style>
