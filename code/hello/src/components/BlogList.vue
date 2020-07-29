<template>
    <table>
      <tr v-for="blog in blogs">
        <td>{{ blog.title }}</td>
      </tr>
    </table>
</template>

<script>
    export default {
        name: "BlogList",
        data(){
          return {
            title:'博客列表页',
            blogs:[]
          }
        },
      mounted() { //表示页面完成后应该做哪些事情
          //this.表示当前的vue组件（即BookList）,$http表示所有以$开头的变量都是vue的特殊变量，即发起http请求的对象
          this.$http.get('api/interface/blogs/all').then((response)=>{
            console.info(response.body)
            this.blogs = response.body.blogs
          }, (response)=>{
            console.error(response)
          })
      }
    }
</script>

<style scoped>
  td{
    text-align:left;
  }
</style>
