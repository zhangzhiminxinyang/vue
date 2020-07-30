<template>
    <div>
      <h1>标题：{{ blog.title}}</h1>
      <p>发布于：{{ blog.created_at}}</p>
    </div>
</template>

<script>
    export default {
        name: "Blog",
        data (){
          return {
            //初始化blog用到的变量
            blog:{}
          }
        },
      mounted() {
          this.$http.get('api/interface/blogs/show?id='+this.$route.query.id).then((response)=>{
            this.blog = response.body.result
          }, (response)=>{
            console.error(reponse)
          })
      }
    }
</script>

<style scoped>

</style>
