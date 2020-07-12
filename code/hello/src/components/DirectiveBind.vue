<template>
    <div id="app">
      <p v-bind:style="'color:'+my_color">V-bind的使用</p>
    </div>
</template>

<script>
    export default {
        name: "DirectiveBind",
        data (){
          return{
            my_color:'green'
          }
        }
    }
</script>

<style scoped>

</style>
