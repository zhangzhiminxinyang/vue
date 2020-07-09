<template>
    <div>
      Hi Vue!{{message}}
    </div>
</template>

<script>
    export default {
        data(){
          return {
            message:'在data中定义变量,在html部分显示变量的值'
          }
        },
        name: "SayHi"
    }
</script>

<style scoped>

</style>
