<template>
    <div>
      Hi Vue!{{message}}
      <input type="button" @click="show_my_value()" value="方法调用">
    </div>
</template>

<script>
    export default {
        data(){
          return {
            message:'在data中定义变量,在html部分显示变量的值',
            my_value:'方法的声明和调用'
          }
        },
        methods:{
          // 方法声明
          show_my_value:function(){
            alert('my_value:',+this.my_value);
          }
        },
        name: "SayHi"
    }
</script>

<style scoped>

</style>
