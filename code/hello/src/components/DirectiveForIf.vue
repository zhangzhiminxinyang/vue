<template>
  <div id="app">
    打印出以 'n'开头的与Vue.js相关的技术
    <ul>
      <li v-for="tech in technologies" v-if="tech.indexOf('n') === 0">
        {{ tech }}
      </li>
    </ul>
  </div>
</template>

<script>
    export default {
        name: "DirectiveForIf",
        data(){
          return {
            technologies:['nvm','npm','node','webpack','ecma_script']
          }
        }
    }
</script>
<style scoped>

</style>
